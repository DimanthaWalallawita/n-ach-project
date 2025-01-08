import './App.css';
import Main from './pages/Main';
import Single from './pages/SinglePage';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Logo from './assets/images/unnamed.png';

function App() {
  return (
    <>
      <Helmet>
        <title>N-Ach Coding Challenge</title>
        <link rel="icon" href={Logo} type="image/png" />
      </Helmet>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:userId" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;
