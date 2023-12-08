import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader} from "./CardStyled";
import { curtirPost } from "../../services/articleService";
import { useState, useEffect} from "react";

export function Card(props) {
  const [like, setLike] = useState('');

  async function curtir() {
    const id = props.id;
    await curtirPost(id);
    const novoNumeroDeCurtidas = props.likes + 1;
    setLike(novoNumeroDeCurtidas);
  }

  useEffect(() => {
    setLike(props.likes);
  }, []);

  return (
    <CardContainer>
      <CardBody>
        <div>
          <CardHeader >
            {props.feature == 'on' ? (<i className="bi bi-star" style={{color: '#DAA520', fontSize: '15px'}}></i> ): (<i></i>)}
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>

          <CardFooter>
            <form onSubmit={(e) => { e.preventDefault(); curtir(); }}>
              <section>
                <button type="submit" style={{border: 'none'}}> <i className="bi bi-hand-thumbs-up" style={{color: 'blue', fontSize: '18px'}}></i> </button>
                <span>{like}</span>
              </section>
            </form>  
          </CardFooter>
        </div>
      </CardBody>
    </CardContainer>
  );
}