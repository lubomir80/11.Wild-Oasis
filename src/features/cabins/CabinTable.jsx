import styled from "styled-components"
import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useSearchParams } from "react-router-dom";


const Table = styled.div`
   border: 1px solid var(--color-grey-200);
   font-size: 1.4rem;
   background-color: var(--color-grey-0);
   border-radius: 7px;
   overflow: hidden;
   flex: 100%;
`

const TableHeader = styled.header`
   display: grid;
   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
   column-gap: 2.4rem;
   align-items: center;

   background-color: var(--color-grey-50);
   border-bottom: 1px solid var(--color-grey-100);
   text-transform: uppercase;
   letter-spacing: 0.4px;
   font-weight: 600;
   color: var(--color-grey-600);
   padding: 1.6rem 2.4rem;
`

function CabinTable() {

   const [searchParams] = useSearchParams()
   const { isLoading, error, data: cabins } = useQuery({
      queryKey: ['cabins'],
      queryFn: getCabins
   })


   if (isLoading) return <Spinner />

   const filterValue = searchParams.get("discount") || "all"

   let filteresCabins
   switch (filterValue) {
      case "all":
         filteresCabins = cabins
         break;
      case "no-discount":
         filteresCabins = cabins.filter(item => item.discount === 0)
         break;
      case "with-discount":
         filteresCabins = cabins.filter(item => item.discount > 0)
         break;
      default: filteresCabins = cabins
         break;
   }


   const sortBy = searchParams.get("sortBy") || "startDate-asc"
   const [field, diraction] = sortBy.split("-")
   const modifier = diraction === "asc" ? 1 : -1;
   const sortedCabons = filteresCabins.sort((a, b) => (a[field] - b[field]) * modifier)

   return (
      <Table role="table">
         <TableHeader role="row">
            <div></div>
            <div>Cabin</div>
            <div>Capacity</div>
            <div>Price</div>
            <div>Discount</div>
            <div></div>
         </TableHeader>
         {sortedCabons.map(item => <CabinRow cabin={item} key={item.id} />)}
      </Table>
   )
}

export default CabinTable