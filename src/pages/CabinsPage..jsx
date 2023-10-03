import { Heading } from "theme-ui"
import CabinTable from "../features/cabins/CabinTable"
import { getCabins } from "../services/apiCabins"
import Row from "../ui/Row"


function CabinsPage() {



   return (
      <>
         <Row>
            <Heading as="h1">All cabins</Heading>
            <p>Filter / Sort</p>
         </Row>
         <Row>
            <CabinTable />
         </Row>
      </>
   )
}

export default CabinsPage