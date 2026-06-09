import { Form, useLoaderData } from "react-router"

export const UserPage = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <Form method="post" action="/users">
                <input
                    name="q"
                    type="text"
                    placeholder="Search repositories..."
                />
                <button type="submit">Search</button>
            </Form>
        </div>
    )
}
