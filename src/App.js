import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage-component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsucscribeFromAuth = null;

  componentDidMount() {
    this.unsucscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsucscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />{' '}
        {/*By having header outside the switch below, it will always render, regardless of which page the switch renders */}{' '}
        <Switch>
          <Route exact path='/' component={HomePage} />{' '}
          <Route path='/shop' component={ShopPage} />{' '}
          <Route path='/signin' component={SignInAndSignUpPage} />{' '}
        </Switch>{' '}
      </div>
    );
  }
}

export default App;
