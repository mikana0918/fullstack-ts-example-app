import { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  Heading,
  Image,
  useToast,
  RadioGroup,
  Stack,
  Radio
} from '@chakra-ui/react'
import { Field, Form, Formik, FieldProps } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { z } from 'zod'

interface FormValue {
  // TODO
  todo: string // FIXME: remove this
}

const formSchema = z.object({
  // TODO:
})
const Page: NextPage = () => {
  useNextHeadMutation('転入のお手続き')

  const initialValues = {
    //TODO
  }

  const handleSubmit = () => {
    console.log('TODO: Please handle this: handleSubmit')
  }

  return (
    <Box width={'100vw'}>
      <Heading mb="8">転入のお手続き</Heading>
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={toFormikValidationSchema(formSchema)}
        >
          {({ values }) => (
            <Form>
              <Field name="hasForeigner">
                {() => {
                  return (
                    <FormControl as="fieldset" mb={12} isRequired>
                      <FormLabel>Q1: 国外から転入する方がいる</FormLabel>
                      <Button mt={4} mr={4} colorScheme="teal">
                        はい
                      </Button>
                      <Button mt={4}>いいえ</Button>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name="aboutCertificate">
                {() => {
                  return (
                    <FormControl as="fieldset" mb={12}>
                      <FormLabel>
                        Q2: お持ちの証明書に全て当てはまるものを選んでください
                      </FormLabel>
                      <RadioGroup
                        onChange={() => {
                          console.log('TODO: onchange RadioGroup')
                        }}
                        value={'TODO'}
                      >
                        <Stack>
                          <Radio value="1">
                            マイナンバーカードを持っている方がいる
                          </Radio>
                          <Radio value="2">
                            住民基本台帳カードを持っている方がいる
                          </Radio>
                          <Radio value="3">
                            運転免許証を持っている方がいる
                          </Radio>
                          <Radio value="4">在留カードを持っている</Radio>
                          <Radio value="5">特別永住者証明書を持っている</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  )
                }}
              </Field>
              <Field name="aboutFamilyStructure">
                {() => {
                  return (
                    <FormControl as="fieldset" mb={12}>
                      <FormLabel>
                        Q3:
                        ご世帯の状況について、当てはまるものを全て選んでください
                      </FormLabel>
                      <RadioGroup
                        onChange={() => {
                          console.log('TODO: onchange RadioGroup')
                        }}
                        value={'TODO'}
                      >
                        <Stack>
                          <Radio value="1">妊娠中の方がいる</Radio>
                          <Radio value="2">養育中の20歳未満の子供がいる</Radio>
                          <Radio value="3">65歳以上の方がいる</Radio>
                          <Radio value="4">年金を受給している方がいる</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>
                  )
                }}
              </Field>
              <Button mt={4} mr={4} colorScheme="teal" type="submit">
                手続きを調べる
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  )
}

export default Page
