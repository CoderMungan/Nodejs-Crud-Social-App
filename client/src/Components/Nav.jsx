import Nav from 'react-bootstrap/Nav';
import { Link, NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { AuthProvider } from '../Context/UserContext';
import { useContext } from 'react';
import { base_media_url } from '../shared';



function Navbar() {

  const { user } = useContext(AuthProvider)
  console.log("NAVDAKİ USER:", user)

  return (

    // nav.item = div
    <Nav as="nav" className='sitenav' defaultActiveKey="/home">
    <Nav.Item>
      
      <NavLink to="/">Dashboard</NavLink>
    </Nav.Item>

    <Nav.Item>
      <NavLink  to="/not">Test</NavLink>
    </Nav.Item>

   

    {
        user === null 
        ?
        <NavLink className="ms-auto ic-bosluk" to="/login">
                Giriş Yap
        </NavLink> 

        :
            <Dropdown className='ms-auto ic-bosluk'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='nav-user'>

                  <img src={`${base_media_url}/${user.user_avatar}`} alt="User Avatar" />

                  <span>{user.username}</span>
         
                </Dropdown.Toggle>
          
                <Dropdown.Menu>

                <Dropdown.Item>
                        <Link to={`/users/${user.username}`}>Profilim</Link>
                  </Dropdown.Item>


                  <Dropdown.Item>
                        <Link className='text-danger' to="/logout">Çıkış Yap</Link>
                  </Dropdown.Item>
                 
                </Dropdown.Menu>

            </Dropdown>

    }


  </Nav>
  );
}

export default Navbar;