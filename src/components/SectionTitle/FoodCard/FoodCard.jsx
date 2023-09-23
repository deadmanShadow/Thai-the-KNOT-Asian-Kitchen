import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleAddToCart = item => {
        console.log(item);
        if (user) {
            fetch('http://localhost:5000/carts')
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire(
                            'Good job!',
                            'Item has been added on cart',
                            'success'
                        )

                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                   navigate('/login')
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-outline btn-accent mt-2 border-zinc-950 bg-slate-100 border-0 border-b-4 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;