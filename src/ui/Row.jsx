import styled, { css } from "styled-components"

const Row = styled.div`
   ${({ type }) => type === "horizontal" &&
      css`
      justify-content:space-between;
      align-items: center;
   `}

   ${({ type }) => type === "vertical" &&
      css`
      flex-direction: column;
      gap:1.6rem
   `}
      
   display: flex;
`;

Row.defaultProps = {
   type: "horizontal"
}

export default Row