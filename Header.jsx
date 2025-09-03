// import Terms from "./Terms"

function Header() {
  return (
    <div className="header-box">
     <header className="header-text">
        <nav>
            <li> <a> Home </a> </li>
            <li> <a> Students </a> </li>
            <li> <a> Timetable </a> </li>
            <li> <a> Class Summary </a> </li>
            <li> <a> Monthly Update </a> </li>
            <li> <a> Deposit and Fees </a> </li>
            <li> <a href="./Terms.html"> Terms </a> </li>
        </nav>
     </header>
    </div>
  )
}

export default Header