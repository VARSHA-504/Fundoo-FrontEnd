import './App.css';
// import Signup from './pages/signup/signup'
import Signin from './pages/signin/signin';
// import Header from './component/header/header';
// import TakeNoteOne from './component/takenoteone/takenoteone';
// import TakeNoteTwo from './component/takenotetwo/takenotetwo';
import Dashboard from './pages/dashboard/dashboard';
import ColorPopper from './component/colorpopper/colorpopper';
import { Provider } from 'react-redux';
import store from './component/redux/store';
import Router  from './router/router'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router />
      </Provider>
    
    </div>
  );
}

export default App;
