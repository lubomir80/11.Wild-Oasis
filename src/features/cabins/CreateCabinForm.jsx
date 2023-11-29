import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form"
import { creatEditCabin } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { Fileinput, Form, Input, Textarea } from "./CreateCabinFormStyled";




function CreateCabinForm({ cabinToEdit = {} }) {
   const { id: editId, ...editValues } = cabinToEdit;
   const isEditSession = Boolean(editId)


   const { register, handleSubmit,
      reset, getValues, formState }
      = useForm({ defaultValues: isEditSession ? editValues : {} });
   const { errors } = formState;


   const queryClient = useQueryClient();
   const { mutate: creatCabin, isLoading: isCreating } = useMutation({
      mutationFn: creatEditCabin,
      onSuccess: () => {
         toast.success("New cabin successfully created");
         queryClient.invalidateQueries({ queryKey: ["cabins"] });
         reset();
      },
      onError: (err) => toast.error(err.message)
   })

   const { mutate: editCabin, isLoading: isEditing } = useMutation({
      mutationFn: ({ newCabinData, id }) => creatEditCabin(newCabinData, id),
      onSuccess: () => {
         toast.success("Cabin successfully edited");
         queryClient.invalidateQueries({ queryKey: ["cabins"] });
         reset();
      },
      onError: (err) => toast.error(err.message)
   })

   const isWorking = isCreating || isEditing


   function onSubmit(data) {
      const image = typeof data.image === "string" ? data.image : data.image[0]

      if (isEditSession)
         editCabin({
            newCabinData: { ...data, image },
            id: editId
         })
      else
         creatCabin({ ...data, image: image })
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
               disabled={isWorking}
               {...register("name",
                  { required: "This field is required" })} />
         </FormRow>
         <FormRow error={errors?.maxCapacity?.message} label="Maxixum Capacity">
            <Input
               type="number"
               id="maxCapacity"
               disabled={isWorking}
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
               disabled={isWorking}
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
               disabled={isWorking}
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
               disabled={isWorking}
               {...register("description", { required: "This field is required" })} />
         </FormRow>
         <FormRow label="Cabin photo">
            <Fileinput
               id="image"
               accept="image/*"
               disabled={isWorking}
               {...register("image", {
                  required: isEditSession ? false : "This field is required"
               })} />
         </FormRow>
         <FormRow>
            <Button variations="secondary" type="reset">Cancel</Button>
            <Button disabled={isWorking}>
               {isEditSession ? "Edit cabin" : "Create new cabin"}
            </Button>
         </FormRow>
      </Form>
   )
}



export default CreateCabinForm