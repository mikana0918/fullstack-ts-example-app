import AWS from 'aws-sdk'
import {
  AWS_REGION,
  AWS_S3_ENDPOINT,
  AWS_S3_BUCKET_USER_UPLOADS,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY
} from '$/env'

const s3Client = new AWS.S3({
  credentials: new AWS.Credentials(AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY),
  apiVersion: '2006-03-01',
  region: AWS_REGION,
  endpoint: AWS_S3_ENDPOINT,
  s3ForcePathStyle: true,
  logger: console // FIXME: remove
})

export const s3Service = {
  listBuckets: () => {
    return s3Client.listBuckets((err, data) => {
      if (err) {
        console.log('Error', err)
      } else {
        console.log('Success', data.Buckets)

        return data.Buckets
      }
    })
  },
  upload: ({ file, storageKey }: { file: AWS.S3.Body; storageKey: string }) => {
    const request: AWS.S3.PutObjectRequest = {
      Bucket: AWS_S3_BUCKET_USER_UPLOADS,
      Key: storageKey,
      Body: file
    }

    // TODO: those Either are not returned. AWS returns ManagedUpload
    return s3Client.upload(request, (err, data) => {
      if (err) {
        console.error('Failed to upload given [file, err]', file, err)

        // return Either.left(err)
      }

      console.log(`Successfully uploaded data`, data)

      // if (data) {
      //   return Either.right(data)
      // }
    })
  }
}
