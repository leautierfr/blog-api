export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <h4>{post.body}</h4>
          <img src={post.image_url} alt="" />
          <button onClick={() => props.onSelectPost(post)}>More info!</button>
        </div>
      ))}
    </div>
  );
}
