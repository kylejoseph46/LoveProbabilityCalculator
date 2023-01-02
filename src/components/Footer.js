import { Link } from 'react-router-dom'

function Footer() {
  /*
      <Link className="about-link" to='/about'>
        About
      </Link>

      <span className="about-link">About</span>
  */

  return (
    <footer className="footer">
      <Link to='/about' style={{ textDecoration: 'none' }}>
        <span className="about-link">About</span>
      </Link>

    </footer >
  )
}

export default Footer