export default async function Page() {
    const posts = await fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json());
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
