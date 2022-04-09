
const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();


export async function create(tableName: string, data: any) {
    await dynamoDb
      .put({
        TableName: tableName,
        Item: data,
      })
      .promise();

    return data;
}