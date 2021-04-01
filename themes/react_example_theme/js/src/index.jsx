import React,  { Fragment } from 'react';
import ReactDOM from 'react-dom';

/* Components */
import Header from './components/Header';

const Main = () => (
    <Fragment>
      <Header />
      <RecipesDisplay />
    </Fragment>
  )

ReactDOM.render(<Main />, document.getElementById('react-app'));