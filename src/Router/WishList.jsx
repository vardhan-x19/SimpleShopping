import EmptyWish from "../Comp/EmptyWish";
import WishComp from "../Comp/WishComp";
import { useSelector } from "react-redux";
import { IoIosAddCircleOutline } from "react-icons/io";
function Wishlist() {
    const itemComp= useSelector(store=>store.wishListItems);
    console.log("wishitems", itemComp);
    return (
        <div className="items-container">
        <div class="bag-page">
            <div class="bag-items-container">
            { itemComp.length===0 && <EmptyWish></EmptyWish>}
            {itemComp.map((item)=>(
                <WishComp item={item} ></WishComp>
            ))}
            </div>
        </div>
        </div>
    )
}
export default Wishlist;