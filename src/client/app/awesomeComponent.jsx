import React from 'react';

//implement a simple component with different dev tools, including React, Redux, etc.
class AwesomeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div>
        Pushes : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Push me!</button></div>
      </div>
    );
  }

}

export default AwesomeComponent;
