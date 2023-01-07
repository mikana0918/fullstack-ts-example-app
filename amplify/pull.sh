#!/bin/bash
set -e
IFS='|'

# env名を引数から取得
# ex: develop, staging, production
env=$1
access_key_id=$2
secret_access_key=$3
# ex: ~/.npm-global/bin
amplify_bin_path=$4

REACTCONFIG="{\
\"SourceDir\":\"src\",\
\"DistributionDir\":\"out\",\
\"BuildCommand\":\"npm run build\",\
\"StartCommand\":\"npm run start\"\
}"
AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":$access_key_id,\
\"secretAccessKey\":$secret_access_key,\
\"region\":\"ap-northeast-1\"\
}"
AMPLIFY="{\
\"projectName\":\"frourio-sample\",\
\"appId\":\"d115dbcw0d9yj9\",\
\"envName\":$env,\
\"defaultEditor\":\"code\"\
}"
FRONTEND="{\
\"frontend\":\"javascript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"
PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

$amplify_bin_path/amplify pull \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes