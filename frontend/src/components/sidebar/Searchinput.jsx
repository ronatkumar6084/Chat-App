import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from '../../zustand/useConversation'
import useGetConversations from '../../hooks/useGetConversation'
import toast from 'react-hot-toast';

const Searchinput = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
 
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!search) return;
    if(search.length <3 ){
     return  toast.error("search must be atleast 3 characters long")
    } 
    const conversation = conversations.find((c)=> c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    }else {
      toast.error("No such user found");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='flex  items-center gap-2'>
        <input type="text" placeholder='search' className='mt-2 ml-2 input input-bordered rounded-full'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearch className='w-6 h-6 outline-none'/>
        </button>
      </form>
    </div>
  )
}

export default Searchinput
