import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary 捕獲到錯誤:", error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container text-center py-5 text-neutral-white">
          <h2>糟糕，發生了一些錯誤！</h2>
          <p className="text-neutral-300">我們已經記錄此問題，請稍後再試或重新整理頁面。</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => window.location.reload()}
          >
            重新整理
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
