import styled from "styled-components"

const StyledLogo = styled.div`
   text-align: center;
`
const Image = styled.img`
   height: 9.5rem;
   width: auto;
`


function Logo() {
   return (
      <StyledLogo>
         <Image src="/logo-light.png" alt="Logo" />
      </StyledLogo>
   )
}

export default Logo