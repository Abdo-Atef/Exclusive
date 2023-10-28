import axios from "axios";
import { createContext, useState } from "react";

export let ProductsContext = createContext();

export default function ProductsContextProvider({children}){

  async function getProducts(page=2, limit=40) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=${limit}`);
    return data;
  }
  async function getProductsByCategory(page=1, limit=40, cat) {
    let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}&limit=${limit}&category[in]=${cat}`);
    return data;
  }

  function checkRating(num){
    // console.log('checkRating');
    if(num >= 4.3 && num <4.5){
      return <span>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-3 opacity-25'></i>
      </span>
    }
    else if(num <= 4.3){
      return <span>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-3 opacity-25'></i>
        <i className='fas fa-star text-3 opacity-25'></i>
      </span>
    }
    else if(num >= 4.5){
      return <span>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
        <i className='fas fa-star text-warning'></i>
      </span>
    }
  }

  const [Visability, setVisability] = useState(false)

  function passsVisability(passInput, showIcon){
    if (Visability) {
      setVisability(false);
      document.getElementById(`${passInput}`).type = 'password';
      document.getElementById(`${showIcon}`).classList.replace('fa-eye-slash', 'fa-eye');
    }
    else{
      setVisability(true);
      document.getElementById(`${passInput}`).type = 'text';
      document.getElementById(`${showIcon}`).classList.replace('fa-eye', 'fa-eye-slash');
      }
    }

  return <>
    <ProductsContext.Provider value={{getProducts, checkRating, getProductsByCategory, passsVisability}}>
      {children}
    </ProductsContext.Provider>
  </>
}