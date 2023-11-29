import styled from "styled-components";

export const Form = styled.form`
   padding: 2.4rem 4rem;
   background-color: var(--color-grey-0);
   border: 1px solid var(--color-grey-100);
   border-radius: var(--border-radius-md);
   overflow: hidden;
   font-size: 1.4rem;
`;
export const Input = styled.input`
   &:disabled{
      background-color: var(--color-grey-500);
   }
`
export const Textarea = styled.textarea`
   &:disabled{
         background-color: var(--color-grey-500);
   }
`
export const Fileinput = styled.input.attrs({ type: "file" })`
   font-size: 1.4rem;
   border-radius: var(--border-radius-sm);

   &::file-selector-button {
      font: inherit;
      font-weight: 500;
      padding: 0.8rem 1.2rem;
      margin-right: 1.2rem;
      border-radius: var(--border-radius-sm);
      border: none;
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);
      cursor: pointer;
      transition: color 0.2s, background-color 0.2s;

      &:hover {
         background-color: var(--color-brand-700);
      }
   }
`