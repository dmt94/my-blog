import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={
            <div className='content'>
              <Home />
            </div>
            } />
          <Route path="/create" element={
            <div className='content'>
              <Create />
            </div>
            } />
          <Route path="/blogs/:id" element={
            <div className='content'>
              <BlogDetails />
            </div>
            } />
        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
