import { NextPage } from 'next'
import { useNextHeadMutation } from '~/store/useNextHeadMutation'

const Page: NextPage = () => {
  useNextHeadMutation('TODO')

  return <>転入・転出・転居</>
}

export default Page
