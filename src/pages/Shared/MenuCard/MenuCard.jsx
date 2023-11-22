import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const MenuCard = ({ item }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const { cartRefetch } = useCart();

  const handleAddToCart = () => {
    const email = user?.email;
    if (!email) return navigate("/login", { state: { from: location } });
    const cart = {
      email,
      menuId: item._id,
      name: item.name,
      image: item.image,
      price: item.price,
    };

    axiosSecure.post("/carts", cart).then((res) => {
      if (res.data?.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: `${item.name} added to cart successfully!`,
          icon: "success",
        });
        cartRefetch();
      }
    });
  };

  return (
    <div className="bg-slate-100">
      <div className="relative">
        <img className="w-full" src={item?.image} alt="" />
        <p className="absolute right-4 top-4 bg-black text-white px-3 py-2">
          ${item?.price}
        </p>
      </div>
      <div className="p-8 flex flex-col justify-between">
        <h3 className="text-center text-2xl font-semibold">{item?.name}</h3>
        <p className="text-gray-600 pt-2">{item?.recipe}</p>
        <div className="text-center pt-5">
          <button
            onClick={handleAddToCart}
            className="uppercase sm:text-lg font-medium border-b-2 border-yellow-700 px-5 py-2 rounded-md text-yellow-700 hover:bg-black"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
