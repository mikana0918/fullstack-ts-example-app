import AWS from 'aws-sdk'
import { AWS_S3_BUCKET_USER_UPLOADS } from '$/env'

const s3Client = new AWS.S3({ apiVersion: '2006-03-01' })

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
  upload: ({ file, storageKey }: { file: AWS.S3.Body, storageKey: string }) => {
    const request: AWS.S3.PutObjectRequest = {
      Bucket: AWS_S3_BUCKET_USER_UPLOADS,
      Key: storageKey,
      Body: file
    }
    
    s3Client.upload(request, (err, data) =>  {
      if (err) {
        console.log("Error", err);
      } if (data) {
        console.log("Upload Success", data.Location);
      }
    })
  }
}
