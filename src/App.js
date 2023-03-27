import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className='content'>
              <Home />
            </div>
            } />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
