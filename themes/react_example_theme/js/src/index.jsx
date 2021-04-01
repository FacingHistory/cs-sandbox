import React,  { Fragment } from 'react';
import ReactDOM from 'react-dom';

/* Components */
import Header from './components/Header.jsx';
import RecipesDisplay from './components/RecipesDisplay.jsx'

const Main = () => (
    <Fragment>
      <Header />
      <RecipesDisplay />
    </Fragment>
  )

ReactDOM.render(<Main />, document.getElementById('react-app'));