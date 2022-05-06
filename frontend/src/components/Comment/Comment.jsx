import React, { useState } from 'react';
import {GoThumbsup, GoThumbsdown} from 'react-icons/go';
import './Comment.css';
import Modal from 'react-modal'


const Comment = (props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [replyText, setReplyText] = useState('')

   

    function handlesubmit(){
       setModalIsOpen(false)
        let newReplyPost = {
        "comment_id": props.id,
        "text": replyText
        }
        props.postReply(newReplyPost);
    }

    let reply = props.text

    async function postLike(){

    }

    async function postDisLike(){

    }

    return (  
        <div>
            <div className='button-contain'>
                <div className = 'like-buttons'><button onClick={() => props.postLike()}><GoThumbsup/></button></div>
                <div className = 'like-buttons'><button onClick={() => props.postDisLike()}><GoThumbsdown/></button></div>
            </div>
            <div>
                <button type='button' className='comment-reply' onClick={() => setModalIsOpen(true)}>Reply</button>
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className='modal-back'>
                <form>
                    <div>
                        <label htmlFor="Reply" className='reply-text'>Reply:{" "}</label>
                        <input onChange={(e) => setReplyText(e.target.value)} type= "text" id = 'Reply' className='reply-input'/>
                    </div>
                    <div>
                        <button type = 'button' onClick={() => {handlesubmit()}} className='reply-post'>Post</button>
                        
                    </div>
                </form>
            </Modal>
            <div className='likes-text'>Likes:</div>
            <div className='likes-text'>Dislikes:</div>
            <div className='reply-text'>Reply: {reply}</div>
        </div>
 
    );
}
 
export default Comment;