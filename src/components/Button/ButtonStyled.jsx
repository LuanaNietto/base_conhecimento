import styled from "styled-components";

export const ButtonSpace = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  width: auto;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;

  :hover {
    background-color: #0a86af;
  }
`;

export const ButtonSpaceOnClick = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  width: auto;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-right: 5px;

  :hover {
    background-color: #0a86af;
  }
`;

export const ButtonSpaceCrud = styled.button`
  background-color: #0bade3;
  border: 1px solid black;
  font-size: 13px;
  padding: 0.4rem 5px;
  color: #fff;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  position: fixed;
  right: 0;
  margin-right: 17px;

  :hover {
    background-color: #0a86af;
  }
`;