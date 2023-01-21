import useAspidaSWR from '@aspida/swr'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { apiClient } from '~/utils/apiClient'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'

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
      <Head>
        <title>{article?.title ?? 'Loading...'}</title>
      </Head>
      {article ? (
        <>
          <h1>{article.title}</h1>
          <pre>{article.body}</pre>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

export default Article
