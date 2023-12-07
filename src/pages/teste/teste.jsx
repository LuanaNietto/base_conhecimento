import React, { useState, useEffect } from "react";
import { getArtigoById, addArtigo, updateArtigo, deleteArtigo } from "../../services/articleService";
import { HomeBody } from "./HomeStyled";
import { Input } from "../../components/Input/Input";

export function Teste() {
  const [post, setPosts] = useState([]);

  async function findPost() {
    try {
      const response = await getArtigoById('656a04a8fd59925f59dea5a7');
      
      if (response && response.data) {
        console.log("Fetched data:", response.data);
        setPosts(response.data);
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  }

  useEffect(() => {
    findPost();
  }, []);

  const addNewPost = async () => {
    try {
      const newPostData = {
        // Replace with the actual data you want to add
        kb_title: "New Title",
        // Add other fields as needed
      };

      const response = await addArtigo(newPostData);
      setPosts([...post, response.data]);
    } catch (error) {
      console.error("Error adding new post:", error);
    }
  };

  const updateExistingPost = async () => {
    try {
      const updatedPostData = {
        // Replace with the actual data you want to update
        kb_title: "Updated Title",
        // Add other fields as needed
      };

      const response = await updateArtigo('656a04a8fd59925f59dea5a7', updatedPostData);
      const updatedPosts = [...post];
      const updatedPostIndex = updatedPosts.findIndex(item => item._id === '656a04a8fd59925f59dea5a7');
      
      if (updatedPostIndex !== -1) {
        updatedPosts[updatedPostIndex] = response.data;
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deleteExistingPost = async () => {
    try {
      await deleteArtigo('656a04a8fd59925f59dea5a7');
      setPosts([]);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  console.log("Post state:", post);

  return (
    <>
      <HomeBody>
        {post.map(item => (
          <span key={item._id} type="text">{item.kb_title}</span>
        ))}
        <button onClick={addNewPost}>Add New Post</button>
        <button onClick={updateExistingPost}>Update Post</button>
        <button onClick={deleteExistingPost}>Delete Post</button>
        {post.map(item => (
          <span key={item._id} type="text">{item.kb_body}</span>
        ))}
        {post.map(item => (
          <span key={item._id} type="text">{item.kb_keywords}</span>
        ))}
      </HomeBody>
    </>
  );
}