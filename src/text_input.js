import React, { Component } from 'react';

const Input = (props) => {
  return (
    <textarea 
      className=''
      name='inputText' 
      cols='50' 
      rows='35' 
      value={props.input}
      placeholder='type something here'
      onChange={(event) => props.onTextChange(event.target.value)}
    >
    </textarea>
  );
}

export default Input;