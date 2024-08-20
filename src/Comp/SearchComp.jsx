import { useDispatch, useSelector } from "react-redux";
import { bagItemsActions } from "../store/bag";
import { AiOutlineHeart } from 'react-icons/ai';
import { wishListAction } from "../store/wishlist";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
function SearchComp({item}) {
    const dispatch=useDispatch();

   const removeBagItems=()=>{
        dispatch(bagItemsActions.removeItemsFromBag(item.id));
   }

    const btnClicked=()=>{
          dispatch(bagItemsActions.addItemsToBag(item));
    }

    const bagItemSlice=useSelector(store=>store.addBagItems);
    let val=false;
    const checkBag=()=>{
       for(let i=0;i<bagItemSlice.length;i++)
       {
        if(bagItemSlice[i].id===item.id){
            val=true;
        }
       }
    }

    checkBag();
    const [check,setCheck]=useState(false);
    const wishList=()=>{
      dispatch(wishListAction.addwishListItems(item))
      setCheck(true);
    }
    const wishListRemove=()=>{
      dispatch(wishListAction. removewishListItems(item.id))
      setCheck(false);
    }
    return (
        <div className="item-container">
        <div className="item-image-container">
          <img className="item-image" src={item.image} alt="item image" />
          <div className="wishlist-icon">
            {!check?<AiOutlineHeart  onClick={wishList} />:<FaHeart onClick={wishListRemove}  />}
          </div>
        </div>
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {val === false ? 
          <button className="btn-add-bag" onClick={btnClicked}>Add to Bag</button> :
          <button type="button" className="btn btn-success btn-add-bag" onClick={removeBagItems}>Remove from Bag</button>
        }
      </div>
    )
}
export default SearchComp;