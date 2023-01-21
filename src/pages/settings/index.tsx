import { ChangeEvent, useState } from 'react'
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Image
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import { Field, Form, Formik, FieldProps } from 'formik'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'

interface FormValue {
  file?: File
  username: string
}

const ELEMENT_ID_INPUT_FILE_UPLOADER = 'file-upload'

const Settings: NextPage = () => {
  useNextHeadMutation('設定')

  const { data: me, mutate } = useAspidaSWR(apiClient.users.me)

  const [inputImgPreviewURL, setInputImgPreviewURL] = useState<string>('')

  const editIcon = async (
    evt: ChangeEvent<HTMLInputElement>
  ): Promise<File | undefined> => {
    if (evt.target.files?.length === 0) {
      console.error('File does not exist.')

      return
    }

    const file = evt.target.files?.item(0)

    if (!file) {
      console.error('The file length is zero and can not be processed.')

      return
    }

    const buf = await file.arrayBuffer()

    const blob = new Blob([new Uint8Array(buf)], { type: file.type })

    const localFileLink = URL.createObjectURL(blob)

    setInputImgPreviewURL(localFileLink)

    return file
  }

  const handleSubmit = (params: FormValue) => {
    apiClient.users.post({
      body: {
        file: params.file,
        user_name: params.username
      }
    })
  }

  const initialValues: FormValue = {
    file: undefined,
    username: me?.user_name ?? ''
  }

  return (
    <>
      <Heading>Settings</Heading>
      <Box>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form>
              <Field name="username">
                {({ field, form }: FieldProps<FormValue, FormValue>) => (
                  <FormControl as="fieldset" mb={4}>
                    <FormLabel requiredIndicator={<span>*</span>}>
                      Your Name
                    </FormLabel>
                    <Input
                      {...field}
                      placeholder={me?.user_name ?? 'John Doe'}
                      type="text"
                      name="username"
                      value={values.username}
                      required
                    />
                    <FormHelperText>Your username.</FormHelperText>
                  </FormControl>
                )}
              </Field>
              <Field name="file">
                {({ field, form }: FieldProps<FormValue, FormValue>) => (
                  <FormControl as="fieldset" mb={4}>
                    <FormLabel>Your profile picture</FormLabel>
                    <Image
                      cursor={'pointer'}
                      src={inputImgPreviewURL}
                      fallbackSrc="https://via.placeholder.com/150"
                      onClick={() =>
                        document
                          .getElementById(ELEMENT_ID_INPUT_FILE_UPLOADER)
                          ?.click()
                      }
                    />
                    <Input
                      id={ELEMENT_ID_INPUT_FILE_UPLOADER}
                      cursor={'pointer'}
                      type="file"
                      placeholder="Upload your file..."
                      accept="image/*"
                      onChange={(evt) => {
                        setFieldValue('file', evt.target.files?.item(0))
                        editIcon(evt)
                      }}
                    />
                    <FormHelperText>
                      Recommended square-ish picture. Please make sure upload in
                      valid media types.
                    </FormHelperText>
                    {/* <FormErrorMessage>{form.errors.query}</FormErrorMessage> */}
                  </FormControl>
                )}
              </Field>
              <Button mt={4} colorScheme="teal" type="submit">
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  )
}

export default Settings
