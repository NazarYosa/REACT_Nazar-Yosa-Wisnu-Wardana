import { supabase } from "./Connection";

export default async function FetchData() {
  // dengan penanganan error
  // try {
  //   const { data, error } = await supabase.from("products").select("*");
  //   if (error) {
  //     throw error;
  //   }
  //   return data || [];
  // } catch (error) {
  //   console.error("Error fetching products:", error.message);
  //   return [];
  // }

  //tanpa adanya penanganan error, sengaja menggunakan ini, agar lebih simple, walaupun tidak baik
  return supabase
    .from("products")
    .select("*")
    .then(({ data }) => {
      return data || [];
    });
}
