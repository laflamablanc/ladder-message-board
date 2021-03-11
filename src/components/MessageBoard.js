import React,{useState,useEffect} from 'react';
import Message from './Message'
import { db } from './Firebase/Firebase'

function MessageBoard(){

    const [messages,setMessages]=useState([])

    const fetchBlogs = async() => {
        const response = db.collection('messages');
        const data = await response.get();
        data.docs.forEach(item => {
            setMessages([...messages,item.data()])
        })
    }

    useEffect(() => {
        fetchBlogs();
    }, [])
    


    return(
        <div>
            { messages && messages.map(msg => <Message/>)}
        </div>
    )

}

export default MessageBoard