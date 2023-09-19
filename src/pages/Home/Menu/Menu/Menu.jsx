import { Helmet } from 'react-helmet-async';
import Cover from '../../Home/Shared/Cover/Cover';
import menuImg from '../../../../assets/menu/banner3.jpg'
import useMenu from '../../../../hooks/useMenu';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Helmet>
                <title>KNOT | MENU</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>

            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>

            {desserts.length > 0 && (
                <>
                    <SectionTitle
                        subHeading=""
                        heading="Desserts"></SectionTitle>
                    <MenuCategory items={desserts}></MenuCategory>
                </>
            )}

            {pizza.length > 0 && (
                <>
                    <SectionTitle
                        subHeading=""
                        heading="Pizzas"></SectionTitle>
                    <MenuCategory items={pizza}></MenuCategory>
                </>
            )}

            {soup.length > 0 && (
                <>
                    <SectionTitle
                        subHeading=""
                        heading="Soup"></SectionTitle>
                    <MenuCategory items={soup}></MenuCategory>
                </>
            )}

            {salad.length > 0 && (
                <>
                    <SectionTitle
                        subHeading=""
                        heading="Salad"></SectionTitle>
                    <MenuCategory items={salad}></MenuCategory>
                </>
            )}
        </div>
    );
};

export default Menu;
