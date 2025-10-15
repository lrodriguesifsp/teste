import { Link } from 'react-router'

function Header() {
  return (
    <header>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
      </ul>
    </header>
  )
}

export default Header