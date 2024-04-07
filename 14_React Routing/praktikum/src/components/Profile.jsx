import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchDataById from "../FetchDataById";

export default function Profile() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await FetchDataById(id);
      setProduct(data[0]); // Karena data dari FetchDataById adalah array, kita ambil elemen pertama
    }
    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center items-center h-full">
      {product ? (
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
          <h2 className="text-3xl font-bold mb-4">{product.productName}</h2>
          <div className="grid grid-cols-2 gap-2">
            <p className="font-semibold">Price:</p>
            <p>${product.productPrice}</p>
            <p className="font-semibold">Freshness:</p>
            <p>{product.productFreshness}</p>
            <p className="font-semibold">Category:</p>
            <p>{product.productCategory}</p>
          </div>
        </div>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
}

// import React, { useEffect } from 'react'
// import { useParams } from "react-router-dom";
// import FetchDataById from '../FetchDataById';

// export default function Profile() {
//   let { id } = useParams();
//   console.log(id)

//   useEffect(() => {
//     FetchDataById(id);
//     console.log(FetchDataById(id))
//   },[])
//   return (
//     <div>
//       `Hello World! {id}`
//     </div>
//   )
// }

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import FetchDataById from "../FetchDataById";

// export default function Profile() {
//   let { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//       const fetchData = async () => {
//         const data = await FetchDataById(id);
//         console.log(data);
//         setProduct(data[0]); // Karena data dari FetchDataById adalah array, kita ambil elemen pertama
//       };
//     fetchData();
//   }, [id]);

//   return (
//     <div>
//       {product ? (
//         <div>
//           <h2>Nama Product: {product.productName}</h2>
//           <p>Price: ${product.price}</p>
//           <p>Quantity: {product.quantity}</p>
//           {/* Tambahkan lebih banyak detail produk jika diperlukan */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }
