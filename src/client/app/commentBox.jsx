import React from 'react';
import { Button, SuccessIcon } from 'lucid-ui';

export default React.createClass({
  render () {
    return (
      <Button kind='info'> Information</Button>
    );
  },
});

export default React.createClass({
  render () {
    return <SuccessIcon />;
  },
});
