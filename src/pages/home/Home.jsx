import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { getAllPosts} from "../../services/articleService";
import { HomeBody} from "./HomeStyled";

export default function Home() {
  const [posts, setPosts] = useState([]);

  async function findPost() {
    const postsResponse = await getAllPosts();
    setPosts(postsResponse.data);
  }

  useEffect(() => {
    findPost();
  }, []);

  return (
    <>
      <HomeBody>
        {posts.map(item => (
          <Card
            key={item._id}
            title={item.kb_title}
            text={item.kb_body}
            banner={item.kb_keywords}
            feature={item.kb_featured}
            likes={item.kb_liked_count}
            id={item._id}
          />
        ))}
      </HomeBody>
    </>
  );
}