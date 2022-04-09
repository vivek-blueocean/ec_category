import { Callback, Context } from "aws-lambda";
import { addCategory } from "./src/services/categoryService";

export async function getAllCategory(event: any, context: Context, callback: Callback) {
  let response = {
    data: ['test']
  };
  console.log(response)
  try {
    return formatJSONResponse(200, response);
  } catch (err) {
    return formatJSONResponse(400, err);
  }
}

export async function createCategory(event: any, context: Context, callback: Callback) {

  const { title, description } = event.body;

  try {
    //const categoryId: string = uuid.v4();
    const post = await addCategory({
      categoryId: 123,
      title,
      description
    });

    return formatJSONResponse(201, post);
  } catch (err) {
    console.log(err)
    return formatJSONResponse(400, err);
  }

}

const formatJSONResponse = (statusCode: number, response: any): any => {
  return {
    statusCode,
    body: JSON.stringify(response),
  };
};