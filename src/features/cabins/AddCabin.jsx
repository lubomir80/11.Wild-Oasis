import { useState } from "react"
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import Modal from "../../ui/Modal/Modal"


function AddCabin() {
   const [isOpenModal, setIsOpenModal] = useState(false)

   return (
      <>
         <Button onClick={() => setIsOpenModal((show) => !show)}>Add new cabin</Button>
         {isOpenModal &&
            <Modal onClose={() => setIsOpenModal(false)}>
               <CreateCabinForm onModalClose={() => setIsOpenModal(false)} />
            </Modal>
         }
      </>
   )
}

export default AddCabin