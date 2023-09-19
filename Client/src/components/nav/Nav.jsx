
import SearchBar from "../searchBar/SearchBar";
import { Link } from "react-router-dom";
import style from './nav.module.css';

const Nav = ({ onSearch, setAccess }) => {  
    const handleLogOut = () => {
        setAccess(false);
    }
    return(
        <nav className={style.navContainer}>
          
            <button  className={style.buttonOnlog} onClick={handleLogOut}>Log Out</button>
              <SearchBar onSearch={onSearch}/> 
            
            <div className={style.linkContainer}>
                <button className={style.buttonContainer}>
                  <Link className={style.label} to='/about'> About </Link>
                </button >
                
                <button className={style.buttonContainer}>
                  <Link className={style.label} to='/home'> Home </Link>
                </button >  
                <button className={style.buttonContainer}>
                  <Link className={style.label} to='/favorites'> Favorites </Link>
                </button>
            </div>
           
            
        </nav>
    )
}

export default Nav;