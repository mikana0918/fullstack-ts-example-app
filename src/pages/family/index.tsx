import { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'

const Page: NextPage = () => {
  useNextHeadMutation('TODO')

  return <>結婚・出生・離婚</>
}

export default Page
