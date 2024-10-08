import './navBar.css';
import CartWidget from '../../common/cartWidget/cartWidget';
import { Link } from 'react-router-dom';

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
                    <li><a href="/products" className='aSecciones'>Productos</a></li>
                    {/* <li><a href="#" className='aSecciones'>Joggins</a></li>
                    <li><a href="#" className='aSecciones'>Accesorios</a></li>
                    <li><a href="#" className='aSecciones'>For Sale</a></li> */}
                </ul>
            </div>
            <div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default Navbar
