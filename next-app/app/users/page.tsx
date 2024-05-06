import React from 'react';

interface Post {
    id: number;
    title: string;
}

const UserPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/typicode/demo/posts');
    const posts: Post[] = await res.json();
    console.log('posts', posts);

    return (
        <>
            <h1>Posts *</h1>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
                {/* {posts.map(e => <li key={e.id}>e.title</li>)} */}
            </ul>
        </>
    )
}

export default UserPage;