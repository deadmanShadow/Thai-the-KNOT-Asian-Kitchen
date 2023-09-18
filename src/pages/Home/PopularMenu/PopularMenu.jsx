// PopularMenu.jsx
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../Home/Shared/MenuItem/MenuItem";

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        // Replace 'menu.json' with the actual path to your JSON data file
        fetch('/public/menu.json') // Make sure to provide the correct path
            .then((res) => res.json())
            .then((data) => {
                const popularItems = data.filter((item) => item.category === 'popular');
                setMenu(popularItems);
            });
    }, []);

    return (
        <section className="mb-12">
            <SectionTitle heading={"From Our Menu"} subHeading={"Popular Items"}></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {menu.map((item) => (
                    <MenuItem key={item._id} item={item}></MenuItem>
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;
