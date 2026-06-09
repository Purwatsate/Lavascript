import type { ActionFunctionArgs } from "react-router";

export const userAction =  async ({request}:ActionFunctionArgs) => {
  const formData = await request.formData();
  const id = formData.get("id") as string;

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    if (err instanceof DOMException) return;
  }
}
