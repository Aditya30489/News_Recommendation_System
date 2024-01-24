import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import image from '../images/vnricon.jpg'
import './NavbarData.css'


function NavbarData() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className='wd'>
        <img className='zoom ' src='https://png.pngtree.com/png-clipart/20190904/original/pngtree-creative-shopping-festival-shopping-cart-png-image_4463817.jpg' height='50px' />
        <Navbar.Brand href="/products" className='ms-2 font zoom'>FASHION HUB</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarData;