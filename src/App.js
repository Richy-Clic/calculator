import logo from './logo.svg';
import './App.css';
import MainComponent from './pages/MainComponent';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux'
import { store } from  './app/store'

function App() {
  return (
    <div className="App">
     <Provider store={store}>
      <MainComponent />
     </Provider>
    </div>
  );
}

export default App;
