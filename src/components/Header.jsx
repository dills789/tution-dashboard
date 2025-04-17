import './header.css'

function Header() {
// This is the Header Structure
    return (
      <div>
<header className="site-header">

{/* Child 1: Wrapper for the left side */}
<div>
  <h1>PS Tuitions</h1>
</div>

{/* Child 2: Wrapper for the right side (navigation) */}
<nav> {/* Using <nav> is good practice for navigation links */}
  <a href="#">Home</a>
  <a href="#">Classes</a>
  <a href="#">Contact Us</a>
  <a href="#">Login</a>
  {/* You might put these in a <ul> and <li> later for better structure */}
</nav>

</header>
    </div>
    )
  }

export default Header;