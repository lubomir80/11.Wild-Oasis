import BookingsTable from "../features/bookings/BookingsTable"
import Heading from "../ui/Heading"

function BookingsPage() {
   return (
      <>
         <div>
            <Heading as="h1">All bookings</Heading>
            <p>TEST</p>
         </div>
         <BookingsTable />
      </>
   )
}

export default BookingsPage