import React from 'react';
import { render } from 'react-dom';
import CommentBox from './CommentBox.jsx';
import { Button } from 'lucid-ui';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello React!</h1>
        <CommentBox />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
