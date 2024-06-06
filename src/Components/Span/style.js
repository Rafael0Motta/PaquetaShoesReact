import styled from "styled-components";

export const Span = styled(({ isBlack, isLink, ...rest }) => (
  <span {...rest} />
))`
  color: #ffffff;
  font-weight: 400;
  font-size: 14px;

  ${(props) =>
    props.isLink &&
    `
  font-weight: 500;`}

  ${(props) =>
    props.isBlack &&
    `
    color:#000000;
 `}

 
${(props) =>
    props.isNav &&
    `
    color:#000000;
    font-size: 18px;
    font-weight: 500;
  `}


&:hover {
    ${(props) =>
      (props.isBlack || props.isNav) &&
      `
      color: #ff8a29 ;
    `}
  }
`;
