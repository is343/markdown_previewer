import React, { Component } from 'react';
import './App.css';
import Input from './text_input';
import Output from './text_output';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: defaultText
    };
  };
  handleTextChange = (text) => {
    this.setState({input: text});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer</h1>
        </header>
        
        <div>
          <Input onTextChange={this.handleTextChange} input={this.state.input}/>
          <Output input={this.state.input}/>
        </div>

      </div>
    );
  }
}

const defaultText = (
`Heading
=======

Sub-heading
-----------
 
#### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Ivan Schurawel](https://freecodecamp.com/is343)*`
);

export default App;
