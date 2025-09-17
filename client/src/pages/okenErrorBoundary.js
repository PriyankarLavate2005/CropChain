// TokenErrorBoundary.js
import React from 'react';

class TokenErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    if (error.message.includes('Token')) {
      return { hasError: true, error };
    }
    return { hasError: false, error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Token error caught:', error, errorInfo);
  }

  handleReset = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Authentication Error</h2>
          <p>Your session has expired or is invalid.</p>
          <button onClick={this.handleReset}>Log in again</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default TokenErrorBoundary;