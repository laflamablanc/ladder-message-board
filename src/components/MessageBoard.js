import React,{useState,useEffect} from 'react';
import Message from './Message'
import { db } from './Firebase/Firebase'

function MessageBoard(){

    const [messages,setMessages]=useState([])

    const fetchBlogs=async()=>{
        const response=db.collection('messages');
        const data=await response.get();
        data.docs.forEach(item=>{
         setBlogs([...blogs,item.data()])
        })
    }

    
    // var query = db.collection('messages').orderBy('timestamp').limit(100)

    // query.onSnapshot(function(snapshot) {
    //     snapshot.docChanges().forEach(function(change) {
    //       if (change.type === 'removed') {
    //         deleteMessage(change.doc.id);
    //       } else {
    //         var message = change.doc.data();
    //         displayMessage(change.doc.id, message.timestamp, message.name,
    //                        message.text, message.profilePicUrl, message.imageUrl);
    //       }
    //     });
    //   });

    // console.log("query:", query)


    return(
        <div>
            MessageBoard
        </div>
    )

}

export default MessageBoard