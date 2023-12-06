import supabase, { supabaseUrl } from "./supabase";

export async function getBookings() {
   let { data, error } = await supabase
      .from('bookings')
      .select('*')

   if (error) {
      console.log(error);
      throw new Error("Bookings could not be loaded")
   }

   return data
}
