import React from 'react';

interface Post {
    id: number;
    title: string;
}

const UserPage = async () => {

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/typicode/demo/posts',
        // {cache: 'no-store'}
        {next: { revalidate : 10 }}
    );
    const posts: Post[] = await res.json();
    console.log('posts', posts);

    return (
        <>
            <h1>Posts</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>
    )
}

export default UserPage;