import React, { Component } from 'react';
import * as marked from 'marked';

class Output extends Component {
  convertInput(text){
    return {__html: text};
  }
  render() {
    return (
      <div
        className='' 
        dangerouslySetInnerHTML = {this.convertInput(marked(this.props.input))} 
      />
    );
  }
}

export default Output;