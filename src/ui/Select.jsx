import styled from "styled-components"


const StykedSelect = styled.select`
   font-size: 1.4rem;
   padding: 0.8rem 1.2rem;
   border: 1px solid ${(props) =>
      props.type === "white"
         ? "var(--color-grey-100)"
         : "var(--color-grey-300)"};
   border-radius: var(--border-radius-sm);
   background-color: var(--collor-grey-0);
   font-weight: 500;
   box-shadow: var(--shadow-sm);
`



function Select({ options, value, onChange, ...props }) {
   return (
      <StykedSelect value={value} onChange={onChange} {...props} >
         {options.map(option =>
            <option key={option.value} value={option.value}>
               {option.label}
            </option>)}
      </StykedSelect>
   )
}

export default Select