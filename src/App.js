import './App.css';
import { Banner } from './Components/Banner';
import { Navbar } from './Components/Navbar';
import { Form } from './Components/Form';
import { Cards } from './Components/Cards';
import { Navigation } from './Components/Navigation';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Banner />
          <Navigation />
          <Cards />
        </>} />
        <Route path='/form' element={<>
          <Navbar />
          <Form />
        </>} />
      </Routes>
    </div>
  );
}

export default App;
