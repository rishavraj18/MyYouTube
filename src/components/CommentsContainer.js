import React from 'react';
import User from '../images/user.jpg';

const commentsData = [
    {
        name: "Monika",
        text: "Lorem ipsum dolor sit amet. Id sint cumque ut quidem quae ab dolorem modi id quia labore qui neque aperiam?",
        replies: [{
            name: "Raj",
            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
            replies : [
                {
                    name: "Rishav",
                    text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                    replies : [
                        {
                            name: "Monika",
                            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                            replies : [
                                {
                                    name: "Raj",
                                    text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                                    replies : [
                                        {
                                            name: "Rishav",
                                            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                                            replies : [
                                         ]
                                        }
                                 ]
                                }
                         ]
                        }
                 ]
                }
         ]
        }],
    },
    {
        name: "Raj",
        text: "Lorem ipsum dolor sit amet. Id sint cumque ut quidem quae ab dolorem modi id quia labore qui neque aperiam?",
        replies: [{
            name: "Rishav",
            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
            replies : [
                {
                    name: "Raj",
                    text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                    replies : [
                        {
                            name: "Rishav",
                            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                            replies : [
                         ]
                        },
                        {
                            name: "Monika",
                            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                            replies : [
                         ]
                        }
                 ]
                },
                {
                    name: "Monika",
                    text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
                    replies : [
                 ]
                }
         ]
        }],
    },
    {
        name: "Rishav",
        text: "Lorem ipsum dolor sit amet. Id sint cumque ut quidem quae ab dolorem modi id quia labore qui neque aperiam?",
        replies: [{
            name: "Monika",
            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
            replies : [
         ]
        }],
    },
    {
        name: "Monika",
        text: "Lorem ipsum dolor sit amet. Id sint cumque ut quidem quae ab dolorem modi id quia labore qui neque aperiam?",
        replies: [{
            name: "Rishav",
            text: "Rem omnis corrupti sit quia dolorem 33 autem laudantium nam aspernatur atque.",
            replies : [
         ]
        }],
    },
    {
        name: "Raj",
        text: "Lorem ipsum dolor sit amet. Id sint cumque ut quidem quae ab dolorem modi id quia labore qui neque aperiam?",
        replies: [{
            name: "Rishav",
            text: "Lorem ipsum dolor sit amet. Id sint cumque ut quidem quae ab dolorem modi id quia labore qui neque aperiam?",
            replies : [
         ]
        }],
    }

]

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return <div class="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img 
        className="w-10 h-10 rounded-full"
        alt="user" 
        src={User}/>
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>;
}


const CommentsList = ({comments}) => {
//Never use index as key
  return comments.map((comment, index) => (
  <div>
    <Comment key={index} data={comment} />
     <div className="pl-5 border border-l-gray-300 ml-5">
      <CommentsList comments={comment.replies} />
     </div>
  </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="text-2xl font-bold">Comments:</h1>
        <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;