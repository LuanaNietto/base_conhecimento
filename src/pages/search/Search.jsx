import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchPosts } from "../../services/articleService";
import { ContainerResults, SearchPosts, TextResults } from "./SearchStyled";
import { Card } from "../../components/Card/Card";

export function Search() {
  const { title } = useParams();
  const [posts, setPosts] = useState([]);

  async function search() {
    try {
      const postsApi = await searchPosts(title);
      setPosts(postsApi.data);
    } catch (err) {;
      setPosts([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {posts.length
            ? `Encontramos ${posts.length} ${
                posts.length > 1 ? "resultados" : "resultado"
              } para:`
            : "Não encontramos resultados para:"}
        </span>
        <h2>{title}</h2>
      </TextResults>

      <SearchPosts>
        {posts.map((item) => (
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
      </SearchPosts>
    </ContainerResults>
  );
}