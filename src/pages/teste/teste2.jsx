
import React, { useState, useEffect } from "react";
import { getUserById, updateUser, deleteUser } from "../../services/userService";
import { HomeBody } from "./HomeStyled";

// Parte de Usuário

export function Teste() {
  const [post, setPosts] = useState([]);

  console.log("Is post working", post);

  async function findPost() {
    try {
      const response = await getUserById('656a33ef058637f6de5795f2');
      
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

  useEffect(() => {
    console.log("Post state:", post);
  }, [post]);

  const updateExistingPost = async () => {
    try {
      const updatedPostData = {
        // Replace with the actual data you want to update
        author_name: "Nome Autor",
        // Add other fields as needed
      };

      const response = await updateUser('656a33ef058637f6de5795f2', updatedPostData);

      console.log("Update response:", response);

      const updatedPosts = post.map(item => (item._id === '656a33ef058637f6de5795f2' ? response.data : item));
      
      console.log("Updated Posts:", updatedPosts);

      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const deleteExistingPost = async () => {
    try {
      await deleteUser('656a33ef058637f6de5795f2');
      setPosts([]);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <>
      <HomeBody>
        {post.map(item => (
          <div key={item._id}>
            <span>{item.author_name || "No author name"}</span>
            <span>{item.author_email || "No author email"}</span>
            <span>{item.author_user || "No author user"}</span>
          </div>
        ))}
        
        <button onClick={updateExistingPost}>Update Post</button>
        <button onClick={deleteExistingPost}>Delete Post</button>
      </HomeBody>
    </>
  );
}