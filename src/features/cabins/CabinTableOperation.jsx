import Filter from "../../ui/Filter"
import SortBy from "../../ui/SortBy"
import TableOperations from "../../ui/TableOperations"


function CabinTableOperation() {
   const cabinFilterOptions = [
      { value: "all", label: "All" },
      { value: "no-discount", label: "No discount" },
      { value: "with-discount", label: "With discount" }
   ]

   const cabinSortOptions = [
      { value: "name-asc", label: "Sort by name (A-Z)" },
      { value: "name-desc", label: "Sort by name (Z-A)" },
      { value: "regularPrice-asc", label: "Sort by price (low first)" },
      { value: "regularPrice-desc", label: "Sort by price (high first)" },
      { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
      { value: "maxCapacity-desc", label: "Sort by capacity (high first)" }
   ]


   return (
      <TableOperations>
         <Filter filterField="discount" options={cabinFilterOptions} />
         <SortBy options={cabinSortOptions} />
      </TableOperations>
   )
}

export default CabinTableOperation