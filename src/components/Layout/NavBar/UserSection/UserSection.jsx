import React, { useState } from 'react'
import style from './UserSection.module.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setUserToken } from '../../../../redux/userSlice';

export default function UserSection() {
  let dispatch = useDispatch()
  const [active, setActive] = useState(false)
  const [exitMessage, setExitMessage] = useState(false);
  function exitMessageModal() {
    if (exitMessage) {
      setExitMessage(false);
    }
    else{
      setExitMessage(true);
    }
  }
  function exit(){
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    dispatch(setUserToken(null));
  }

  function toggle() {
    if (active) {
      document.getElementById('profileList').classList.add('d-none')
      document.getElementById('profileIcon').classList.remove('bg-danger', 'text-white')
      setActive(false);
    }
    else{
      document.getElementById('profileList').classList.remove('d-none')
      document.getElementById('profileIcon').classList.add('bg-danger', 'text-white')
      setActive(true);
    }
  }
  return <>
    <li onClick={toggle} className={`${style.list}`}>
      <i id='profileIcon' className="fa-regular fa-user fs-6 cursor-pointer d-flex justify-content-center align-items-center rounded-circle" style={{width:'32px',height:'32px'}}></i>
      <ul id='profileList' className='d-none'>
        <li><i className="fa-regular fa-user  text-white"></i> <Link to={'/account/myProfile'}>Manage My Account</Link></li>
        <li><i className="bi bi-handbag  text-white"></i><Link to={'/allorders'}>My Orders</Link></li>
        <li onClick={exitMessageModal}><i className="fa-solid fa-right-from-bracket  text-white"></i><a>Logout</a></li>
      </ul>
    </li>
    {exitMessage?<div className='w-100 h-100 z-3 position-fixed top-0 start-0 d-flex justify-content-center align-items-center bg-dark bg-opacity-75'>
      <div className='py-5 px-4 bg-white rounded-2'>
        <p>Do You Want To Log out Really?</p>
        <button onClick={exit} className='button2 text1 p-2 px-4 border-0 rounded-1 me-3 mt-4'>Yes</button>
        <button onClick={()=> setExitMessage(false)} className='bg-body-secondary text-secondary-emphasis p-2 px-4 border-0 rounded-1'>Cancel</button>
      </div>
    </div>:''}
  </>
}
