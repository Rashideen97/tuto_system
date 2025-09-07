// import Terms from "./Terms"
import { BrowserRouter, Link } from "react-router-dom"

function Header() {
  return (
    <div className="header-box">
     <header className="header-text">
        <nav>

            <li><Link to="/"> Home </Link></li>
            <li><Link to="/students"> Students </Link></li>
            <li><Link to="/class"> Class </Link></li>
            <li><Link to="/timetable"> Timetable </Link></li>
            <li><Link to="/term"> Terms </Link></li>
            
        </nav>
     </header>
    </div>
  )
}

export default Header