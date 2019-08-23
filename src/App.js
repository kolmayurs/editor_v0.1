import React from 'react';
import './App.css';
import {Editor, EditorState, RichUtils} from 'draft-js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {editorState: EditorState.createEmpty()}
  }
  onChange = (editorState) => {
    this.setState({editorState})
  }
  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if (newState) {
        this.onChange(newState);
        return 'handled';
    }
    return 'not-handled';
}
onItalicClick = () => {
 this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'))
  }
  onBoldClick = () => {
 this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }
   onUnderlineClick = () => {
 this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'))
  }
  onSrikeThroughClick = () => {
 this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'STRIKETHROUGH'))
  }
  componentDidMount(){}
    render() {
        return (
            <div  className="editorContainer">
            <button onClick={this.onItalicClick}>
                <em>I</em>
            </button>
            <button onClick={this.onBoldClick}>
                <strong>B</strong>
            </button>
             <button onClick={this.onUnderlineClick}>
                U
            </button>
            <button onClick={this.onSrikeThroughClick}>
                S
            </button>
              <Editor
              style={{}}
              editorState = {this.state.editorState}
              handleKeyCommand={this.handleKeyCommand}
              onChange = {this.onChange} />
            </div>
              );
    }
}

export default App;