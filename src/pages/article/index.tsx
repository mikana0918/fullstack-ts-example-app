import { useState, ChangeEvent } from 'react'
import useAspidaSWR from '@aspida/swr'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { pagesPath } from '~/utils/$path'
import { apiClient } from '~/utils/apiClient'
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Text,
  Code
} from '@chakra-ui/react'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import { Field, Form, Formik, FieldProps } from 'formik'
import { Heading } from '@chakra-ui/react'

export type OptionalQuery = {
  search: string
}

interface FormValue {
  query: string
}

const ArticleList: NextPage = () => {
  useNextHeadMutation('記事一覧')

  const router = useRouter()
  const [searchWord, setSearchWord] = useState('')

  const query = router.query as Partial<OptionalQuery>
  const search = query.search ? query.search.trim() : ''
  const { data: articleList } = useAspidaSWR(apiClient.article, {
    query: { search }
  })

  const initialValues: FormValue = { query: '' }
  const isLoading = !articleList

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e.target.value)
  }

  const handleSubmit = () => {
    router.push(
      pagesPath.article.$url({
        query: {
          search: searchWord
        }
      })
    )
  }

  const handleReset = () => {
    setSearchWord('')
    query.search = undefined

    const queryParams = new URLSearchParams(location.search)

    if (queryParams.has('search')) {
      queryParams.delete('search')
      router.replace({
        search: queryParams.toString()
      })
    }
  }

  return (
    <>
      <Heading>Articles</Heading>
      <Box>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Field name="query">
                {({ field, form }: FieldProps<FormValue, FormValue>) => (
                  <FormControl>
                    <FormLabel>Search what you are looking for</FormLabel>
                    <Input
                      {...field}
                      placeholder="search..."
                      type="text"
                      name="query"
                      onChange={handleSearch}
                      value={searchWord}
                    />
                    <FormErrorMessage>{form.errors.query}</FormErrorMessage>
                    <Button
                      mt={4}
                      mr={4}
                      colorScheme="teal"
                      isLoading={isLoading}
                      type="submit"
                    >
                      Search
                    </Button>
                    <Button mt={4} isLoading={isLoading} onClick={handleReset}>
                      Reset
                    </Button>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Box>
      <Box mt={8}>
        {articleList ? (
          articleList.length ? (
            <>
              {search && (
                <Text fontSize={'xl'} mb={2}>
                  Results for <Code>{search}</Code>.
                </Text>
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
      </Box>
    </>
  )
}

export default ArticleList
