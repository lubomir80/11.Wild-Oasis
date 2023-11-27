import styled, { css } from "styled-components";
import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import Button from "../../ui/Button";
import { creatCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";



const Form = styled.form`
   padding: 2.4rem 4rem;
   background-color: var(--color-grey-0);
   border: 1px solid var(--color-grey-100);
   border-radius: var(--border-radius-md);
   overflow: hidden;
   font-size: 1.4rem;
`;

const Input = styled.input`
   &:disabled{
      background-color: var(--color-grey-500);
   }
`
const Textarea = styled.textarea`
   &:disabled{
         background-color: var(--color-grey-500);
   }
`
const Fileinput = styled.input.attrs({ type: "file" })`
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



function CreateCabinForm() {
   const { register, handleSubmit, reset, getValues, formState } = useForm();
   const { errors } = formState;

   const queryClient = useQueryClient();
   const { mutate, isLoading: isCreating } = useMutation({
      mutationFn: creatCabin,
      onSuccess: () => {
         toast.success("New cabin successfully created");
         queryClient.invalidateQueries({ queryKey: ["cabins"] });
         reset();
      },
      onError: (err) => toast.error(err.message)
   })

   function onSubmit(data) {
      mutate({ ...data, image: data.image[0] })
   }

   function onError(errors) {
      // console.log(errors)
   }



   return (
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
         <FormRow error={errors?.name?.message} label="Cabin name">
            <Input
               type="text"
               id="name"
               disabled={isCreating}
               {...register("name",
                  { required: "This field is required" })} />
         </FormRow>
         <FormRow error={errors?.maxCapacity?.message} label="Maxixum Capacity">
            <Input
               type="number"
               id="maxCapacity"
               disabled={isCreating}
               {...register("maxCapacity",
                  {
                     required: "This field is required",
                     min: {
                        value: 1,
                        message: "Capacity should be at least 1"
                     }
                  })} />
         </FormRow>
         <FormRow error={errors?.regularPrice?.message} label="Regular price">
            <Input
               type="number"
               id="regularPrice"
               disabled={isCreating}
               {...register("regularPrice"
                  , {
                     required: "This field is required",
                     min: {
                        value: 1,
                        message: "Capacity should be at least 1"
                     }
                  })} />
         </FormRow>
         <FormRow error={errors?.discount?.message} label="Discount">
            <Input
               type="number"
               id="discount"
               defaultValue={0}
               disabled={isCreating}
               {...register("discount"
                  , {
                     required: "This field is required",
                     validate: (value) => value <= getValues().regularPrice || "Discount shoud be less the regular price"
                  })} />
         </FormRow>
         <FormRow error={errors?.description?.message} label="Description for website">
            <Textarea
               ype="text"
               id="description"
               disabled={isCreating}
               {...register("description", { required: "This field is required" })} />
         </FormRow>
         <FormRow label="Cabin photo">
            <Fileinput
               id="image"
               accept="image/*"
               disabled={isCreating}
               {...register("image")} />
         </FormRow>
         <FormRow>
            <Button variations="secondary" type="reset">Cancel</Button>
            <Button disabled={isCreating}>Add cabin</Button>
         </FormRow>
      </Form>
   )
}



export default CreateCabinForm