import styled from "styled-components";

/*korábban létrehozott Header component stilizálása*/
export const StyledHeader = styled.header`
  /* background-color: #ebfbff; */
  /* background-color: ${(props) => props.bg}; */

  /*a props destruktúrálásával csak a bg-t az átadott props nevét kell megadni*/
  /* background-color: ${({ bg }) => bg}; */

  /*app.js-ben deklarált globális theme hivatkozása*/
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 20px;

  /*   h1 {
    color: red;
  }

  &:hover {
    background-color: lavender;
  } */
`;
