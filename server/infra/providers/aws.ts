import AWS from 'aws-sdk'
import { AWS_REGION } from '$/env'

export const registerProviderAWS = () => {
  AWS.config.update({
    region: AWS_REGION,
    s3ForcePathStyle: true
  })
}
