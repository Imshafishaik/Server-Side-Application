import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from '../../store/reducer';

const App = () => {

  return (
    <main>
      <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/"  element={ <Home/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
      </Provider>
    </main>
  );
};

export default App;

// build && node ./dist/server.cjs