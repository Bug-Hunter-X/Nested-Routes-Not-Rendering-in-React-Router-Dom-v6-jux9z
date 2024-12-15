```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() { 
  const location = useLocation();
  console.log(location);
  return <h1>Home {location.pathname}</h1>; }
function About() { return <h1>About</h1>; }
function NoMatch() { return <h1>NoMatch</h1>; }
export default App;
```