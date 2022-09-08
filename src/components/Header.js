import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>music reports dev test</h1>
      <nav className='head-nav'>
        <Link to='/' ><div className='nav-link'>top artists</div></Link>
        <Link to ='/two'><div className='nav-link'>top tracks</div></Link>
        <Link to ='/about'><div className='nav-link'>about</div></Link>
      </nav>
    </header>
  )
};

export default Header;