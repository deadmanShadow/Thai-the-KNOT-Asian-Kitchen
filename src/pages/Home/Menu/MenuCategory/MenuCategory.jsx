import Cover from "../../Home/Shared/Cover/Cover";
import MenuItem from "../../Home/Shared/MenuItem/MenuItem";
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="p-8">
            {title && <Cover img={img} title="Our menu"></Cover>}
            <div className="grid md:grid-cols-2 gap-4 mt-16">
                {items.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
            <Link to={`/order/${title}`}>
                <button className="btn btn-outline btn-accent mt-2 border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;