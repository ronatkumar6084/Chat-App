import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({conversation,lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  return (
   <>
    <div className={`flex items-center gap-2 hover:bg-sky-600 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
    onClick={()=> setSelectedConversation(conversation)}>
      <div className={`avatar ${isOnline ? "online" : "" }`}>
        <div className='w-12 rounded-full'>
          <img src={conversation.profilePic} 
          alt="user avatar" />
        </div>
      </div>

      <div className='flex flex-col flex-1'>
        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
      </div>  
    </div>
    {!lastIdx && <div className='divider py-0 my-0 h-1'></div>}
   </>
  )
}

export default Conversation
