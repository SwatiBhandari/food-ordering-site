import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { useState } from 'react';
import { Link} from 'react-router-dom';
import { auth } from './firebase';
import Contact from './components/Contact';
import { db } from './firebase';
import { SearchTermContext } from './App'

function Header() {
  const [buttonPopup,setButtonPopup] = useState(false);
  const [{basket,user}, dispatch] = useStateValue();
  const [name,setName] =useState('');
  const [message,setMessage] =useState('');
  const searchTermContext = useContext(SearchTermContext);

  const handleMessage = (e) => {
    e.preventDefault();
    if((name != "") && (message != "")){
    db.collection('Contact').add({
        name:name,
        message:message,
    })
    .then(() => {
        alert('Thanks.We will get back to you!');
    })

    setName("")
    setMessage("")
  }else{
    alert("Please fill up all the fields then submit")
  }
  };

  const handleAuthentication = () => {
    if (user){
      auth.signOut();
    }
  }

  return (  
    <div className='header'>
      <Link to='/'>
        <img 
          className='header_logo' 
          src="https://i.postimg.cc/Xvmtx0VV/Street-Hub-2.png"
          alt=''
        />
      </Link>

        <div className='header_search'>
          <Link to='/Filter'>
          <input className='header_searchInput' type="text" onChange={(event) => {searchTermContext.setSearchTerm(event.target.value)}}/>
          </Link>
          <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
          <Link className='link' to={!user && '/login'}>
          <div onClick={handleAuthentication} className='header_option'>
            <span className='header_optionLineOne'>
              Hello Foodie
            </span>
            <span className='header_optionLineTwo'>
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
          </Link>

          <span className='help' onClick={() => setButtonPopup(true)}>
            <div className='header_option'>
              <span className='header_optionLineTwo'>Help</span>

            </div>
          </span>
          <Contact trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Contact Us</h3>
            <form>
              <label className='Contact-head'>Name: </label><br />
              <input placeholder="Name" value={name} type='text' onChange={(e) => setName(e.target.value)}></input><br /><br />
              <label className='Contact-head'>Message: </label><br />
              <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br /><br />
              <button className='Contact-button' onClick={handleMessage} type='submit'>Submit</button>
            </form>
          </Contact>

          <Link className='link' to={user ? '/checkout' : '/login'}>
          <div className='header_optionCart'>
            <ShoppingCartIcon className='header_cartIcon'/>
            <span className='headedr_optionLineTwo
            header_cartCount'>
              {basket.length}
            </span>
          </div>
          </Link>

        </div>
     </div>
  )
}
export default Header;