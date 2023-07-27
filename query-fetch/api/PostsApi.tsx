import { PostType } from "../components/Types";


const baseAddress = 'https://jsonplaceholder.typicode.com'


export async function getPosts(): Promise<PostType[]> {
    const url = baseAddress + '/posts'
    const res = await fetch(url);

    if (!res.ok)
    {
        throw new Error("Server returned status code" + res.status)
    }

    return await res.json()
}

export async function createPost(data: PostType): Promise<PostType>
{
    const url = baseAddress + '/posts'
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (!res.ok)
    {
        throw new Error("Server returned status code" + res.status)
    }
    return await res.json();
}

