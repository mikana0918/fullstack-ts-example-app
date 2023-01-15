import AWS from 'aws-sdk'
import { AWS_REGION } from '$/env'

export const registerProviderAWS = () => {
  AWS.config.update({
    credentials: new AWS.EnvironmentCredentials(
      'AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY'
    ),
    region: AWS_REGION,
    s3ForcePathStyle: true
  })
}
