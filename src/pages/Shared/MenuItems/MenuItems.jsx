import MenuItem from "../MenuItem/MenuItem";

const MenuItems = ({ items }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 pt-12">
      {items.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;
