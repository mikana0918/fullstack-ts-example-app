import AWS from "aws-sdk"

export const registerProviderAWS = () => {
  AWS.config.update({region: 'ap-northeast-1'});
}