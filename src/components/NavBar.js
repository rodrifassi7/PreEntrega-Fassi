import CartWidget from "./CartWidget";


const Nav = (props) => {


    const {IsHeader} = props;
    if (IsHeader){
        return (
            <nav>
                
                <a href='#'>link</a>
                <a href='#'>link</a>
                <a href='#'>link</a>
                <CartWidget/><span>0</span>
            </nav>
            )
    } else {
        return (
            <nav>
                <a href='#'>link</a>
            </nav>
            ) 
            };

      
   
   
}
export default Nav;