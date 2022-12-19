import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Home() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("gonna get all posts!");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = (post) => {
    console.log("handleShowPost", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPostsShowVisible(false);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) =>
      setPosts(
        posts.map((post) => {
          if (post.id === post.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      )
    );
    handleHidePost();
  };

  const handleDestroyPost = (post) => {
    console.log(post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);
  // const handleClose = () => {
  //   console.log("handleClose");
  //   setIsPostsShowVisible(false);
  // };
  const [currentPost, setCurrentPost] = useState({});

  return (
    <div className="container">
      {/* <Signup />
      <Login /> */}
      <LogoutLink />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <h2>{currentPost.title}</h2>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onPostDestroy={handleDestroyPost} />
      </Modal>

      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
