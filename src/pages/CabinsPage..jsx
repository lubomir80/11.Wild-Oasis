import { useEffect } from "react"
import { getCabins } from "../services/apiCabins"

function CabinsPage() {
   useEffect(() => {
      getCabins().then(data => console.log(data))
   }, [])


   return (
      <div>All Cabins
         <img src="https://icdpmcxailuuqmjctfcq.supabase.co/storage/v1/object/public/cabin-img/cabin-001.jpg" alt="" />
      </div>
   )
}

export default CabinsPage