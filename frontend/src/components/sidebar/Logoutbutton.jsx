import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

  const Logoutbutton = () => {
  const{loading, logout} = useLogout();

  return (
    <div className='mt-auto'>
      { !loading ? (
             <BiLogOut className='w-6 h-6 mt-1 text-white cursor-pointer' onClick={logout}/>
      ) : (
        <span className='loading loading-spinner'></span>
      )
      }
    </div>
  )
}

export default Logoutbutton
