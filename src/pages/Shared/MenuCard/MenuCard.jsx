const MenuCard = ({ item }) => {
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
          <button className="uppercase sm:text-lg font-medium border-b-2 border-yellow-700 px-5 py-2 rounded-md text-yellow-700 hover:bg-black">
            View full menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
