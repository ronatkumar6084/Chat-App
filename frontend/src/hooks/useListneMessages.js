import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import notificationSound from '../assets/sound/notification.mp3';
const useListneMessages = () => {
  const {socket} = useSocketContext();
  const {messages, setMessages} = useConversation();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        const sound = new Audio(notificationSound);
        sound.play();
        setMessages([...messages, newMessage]);
    });

    return ()=> socket?.off("newMessage");
  },[socket,messages,setMessages]);
}

export default useListneMessages;
