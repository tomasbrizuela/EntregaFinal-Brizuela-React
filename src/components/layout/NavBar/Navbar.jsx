import './navBar.css';
import CartWidget from '../../common/cartWidget/cartWidget';
import { Link } from 'react-router-dom';
import CartWidgetContainer from '../../common/cartWidget/CartWidgetContainer';

export const Navbar = () => {
    return (
        <nav>
            <div>
                <Link to={'/'}>
                    <img className="logoMarca" src="https://res.cloudinary.com/dl1e82gxl/image/upload/v1725723250/gymSales_ezkrfw.png" alt="Logo de GymSale" />

                </Link>
            </div>
            <div>
                <ul className='listaSecciones'>
                    <li>
                        <Link to={"/products"} style={{ "textDecoration": "none", fontFamily: "poppins", fontWeight: 700, color: "white" }}>
                            Productos
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <CartWidgetContainer />
            </div>
        </nav>
    )
}

export default Navbar
