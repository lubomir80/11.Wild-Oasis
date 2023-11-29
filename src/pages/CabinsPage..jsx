import { Heading } from "theme-ui"
import CabinTable from "../features/cabins/CabinTable"
import Row from "../ui/Row"
import AddCabin from "../features/cabins/AddCabin"




function CabinsPage() {


   return (
      <>
         <Row>
            <Heading as="h1">All cabins</Heading>
            <p>Filter / Sort</p>
         </Row>
         <Row type="vertical">
            <CabinTable />
            <AddCabin />
         </Row>
      </>
   )
}

export default CabinsPage