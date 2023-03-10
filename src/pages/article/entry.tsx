import useAspidaSWR from '@aspida/swr'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { apiClient } from '~/utils/apiClient'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import { Heading } from '@chakra-ui/react'

export type Query = {
  id: number
}

const Article: NextPage = () => {
  useNextHeadMutation('記事詳細')

  const router = useRouter()

  const { data: article } = useAspidaSWR(
    apiClient.article._articleId(Number.parseInt(router.query.id as string, 10))
  )
  return (
    <>
      {article ? (
        <>
          <Heading fontSize={'4xl'}>{article?.title ?? '無題'}</Heading>
          <pre>{article.body}</pre>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default Article
