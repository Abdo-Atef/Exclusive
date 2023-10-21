import React, { useEffect } from 'react'
import Section1 from './Section1/Section1'
import FlashSales_section from './FlashSales/FlashSales_section'
import { getCart } from '../../redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux';
import { getWishList } from '../../redux/wishListSlice';

export default function Home() {
  let dispatch = useDispatch();
  
  let {userToken} = useSelector((state)=>state.userToken);
  useEffect(()=>{
    if (userToken) {
      dispatch(getCart());
      dispatch(getWishList());
    }
  },[])

  return <>
    <Section1/>
    <FlashSales_section />
  </>
}
