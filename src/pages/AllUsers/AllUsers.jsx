import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaTrash, FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch: usersRefetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make him/her admin!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${id}`).then((res) => {
          if (res.data?.modifiedCount > 0) {
            Swal.fire({
              title: "Great!",
              text: "He/She is now admin!",
              icon: "success",
            });
            usersRefetch();
          }
        });
      }
    });
  };

  return (
    <div className="pt-4">
      <SectionTitle title={"Manage all users"} subtitle={"How Many??"} />
      <div className="px-8 py-10 bg-slate-50 mt-10">
        <div className="text-xl font-bold">
          <p>Total Order: {users?.length}</p>
        </div>
        <div className="overflow-x-auto pt-8">
          <table className="table-auto w-full">
            <thead>
              <tr className="text-left bg-yellow-600 text-white">
                <th className="pr-5 py-3 rounded-tl-lg">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th className="rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="pr-5 text-lg font-bold py-3">{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <p className="font-semibold">Admin</p>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="p-2 bg-yellow-600 text-white rounded"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td className="text-red-600">
                    <button>
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

export default AllUsers;
