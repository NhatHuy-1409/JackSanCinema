import './App.css';

import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Detail from './pages/Detail/Detail';
import { createBrowserHistory } from 'history'
import Select from './pages/Select/Select';

export const history = createBrowserHistory()

function App() {
  return (
    <Router history={history} >
      <div className="App">
        <Switch>
          <HomeTemplate path='/home' component={Home} />
          <HomeTemplate path='/contact' component={Contact} />
          <HomeTemplate path='/news' component={News} />
          <HomeTemplate path='/detail/:id' component={Detail} />
          <HomeTemplate path='/select/:id' component={Select} />
          <HomeTemplate path='/' component={Home} /> {/**Phải để cuối cùng */}

        </Switch>
      </div>

    </Router>
  );
}

export default App;
