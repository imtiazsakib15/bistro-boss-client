const MenuItem = ({ item }) => {
  const { image, price, name, recipe } = item;

  return (
    <div className="flex max-w-2xl mx-auto gap-4">
      <img
        className="w-16 h-14 sm:w-24 sm:h-20 rounded-full rounded-tl-none"
        src={image}
        alt=""
      />
      <div>
        <h3 className="sm:text-xl font-cinzel pb-1 sm:pb-2">
          {name}-----------
        </h3>
        <p className="text-sm sm:text-base">{recipe}</p>
      </div>
      <div>
        <span className="text-yellow-500 w-full flex-1 font-medium">
          ${price}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;
