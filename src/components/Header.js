
import NavBar from "./NavBar";

const IsHeader = true;


const Header = () => {
    return (
        <header>
          <span className="material-icons">store</span>
          <h3>Tienda online</h3>
          <NavBar IsHeader = {IsHeader}/>

        </header>
    );
    }

export default Header;

