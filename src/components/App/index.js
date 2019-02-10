import React, { Component } from 'react';

class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="/">Flashcard Mixer</a>
        </nav>
        <main id="app" role="main" className="container">{children}</main>
      </div>
    );
  }
}

export { App };
