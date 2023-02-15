import { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'

const Page: NextPage = () => {
  useNextHeadMutation('TODO')

  return <>死亡に関するお手続き</>
}

export default Page
