import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../hooks/useGetMessage'
import MessageShimmer from '../shimmer/MessageShimmer'
import useListneMessages from '../../hooks/useListneMessages'

const Messages = () => {
  const {messages, loading} = useGetMessage();
  console.log("Messages",messages);

  useListneMessages();
  const lastMessageRef = useRef();
  useEffect(()=>{
     setTimeout(()=>{
      lastMessageRef.current?.scrollIntoView({behavior : "smooth"})
     },100)
  },[messages])

  return (
    <div className='px-2 flex-1 overflow-auto'>
     
      {!loading && 
       messages?.length > 0 
       && 
       messages.map((message)=> 
        <div key={message._id}
        ref={lastMessageRef}>
        <Message  message={message}/>
        </div>
      )}

      {loading && [...Array(3)].map((_,idx) => <MessageShimmer key={idx}/>)}

      {!loading && messages?.length === 0 && (
        <p className='text-center'> Send a message to start the conversation</p>
      )}

    </div>
  )
}

export default Messages

{/* <Message/>
<Message/>
<Message/>
<Message/>
<Message/>
<Message/>
<Message/>
<Message/>
<Message/> */}