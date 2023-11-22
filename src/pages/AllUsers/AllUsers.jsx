import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaTrash, FaUsers } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
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
              <tr className="text-left">
                <th className="pr-5">#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="pr-5 text-lg font-bold">{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <FaUsers />
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
