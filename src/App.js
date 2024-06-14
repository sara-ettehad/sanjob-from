import Home from '../src/pages/Home';
import styled from "styled-components";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import '../src/style/home.css';
import './../src/style/businessPage.css';

import BusinessPage from './pages/BusinessPage';


const StyledText = styled.div`
  font-family: "Noto Naskh Arabic", serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
`;
const StyledText2 = styled.div`

font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
    `;

function App() {
  return (
    <div>
      <StyledText>
      <StyledText2>
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BusinessPage" element={<BusinessPage />} />
        </Routes>
        </Router>
      </StyledText2>
      </StyledText>
    </div>
  );
}

export default App;