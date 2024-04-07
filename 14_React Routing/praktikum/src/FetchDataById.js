import { supabase } from "./Connection";

export default async function FetchDataById(dataById) {
  // dengan penanganan error
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", dataById);
    if (error) {
      throw error;
    }
    return data || [];
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return [];
  }

  //tanpa adanya penanganan error, sengaja menggunakan ini, agar lebih simple, walaupun tidak baik
  // return supabase
  //   .from("products")
  //   .select("*")
  //   .then(({ data }) => {
  //     return data || [];
  //   });
}
