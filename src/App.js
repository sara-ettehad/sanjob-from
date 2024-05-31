import Home from '../src/pages/Home';

import { 
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

import '../src/style/home.css';


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;