import React, { Component } from 'react';

class Resources extends Component {
  render() {
    return (<div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul> </div>);
  }
}

// If you are gonna use this component all over the system
// and wants it to be protected by auth
// just do:
// import Auth from 'require_authentication';
// Auth(Resources)
export default Resources;
