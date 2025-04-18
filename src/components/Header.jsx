import './header.css'

function Header() {
// This is the Header Structure
    return (
      <div>
<header className="site-header">

{/*1 - Main Logo */}
<div>
  <h1>PS Tuitions</h1>
</div>

{/*2 - Nav next to Main Logo */}
<nav className="main-nav">
    <ul>    
        <li><a href="#">Home</a></li>
        <li><a href="#">Classes</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>

</nav>

{/*3 - Login Button on the Right */}
<div className="login-area">
    <a href="#">Login</a>
</div>

</header>
    </div>
    )
  }

export default Header;