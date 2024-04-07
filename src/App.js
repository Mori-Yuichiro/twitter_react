import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/pages/home/home';
import { TwitterProvider } from './providers/TwitterProvider';
import { Toppage } from './components/pages/toppage/Toppage';
import { Auth } from './components/atoms/auth/Auth';

function App() {
  return (
    <TwitterProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/toppage' element={
            <Auth>
              <Toppage />
            </Auth>
          } />
        </Routes>
      </BrowserRouter>
    </TwitterProvider>
  );
}

export default App;
