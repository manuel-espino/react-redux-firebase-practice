import React from 'react';

const Message = ({ type, text }) => (
   <div className={"message message--" + type} >
      <p>{text}</p>
   </div >
)

export default Message;