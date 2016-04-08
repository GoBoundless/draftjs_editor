import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Editor, EditorState, RichUtils} from 'draft-js'

import css from '../styles/draftjs'

export default class DraftJs extends Component {
  constructor(props) {
    super(props)
    this.onChange = (editorState) => this.setState({editorState})
  }

  state = {editorState: EditorState.createEmpty()}

  handleKeyCommand(command) {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    console.log(JSON.stringify(newState.toJS()))
    if (newState) {
      this.onChange(newState)
      return true
    }
    return false
  }

  render() {
    const {editorState} = this.state
    return <div className={css.editorContainer}>
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={::this.handleKeyCommand}
        onChange={this.onChange}
      />
    </div>
  }
}
