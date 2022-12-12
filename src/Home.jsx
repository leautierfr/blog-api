import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Home() {
  const [posts, setPosts] = useState([]);
  const handleIndexPosts = () => {
    console.log("gonna get all posts!");
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  useEffect(handleIndexPosts);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };
  const [currentPost, setCurrentPost] = useState({});

  return (
    <div>
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <h2>{currentPost.title}</h2>
      </Modal>

      <PostsNew />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
