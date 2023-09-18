
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt={name} /> {/* Ensure alt attribute for accessibility */}
            <div>
                <h3 className="uppercase">{name}</h3>
                <p>{recipe}</p> {/* Make sure 'recipe' is defined in your data */}
            </div>
            <p className="text-yellow-600">${price}</p>
        </div>
    );
};

export default MenuItem;
