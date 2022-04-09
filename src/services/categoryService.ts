import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { create } from "../dynamoDBService/dynamoDBService";
import { TABLE_NAME } from "../utils/const";

export async function addCategory(payload: any) {
  return create(TABLE_NAME, payload)
}
