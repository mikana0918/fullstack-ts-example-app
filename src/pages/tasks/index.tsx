import { useCallback } from 'react'
import {
  Box,
  Heading,
  Button,
  FormControl,
  Input,
  useToast
} from '@chakra-ui/react'
import useAspidaSWR from '@aspida/swr'
import styles from '~/styles/Home.module.scss'
import { apiClient } from '~/utils/apiClient'
import type { Task } from '@prisma/client'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import type { NextPage } from 'next'
import { Field, Form, Formik, FieldProps } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

interface FormValue {
  label: string
}

const formSchema = z.object({
  label: z.string().max(191)
})

const TaskManagementPage: NextPage = () => {
  useNextHeadMutation('タスク')

  const toast = useToast()

  const { data: tasks, error, mutate } = useAspidaSWR(apiClient.tasks)

  const handleSubmit = async (params: FormValue) => {
    await apiClient.tasks.post({ body: { label: params.label } })
    await mutate()

    toast({
      title: 'Added new task ✅',
      status: 'success',
      duration: 4000,
      isClosable: true
    })
  }

  const toggleDone = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).patch({ body: { done: !task.done } })
    mutate()
  }, [])

  const deleteTask = useCallback(async (task: Task) => {
    await apiClient.tasks._taskId(task.id).delete()
    mutate()
  }, [])

  const initialValues = {
    label: ''
  }

  if (error) return <div>failed to load</div>

  return (
    <>
      <Heading>Todos</Heading>
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values, { resetForm }) => {
            await handleSubmit(values)
            resetForm()
          }}
          validationSchema={toFormikValidationSchema(formSchema)}
        >
          {({ values }) => (
            <Form>
              <Field name="label">
                {({ field, form }: FieldProps<FormValue, FormValue>) => (
                  <FormControl as="fieldset" isInvalid={!!form.errors.label}>
                    <Input
                      {...field}
                      type="text"
                      placeholder="TODO..."
                      value={values.label}
                      name="label"
                      required
                    />
                  </FormControl>
                )}
              </Field>
              <Button mt={4} colorScheme="teal" type="submit">
                Add
              </Button>
            </Form>
          )}
        </Formik>
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
