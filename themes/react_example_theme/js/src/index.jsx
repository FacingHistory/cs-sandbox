import React from 'react';
import ReactDOM from 'react-dom';

/* Components */
import Header from './components/Header';

const Main = () => (
  <Header />
)

ReactDOM.render(<Main />, document.getElementById('react-app'));