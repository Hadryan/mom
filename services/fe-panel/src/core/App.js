import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import ButterToast from 'butter-toast';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'typeface-roboto'

import { actionAppInitialized } from 'actions/app/init';
import { getStore } from './store';
import Boundary from './boundary';
import Layout from './layout';
import Routes from './routes';

import './App.css';

const store = getStore();

class App extends Component {
  componentDidMount() {
    setTimeout(() => store.dispatch(actionAppInitialized()));
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Boundary>
              <CssBaseline />
              <Layout>
                <Routes />
              </Layout>
            </Boundary>
            <ButterToast
              trayPosition="bottom-right"
              pauseOnHover={true}
            />
          </Fragment>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;