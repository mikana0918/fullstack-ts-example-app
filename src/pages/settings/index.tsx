import { ChangeEvent, useState } from 'react'
import { useAuth } from '~/hooks/useAuth'
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Heading,
  Image
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import { Field, Form, Formik, FieldProps } from 'formik'

interface FormValue {
  file?: File
}

const Settings: NextPage = () => {
  useNextHeadMutation('設定')

  const [inputImgPreviewURL, setInputImgPreviewURL] = useState<string>('')

  const { mutate: mutateAuthUser } = useAuth()

  const editIcon = async (evt: ChangeEvent<HTMLInputElement>) => {
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
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
  }

  const initialValues: FormValue = { file: undefined }

  return (
    <>
      <Heading>Settings</Heading>
      <Box>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <Field name="file">
                {({ field, form }: FieldProps<FormValue, FormValue>) => (
                  <>
                    <FormControl as="fieldset" mb={4}>
                      <FormLabel>Your Name</FormLabel>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        type="text"
                        name="username"
                        value={''}
                      />
                    </FormControl>
                    <FormControl as="fieldset" mb={4}>
                      <FormLabel>Your profile picture</FormLabel>
                      <Image
                        src={inputImgPreviewURL}
                        fallbackSrc="https://via.placeholder.com/150"
                      />
                      <Input
                        type="file"
                        placeholder="Upload your file..."
                        accept="image/*"
                        onChange={editIcon}
                      />
                      {/* <FormErrorMessage>{form.errors.query}</FormErrorMessage> */}
                      <Button mt={4} colorScheme="teal" type="submit">
                        Save
                      </Button>
                    </FormControl>
                  </>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  )
}

export default Settings
