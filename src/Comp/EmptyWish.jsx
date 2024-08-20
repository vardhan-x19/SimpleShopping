import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
function EmptyWish(){
    return (
         <center className="emtptyWish-container">
            <h2>Your Whishlist is Empty</h2>
           <Link to={"/"}><IoIosAddCircleOutline className="emptyAddMsg" /></Link>
            <br />
            <img src="/images/emptyWish.png" alt="empty msg" className="emptyMsgPic" />
         </center>
    )
}
export default EmptyWish;