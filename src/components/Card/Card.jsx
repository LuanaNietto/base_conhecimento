import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { curtirPost, getAllPosts} from "../../services/articleService";
import { searchFunction } from "../../functions/searchFunction";
import { useState, useEffect} from "react";

export function Card(props) {
  const {
    reset
  } = useForm({
    resolver: zodResolver(searchFunction),
  });

  const [like, setLike] = useState('');

  async function curtir(data) {
    const id = data.id;
    await curtirPost(id);
    setLike(props.likes);
  }

  useEffect(() => {
    setLike(props.likes);
  }, []);

  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader >
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>

          <CardFooter>
            <form onSubmit={(e) => { e.preventDefault(); curtir(props); }}>
              <section>
                <Button type="submit"></Button>
                <i className="bi bi-hand-thumbs-up"></i>
                <span>{like}</span>
              </section>
            </form>  
          </CardFooter>
        </div>
      </CardBody>
    </CardContainer>
  );
}