import type { FormEvent, ChangeEvent } from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { useCallback, useState } from 'react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.scss'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '@prisma/client'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import type { NextPage } from 'next'

const TaskManagementPage: NextPage = () => {
  useNextHeadMutation('タスク')

  const { data: tasks, error, mutate } = useAspidaSWR(apiClient.tasks)
  const [label, setLabel] = useState('')
  const inputLabel = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setLabel(e.target.value),
    []
  )

  const createTask = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      if (!label) return

      await apiClient.tasks.post({ body: { label } })
      setLabel('')
      mutate()
    },
    [label]
  )

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    mutate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    mutate()
  }, [])

  if (error) return <div>failed to load</div>

  return (
    <>
      <Heading>Todos</Heading>
      <Box>
        <form style={{ textAlign: 'center' }} onSubmit={createTask}>
          <input value={label} type="text" onChange={inputLabel} />
          <input type="submit" value="ADD" />
        </form>
        {tasks && (
          <ul className={styles.tasks}>
            {tasks.map((task) => (
              <li key={task.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleDone(task)}
                  />
                  <span>{task.label}</span>
                </label>
                <input
                  type="button"
                  value="DELETE"
                  style={{ float: 'right' }}
                  onClick={() => deleteTask(task)}
                />
              </li>
            ))}
          </ul>
        )}
      </Box>
    </>
  )
}

export default TaskManagementPage
