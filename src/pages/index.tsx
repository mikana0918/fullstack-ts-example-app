import type { NextPage } from 'next'
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
import { staticPath } from '~/utils/$path'
import NextLink from 'next/link'
import { pagesPath } from '~/utils/$path'

const Home: NextPage = () => {
  useNextHeadMutation('トップ')

  return (
    <Box width={'100vw'}>
      <Heading mb="8">何を申請しますか?</Heading>

      <Flex>
        <Link as={NextLink} href={pagesPath.house.$url().pathname}>
          <Card mr="8">
            <Image
              src={staticPath.category_move_jpeg}
              alt="house-category-image"
            />
            <CardBody>転入・転出・転居</CardBody>
          </Card>
        </Link>
        <Link as={NextLink} href={pagesPath.family.$url().pathname}>
          <Card mr="8">
            <Image
              src={staticPath.category_marry_jpeg}
              alt="family-category-image"
            />
            <CardBody>結婚・出生・離婚</CardBody>
          </Card>
        </Link>
        <Link as={NextLink} href={pagesPath.death.$url().pathname}>
          <Card mr="8">
            <Image
              src={staticPath.category_death_jpeg}
              alt="family-category-image"
            />
            <CardBody>死亡</CardBody>
          </Card>
        </Link>
      </Flex>
    </Box>
  )
}

export default Home
