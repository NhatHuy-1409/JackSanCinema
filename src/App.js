import './App.css';

import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Detail from './pages/Detail/Detail';
import { createBrowserHistory } from 'history'
import Select from './pages/Select/Select';
import CheckoutSeat from './pages/Checkout/CheckoutSeat/CheckoutSeat';
import { UserTemplate } from './templates/UserTemplate/UserTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import CheckoutPay from './pages/Checkout/CheckoutPay/CheckoutPay';
import CheckoutInfo from './pages/Checkout/CheckoutInfo/CheckoutInfo';
import CheckoutFinish from './pages/Checkout/CheckoutFinish/CheckoutFinish';
import CheckoutHistory from './pages/Checkout/CheckoutHistory/CheckoutHistory';
import Loading from './components/Loading/Loading';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history} >
      <div className="App">
      <Loading></Loading>
        <Switch>
          <HomeTemplate path='/home' component={Home} />
          <HomeTemplate path='/contact' component={Contact} />
          <HomeTemplate path='/news' component={News} />
          <HomeTemplate path='/detail/:id' component={Detail} />
          <HomeTemplate path='/select/:id' component={Select} />
          <HomeTemplate path='/checkoutseat/:id' component={CheckoutSeat} />
          <HomeTemplate path='/checkoutpay/:id' component={CheckoutPay} />
          <HomeTemplate path='/checkoutinfo/:id' component={CheckoutInfo} />
          <HomeTemplate path='/checkoutfinish/:id' component={CheckoutFinish} />
          <HomeTemplate path='/checkouthistory/' component={CheckoutHistory} />
          <UserTemplate path= '/login' Component={Login}/>
          <UserTemplate path= '/register' Component={Register}/>
          <HomeTemplate path='/' component={Home} /> {/**Phải để cuối cùng */}

        </Switch>
      </div>

    </Router>
  );
}

export default App;
