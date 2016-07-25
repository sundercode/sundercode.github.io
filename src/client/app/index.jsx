import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.jsx';
import CommentBox from './CommentBox.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1> Hello React!</h1>
        <AwesomeComponent />
        <CommentBox />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
