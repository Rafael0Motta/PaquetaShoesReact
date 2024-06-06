import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 45px;

  background: linear-gradient(#f99500 100%, #ffcd29 100%);
  border-radius: 3px;
  border: none;
  outline: none;

  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
