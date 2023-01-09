import awsExports from '~/aws-exports'

export const getLastAuthUser = () =>
  localStorage.getItem(
    `CognitoIdentityServiceProvider.${awsExports.aws_user_pools_web_client_id}.LastAuthUser`
  )
