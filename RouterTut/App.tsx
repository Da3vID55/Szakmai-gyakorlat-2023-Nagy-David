import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Page } from "./pages/Page"
import { Pages } from "./pages/Pages"
import { NewPage } from "./pages/NewPage"
import { NotFound } from "./pages/NotFound"
import { PageLayout } from "./PageLayout"


function App() {

  return (// a linkekkel lehet előhozni a különböző oldalakat, de csak a Routes tagen belüli tartalom változik.
          // a kezdő oldal az lesz, amelyik path-je "/"
    <>
    <Routes>
      <Route path="/Pages" element={<h1>Its the Pages page!</h1>}></Route>
    </Routes>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Pages">Pages</Link></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Pages" element={<PageLayout/>}>
          <Route index element={<Pages/>}></Route>
          <Route path=":id" element={<Page/>}></Route>
          <Route path="new" element={<NewPage/>}></Route>
        </Route>

        {/*<Route path="/Pages" element={<Pages/>}></Route>
        <Route path="/Pages/:id" element={<Page/>}></Route>
        <Route path="/Pages/new" element={<NewPage/>}></Route> */}
        <Route path="*" element= {<NotFound/>}></Route>
      </Routes>
    </>
  )
}

export default App
