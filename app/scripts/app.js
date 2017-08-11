import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {

    return (
      <div>
        <h2 className="u-text-center u-center">
          Create your own components and import them in the app.js file.
        </h2>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
