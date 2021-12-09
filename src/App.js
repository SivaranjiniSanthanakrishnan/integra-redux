import logo from './logo.svg';
import './App.css';
import Article from './Component/Article';
import { Provider } from 'react-redux';
import store from '../src/store/index'

function App() {
  return (
      <Provider store={store}>
        <Article/>
      </Provider>
  );
}

export default App;
