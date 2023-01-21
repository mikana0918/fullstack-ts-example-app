import Head from 'next/head'

interface Props {
  title: string
}

const PageHead = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  )
}

export default PageHead
