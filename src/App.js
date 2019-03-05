import React,{ Fragment,Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { GlobalStyle } from './style';
import { IconStyle } from './statics/iconfont/iconfont';
import  Header from './common/header';
import home from './pages/home';
import detail from './pages/detail';
import store from './store/index';

class App extends Component {
    render() {
      return (
        <Fragment>
          <GlobalStyle />
          <IconStyle/>
          <Provider store={store}>
          <Header/>
          <BrowserRouter>
            <div>
              <Route path='/' exact component={home}></Route>
              <Route path='/detail/:id' exact component={detail}></Route>
            </div>
          </BrowserRouter>
          </Provider>
        </Fragment>
      );
    }
  }
export default App;  