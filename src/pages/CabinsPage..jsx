import { Heading } from "theme-ui"
import CabinTable from "../features/cabins/CabinTable"
import Row from "../ui/Row"
import AddCabin from "../features/cabins/AddCabin"
import CabinTableOperation from "../features/cabins/CAbinTableOperation"




function CabinsPage() {

   return (
      <>
         <Row>
            <Heading as="h1">All cabins</Heading>
            <CabinTableOperation />
         </Row>
         <Row type="vertical">
            <CabinTable />
            <AddCabin />
         </Row>
      </>
   )
}

export default CabinsPage