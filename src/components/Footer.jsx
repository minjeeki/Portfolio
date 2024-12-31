import { NavLink } from 'react-router-dom';
import { useUser } from '../App';
import my_portfolio_logo from "../assets/favicon.png"
import "./../styles/Footer.css"

const Footer = () => {
  const { user } = useUser();
  const github_url = user.links.find(item => item.type === "github")

  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="logo-container">
              <img src={my_portfolio_logo} alt="로고" />
            </div>
            <span>© 2024</span>
            <a className="my-name-with-url" href={github_url.url}>{user.name} </a>
          </div>
          <div>Thanks to 희원 상혁 재준</div>
        </div>
        <nav className="footer-bottom">
          <ul className="nav-list--footer">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/team-projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/toy-projects">Toy Projects</NavLink>
            </li>
            <li>
              <NavLink to="/components">Components</NavLink>
            </li>
            <li>
              <NavLink to="/about-me">About me</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;