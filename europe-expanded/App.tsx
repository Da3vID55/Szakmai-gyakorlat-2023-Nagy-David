import "bootstrap/dist/css/bootstrap.css";
import Map from "./pages/Map";
import {Link, Route, Routes} from 'react-router-dom'
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <head>
        <base href="/"/>
      </head>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Map">Map</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Map" element={<Map/>}></Route>
        <Route path="/Map/:id" element={<Map/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
