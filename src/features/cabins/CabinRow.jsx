import { useState } from 'react';
import toast from 'react-hot-toast';
import CreateCabinForm from './CreateCabinForm';
import { formatCurrency } from '../../utils/helpers';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin } from '../../services/apiCabins';
import { TableRow, Img, Cabin, Price, Discount } from "./CabinRowStyled"
import Modal from '../../ui/Modal/Modal';


function CabinRow({ cabin }) {
   const [showForm, setShowForm] = useState(false)

   const {
      id: cabinId,
      name,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
   } = cabin;

   const queryClient = useQueryClient()

   const { isLoading, mutate } = useMutation({
      mutationFn: deleteCabin,
      onSuccess: () => {
         toast.success("Cabin successfully deleted")
         queryClient.invalidateQueries({
            queryKey: ['cabins']
         })
      },
      onError: error => {
         toast.error(error.message)
      }
   })




   return (
      <>
         <TableRow role="table">
            <Img src={image} alt={name} />
            <Cabin>{name}</Cabin>
            <div>Fits up to {maxCapacity} guests</div>
            <Price>{formatCurrency(regularPrice)}</Price>
            <Discount>{formatCurrency(discount)}</Discount>
            <div>
               <Modal>
                  <Modal.Open opens="edit">
                     <button>Edit</button>
                  </Modal.Open>
                  <Modal.Window name="edit">
                     <CreateCabinForm cabinToEdit={cabin} />
                  </Modal.Window>
                  <button disabled={isLoading} onClick={() => mutate(cabinId)}>Delete</button>
               </Modal>
            </div>
         </TableRow >
      </>
   )
}

export default CabinRow