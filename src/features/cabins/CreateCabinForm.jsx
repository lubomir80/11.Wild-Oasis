import styled, { css } from "styled-components";
import { useForm } from "react-hook-form"
import Button from "../../ui/Button";

const Form = styled.form`
   padding: 2.4rem 4rem;
   background-color: var(--color-grey-0);
   border: 1px solid var(--color-grey-100);
   border-radius: var(--border-radius-md);
   overflow: hidden;
   font-size: 1.4rem;
`;

const FormRow = styled.div`
`
const Input = styled.input`
`
const Textarea = styled.textarea`
`

const Fileinput = styled.input`
`

const Label = styled.label`
`


function CreateCabinForm() {

   const { register, handleSubmit } = useForm();

   function onSubmit(data) {
      console.log(data)
   }

   return (
      <Form onSubmit={handleSubmit(onSubmit)}>
         <FormRow>
            <Label htmlFor="name">Cabin name</Label>
            <Input type="text" id="name" {...register("name")} />
         </FormRow>
         <FormRow>
            <Label htmlFor="maxCapacity">Maxixum Capacity</Label>
            <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
         </FormRow>
         <FormRow>
            <Label htmlFor="regularPrice">Regular price</Label>
            <Input type="number" id="regularPrice" {...register("regularPrice")} />
         </FormRow>
         <FormRow>
            <Label htmlFor="discount">Discount</Label>
            <Input type="number" id="discount" defaultValue={0}
               {...register("discount")} />
         </FormRow>
         <FormRow>
            <Label htmlFor="description">Description for website</Label>
            <Textarea type="text" id="description" {...register("description")} />
         </FormRow>
         <FormRow>
            <Label htmlFor="photo">Cabin photo</Label>
            <Fileinput type="file" id="name" accept="image/*" {...register("name")} />
         </FormRow>
         <FormRow>
            <Button variations="secondary" type="reset">Cancel</Button>
            <Button>Add cabin</Button>
         </FormRow>
      </Form>
   )
}



export default CreateCabinForm