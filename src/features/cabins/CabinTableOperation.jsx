import Filter from "../../ui/Filter"
import TableOperations from "../../ui/TableOperations"


function CabinTableOperation() {
   const cabintOptions = [
      { value: "all", lable: "All" },
      { value: "no-discount", lable: "No discount" },
      { value: "with-discount", lable: "With discount" }
   ]

   return (
      <TableOperations>
         <Filter filterField="discount" options={cabintOptions} />
      </TableOperations>
   )
}

export default CabinTableOperation