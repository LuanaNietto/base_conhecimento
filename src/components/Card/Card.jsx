import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader } from "./CardStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { curtirPost} from "../../services/articleService";
import { searchFunction } from "../../functions/searchFunction";

export function Card(props) {
  const {
    reset
  } = useForm({
    resolver: zodResolver(searchFunction),
  });

  async function curtir(data) {
    console.log(data);
    const id = data.id;
    await curtirPost(id);
    reset();
  }

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
                <span>{props.likes}</span>
              </section>
            </form>  
          </CardFooter>
        </div>
      </CardBody>
    </CardContainer>
  );
}