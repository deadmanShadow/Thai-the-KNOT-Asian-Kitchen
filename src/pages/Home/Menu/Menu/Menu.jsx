import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg'

const Menu = () => {
    return (
        <div>
            <Helmet>
            <title>KNOT | MENU</title>
            </Helmet>
            <Cover img={menuImg} title="our menu"></Cover>
        </div>
    );
};

export default Menu;