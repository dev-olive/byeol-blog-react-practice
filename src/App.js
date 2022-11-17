import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from '@emotion/styled'
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Blog" element={<Blog />} />
          {/* <Route path="/Til" element={<Til />} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
const Container = styled.section`
  flex: 1;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
`;
export default App;

