import MenuCard from "../MenuCard/MenuCard";

const MenuCards = ({items}) => {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map(item => <MenuCard item={item} key={item?._id} />)}
            </div>
    );
};

export default MenuCards;