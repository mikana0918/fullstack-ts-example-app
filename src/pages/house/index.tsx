import { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import {
  Box,
  Link,
  Card,
  CardBody,
  Flex,
  Image,
  Heading
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { staticPath } from '~/utils/$path'
import { pagesPath } from '~/utils/$path'

const Page: NextPage = () => {
  useNextHeadMutation('申請区分選択')

  return (
    <Box width={'100vw'}>
      <Heading mb="8">区分を選んでください</Heading>

      <Flex>
        <Link as={NextLink} href={pagesPath.house.move_in.$url().pathname}>
          <Card mr="8">
            <Image
              src={staticPath.category_sub_move_in_jpeg}
              alt="house-category-image"
            />
            <CardBody>転入</CardBody>
          </Card>
        </Link>
        <Link as={NextLink} href="TODO">
          <Card mr="8">
            <Image
              src={staticPath.category_sub_move_out_jpeg}
              alt="family-category-image"
            />
            <CardBody>転出</CardBody>
          </Card>
        </Link>
        <Link as={NextLink} href="TODO">
          <Card mr="8">
            <Image
              src={staticPath.category_sub_reloction_jpeg}
              alt="family-category-image"
            />
            <CardBody>転居</CardBody>
          </Card>
        </Link>
      </Flex>
    </Box>
  )
}

export default Page
