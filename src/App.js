import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/layout/navbar/Navbar';
import Footer from './components/layout/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import NotFound from './pages/not-found/NotFound';
import './App.scss';
import User from './pages/user/User';
import {GithubProvider} from './context/github/GithubContext';

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='wrapper'>
          <Navbar />

          <main className='container '>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/user/:login' element={<User />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </GithubProvider>
  );
}

export default App;

