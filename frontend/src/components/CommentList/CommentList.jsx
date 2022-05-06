import React from "react";
import './CommentList.css';
import Comment from "../Comment/Comment";

const CommentList = (props) => {
    return (  
        <div>
        {props.allComments.map((comment, index) => { 
        return (
            <div className = 'comm-list-contain'key = {index}>
                <div className="list-text">Username: {comment.user.username}</div>
                <div className="list-text">Comment: {comment.text}</div>
                <div><Comment id={comment.id} {...props}/></div>
            </div>
        )
        })}
        </div>   
    );
}

export default CommentList;