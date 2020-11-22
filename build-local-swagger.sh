#!/bin/bash

API_FOLDER="./public/api"

rm -rf $API_FOLDER/doc*
mkdir -p $API_FOLDER/doc
cp ./swagger/src/* $API_FOLDER/doc
cp -r ./swagger/api/v1 $API_FOLDER

API_DOC_URL="http://localhost:3000/api"
API_HOST_URL="http://localhost:3000/api"

API_DOC_URL_ESC=$(printf '%s\n' "$API_DOC_URL" | sed -e 's/[]\/$*.^[]/\\&/g')
API_HOST_URL_ESC=$(printf '%s\n' "$API_HOST_URL" | sed -e 's/[]\/$*.^[]/\\&/g')

sed -i "s/API_DOC_URL/$API_DOC_URL_ESC/g" $API_FOLDER/doc/index.html
sed -i "s/API_HOST_URL/$API_HOST_URL_ESC/g" $API_FOLDER/v1/swagger.yaml

node ./node_modules/yamljs/cli/yaml2json.js $API_FOLDER/v1/swagger.yaml > $API_FOLDER/v1/swagger.json

rm -rf $API_FOLDER/v1/swagger.yaml

echo "Done!"
exit 0
