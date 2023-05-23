import {} from 'react';
import './App.css';
import Header from './components/Header/Header';
// import Order from './components/Order/Order';
// import Manage from './components/Manage/Manage';
import './components/Header/Header.css';
import Shop from './components/Shop/Shop';
function App() {
  
  return (
    <div>
    <Header />
    <Shop />
    {/* <Order />
    <Manage /> */}
    </div>
  )
}

export default App
