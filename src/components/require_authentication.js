// Higher order component
import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {
    // To use context you need to do:
    // Authentication.contextTypes --> called anywhere
    static contextTypes = {
      router: React.PropTypes.object
    }

    componentWillMount() {
      // Whenever this component is about to render
      // Kick user back to /
      if (!this.props.authenticated) {
          this.context.router.push('/');
      }
    }

    // Whenever the component get a new set of props
    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
          this.context.router.push('/');
      }
    }

    render() {
      // Context is available in the application as a whole
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}
