import './App.css';
import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/Shop/Shop.component';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header/Header.component';
import SignInAndSignUpPage from './pages/Sign-In-Sign-Up-';
import { auth } from './firebase/firebase.utils';

const Shirts = () => (

  <div>
    welcome to shirts page
  </div>
);
const Pants = () => (

  <div>
    welcome to pants page
  </div>
);
const jackets = () => (

  <div>
    welcome to jackets page
  </div>
);
const UnderGarments = () => (

  <div>
    welcome to UnderGarments page
  </div>
);
const Childerns = () => (

  <div>
    welcome to Childerns page
  </div>
);


class App extends React.Component {

  constructor() {
    super();
    this.state =
      { currentUser: null }
  }
  unsubscibeFromAuth = null
  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.unsubscibeFromAuth = this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscibeFromAuth();
  }
  render() {
    return (<div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shirts' component={Shirts} />
        <Route exact path='/jackets' component={jackets} />
        <Route exact path='/Pants' component={Pants} />
        <Route exact path='/Under-Garments' component={UnderGarments} />
        <Route exact path='/Childerns' component={Childerns} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/SignIn' component={SignInAndSignUpPage} />
      </Switch>



    </div >
    )
  }
};

export default App;
