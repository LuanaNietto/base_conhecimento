import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  ErrorSpan,
  InputSpace,
  Nav,
  UserLoggedSpace,
} from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchFunction } from "../../functions/searchFunction";
import { userLogged } from "../../services/userService";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../context/Context";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {Article} from "../../pages/article/Article";

export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchFunction),
  });
  const navigate = useNavigate();
  // const { user, setUser } = useContext(UserContext);
  const [ token, setToken ] = useState(false);

  function onSearch(data) {
    const { title } = data;
    navigate(`/search/${title}`);
    reset();
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      if (response.statusText == 'OK') {
        setToken(true);
      } 

    } catch (error) {
      console.log(error);
    }
  }

  function signout() {
    Cookies.remove("token");
    setToken(false);
    navigate("/");
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>

            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise pela palavra chave"
            />
          </InputSpace>
        </form>

        {token ? (
          <UserLoggedSpace>
            <Link to="/admin">
              <Button type="button" text="Admin">
                Admin
              </Button>
            </Link>

            <i className="bi bi-box-arrow-right" onClick={signout}></i>
          </UserLoggedSpace>
         ) : (
          <Link to="/login">
            <Button type="button" text="Entrar">
              Entrar
            </Button>
          </Link>
            
        )}

      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
       <Outlet />
    </>
  );
}