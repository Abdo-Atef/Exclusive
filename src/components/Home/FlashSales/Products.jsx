// import React, { useContext, useState } from 'react'
// import { ProductsContext } from '../../../Context/ProductsContext'
// import { useQuery } from 'react-query';
// import { Link } from 'react-router-dom';

// export default function Products() {

//   let {getProducts, checkRating} = useContext(ProductsContext);
  
//   const [page, setPage] = useState(1)
  
//   async function getAllproducts() {
//     let array =[];
//     let {data} = await getProducts(page, 20);
//     for (let i = 0; i < data.length; i++) {
//       if(data[i].category.name == "Men's Fashion"){
//         array.push(data[i]);
//       }
//     }
//     return array;
//   }

//   let {data, isLoading} = useQuery('menProducts', getAllproducts)

//   return <>
    
//     {data?.map((product , index)=> 
//     <div key={index}>
//       <div className='productCard border rounded-2 d-block'>
//           <div className=' position-relative secondry1'>
//             <img src={product.imageCover} alt={product.title} className='w-100 p-5 p-sm-4' />
//             <button className='addToCart btn text1 rounded-bottom-0 w-100 main-bg-black position-absolute'>Add To Cart </button>
//             <div className='addCheckCard d-flex flex-column position-absolute gap-1'>
//             <Link className='bg-white rounded-circle p-1 px-2 d-flex justify-content-center align-items-center'><i className="bi bi-heart"></i></Link>
//             <Link className='bg-white rounded-circle p-1 px-2 d-flex justify-content-center align-items-center'><i className="bi bi-eye"></i></Link>
//             </div>
//           </div>
//           <div className='secondry1 p-2 rounded-bottom-2'>
//             <h3 className='h6 fw-medium m-0'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
//             <span className='fw-medium m-0 text-secondry3 my-1 d-inline-block'>${(product.price / 30).toFixed() }</span>
//             <del className='ms-3 fw-medium m-0 text3 opacity-50 my-1 d-inline-block'>${(product.price / 30 + 30).toFixed() }</del>
//             <div className='d-flex align-items-center gap-2'>
//               {checkRating(product.ratingsAverage)} <span className='text3 opacity-50 pt-1 fs-12'>({product.ratingsQuantity})</span>
//             </div>
//           </div>  
//       </div>
      
//     </div>)}
    
//   </>
  
// }
