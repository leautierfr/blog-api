// import axios from "axios";

// export function PostsNew(props) {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("making a post");
//     const params = new FormData(event.target);
//     axios.post("http://localhost:3000/posts.json", params).then((response) => {
//       console.log(response.data);
//       event.target.reset();
//     });
//   };
export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit", params);
    props.onCreatePost(params);
    event.target.reset();
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          title: <input name="title" type="text" />
        </div>
        <div>
          body: <input name="body" type="text" />
        </div>
        <div>
          image: <input name="image" type="text" />
        </div>
        <button type="submit">New Post</button>
      </form>
    </div>
  );
}
