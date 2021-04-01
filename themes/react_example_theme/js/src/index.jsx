import React,  { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

/* Components */
import Header from './components/Header';

const Main = hot(() => (
    <Fragment>
      <Header />
      <RecipesDisplay />
    </Fragment>
));

ReactDOM.render(<Main />, document.getElementById('react-app'));