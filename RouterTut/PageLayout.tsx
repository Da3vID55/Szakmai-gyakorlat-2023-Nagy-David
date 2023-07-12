import {Link, Outlet} from "react-router-dom"

export function PageLayout()
{
    return (
    <>
    <Outlet></Outlet>
    <nav>
        <ul>
          <li>
            <Link to="/Pages/1">Page1</Link>
          </li>
          <li>
            <Link to="/Pages/2">Page2</Link>
          </li>
          <li>
            <Link to="/Pages/new">New Page</Link>
          </li>
        </ul>
      </nav>
      </>)
      
}