import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomeView from './views/HomeView';
import LoginView from './views/LoginView'
import AdminView from './views/AdminView';
import _404View from './views/_404View';
import MypageView from './views/MypageView';
import PwdChange from './components/PwdChange'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView/>}></Route>
        <Route path='/login' element={<LoginView/>}></Route>
        <Route path='/admin' element={<AdminView/>}></Route>
        <Route path='/error' element={<_404View/>}></Route>
        <Route path='/mypage' element={<MypageView/>}></Route>
        <Route path='/change' element={<PwdChange/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;