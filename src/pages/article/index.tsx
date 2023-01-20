import useAspidaSWR from '@aspida/swr'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '~/layouts/DefaultLayout'
import { pagesPath } from '~/utils/$path'
import { apiClient } from '~/utils/apiClient'
import { Box, Button, FormControl, HStack, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'

export type OptionalQuery = {
  search: string
}

const ArticleList: NextPage = () => {
  const router = useRouter()
  const query = router.query as Partial<OptionalQuery>
  const search = query.search ? query.search.trim() : ''
  const { data: articleList } = useAspidaSWR(apiClient.article, {
    query: { search }
  })
  const [, setSearchWord] = useState('')

  return (
    <Layout title={'記事一覧'}>
      <Text fontSize="4xl">Articles</Text>
      <HStack>
        <Box>
          <FormControl
            onSubmit={(e) => {
              e.preventDefault()
              router.push(
                pagesPath.article.$url({
                  query: {
                    search
                  }
                })
              )
            }}
          >
            <HStack>
              <Input
                type="text"
                name="query"
                onInput={(e) =>
                  e.target instanceof HTMLInputElement &&
                  setSearchWord(e.target.value)
                }
              />
              <Button type="submit">search</Button>
            </HStack>
          </FormControl>
        </Box>
      </HStack>
      {articleList ? (
        articleList.length ? (
          <>
            {search && (
              <span>
                Results for <code>{search}</code>.
              </span>
            )}
            <ul>
              {articleList.map((article) => (
                <li key={article.id}>
                  <Link
                    href={pagesPath.article.entry.$url({
                      query: { id: article.id }
                    })}
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        ) : (
          search && (
            <span>
              Not found for <code>{search}</code>.
            </span>
          )
        )
      ) : (
        <span>Loading...</span>
      )}
    </Layout>
  )
}

export default ArticleList
