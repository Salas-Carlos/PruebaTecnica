
import './App.css';

import {store} from './Redux/store/store';
import {Provider} from 'react-redux';
import {Principal} from './components/Principal/Principal'; 

function App() {

 
  return (
    <Provider store={store}>
      <Principal/>
    </Provider>
  );
}

export default App;
