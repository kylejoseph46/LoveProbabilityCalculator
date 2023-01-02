import './../App.css';
import Footer from './Footer'
import Body from './Body'
import About from './About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <>
              <Body />
              <Footer />
            </>
          }></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
