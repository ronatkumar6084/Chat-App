import React from 'react'

const Conversation = () => {
  return (
   <>
    <div className='flex items-center gap-2 hover:bg-sky-600 rounded p-2 py-1 cursor-pointer'>
      <div className='avatar online'>
        <div className='w-12 rounded-full'>
          <img src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png" 
          alt="user avatar" />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <p className='font-bold text-gray-200'>Ronat Kumar</p>
      </div>  
    </div>

    <div className='divider py-0 my-0 h-1'></div>
   </>
  )
}

export default Conversation
