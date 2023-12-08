import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  /* position: fixed;
  top: 0; */
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const Body = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  margin: 1rem auto;
  width: 80%;
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

export const Li = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
  
`;