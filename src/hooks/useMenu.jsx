import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Replace 'menu.json' with the actual path to your JSON data file
        fetch('http://localhost:5000/menu') // Make sure to provide the correct path
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);
                setLoading(false);
            });
    }, []);
    return [menu, loading];
}

export default useMenu;