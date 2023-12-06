import { useQuery } from "@tanstack/react-query"
import { getBookings } from "../../services/apiBookings"
import Spinner from "../../ui/Spinner"


function BookingsTable() {
   const { isLoading, data: bookings } = useQuery({
      queryKey: ["bookings"],
      queryFn: getBookings
   })

   if (isLoading) { return <Spinner /> }

   return (
      <div>BookingsTable</div>
   )
}

export default BookingsTable