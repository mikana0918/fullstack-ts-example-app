import { NextPage } from 'next'
import { useEffect } from 'react'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'
import {
  useToast,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Image
} from '@chakra-ui/react'
import { staticPath } from '~/utils/$path'

const Page: NextPage = () => {
  useNextHeadMutation('ガイド検索結果:転入')

  const toast = useToast()

  useEffect(() => {
    toast({
      title: 'お疲れ様でした。転入のお手続きの結果です。',
      description: '転入のお手続きの詳細はお近くの役所にお問い合わせください。',
      status: 'success',
      duration: 4000,
      isClosable: true
    })
  }, [])

  return (
    <>
      <Heading mb="8">転入のお手続きについて</Heading>

      <Tabs>
        <TabList>
          <Tab>区役所・支所</Tab>
          <Tab>税務署</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Text mb="4">N件のお手続きが必要です。</Text>
            <Text>最寄りの区役所・役所</Text>
            <Text>スペースニードル区役所 アメリカ合衆国シアトル</Text>
            <Image mt="4" src={staticPath.stub_google_map_embed_png} />
          </TabPanel>
          <TabPanel>
            <p>Two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default Page
