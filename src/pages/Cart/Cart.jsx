import { FaTrash } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, cartRefetch } = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    axiosSecure.delete(`/carts/${id}`).then((res) => {
      console.log(res.data);
      if (res.data?.deletedCount > 0) {
        cartRefetch();
        Swal.fire({
          title: "Good job!",
          text: `Deleted successfully!`,
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="pt-4">
      <SectionTitle title={"Wanna add more"} subtitle={"My Cart"} />
      <div className="px-8 py-10 bg-slate-50 mt-10">
        <div className="text-xl font-bold flex justify-between items-center">
          <p>Total Order: {cart?.length}</p>
          <p>Total Price: {totalPrice}</p>
          <button className="px-5 py-2 bg-yellow-600 text-white rounded-lg">
            Pay
          </button>
        </div>
        <div className="overflow-x-auto pt-8">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left">
                <th className="pr-5">#</th>
                <th>Item Image</th>
                <th>Item name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <td className="pr-5 text-lg font-bold">{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td className="text-red-600">
                    <button onClick={() => handleDelete(item._id)}>
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
