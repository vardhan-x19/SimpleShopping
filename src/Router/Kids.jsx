import { useSelector } from "react-redux";
import KidsComp from "../Comp/KidsComp";
function Kids(params) {
    const items=useSelector(store=>store.defItems);
    const kidsItems=items.filter((item)=>item.category==="Kids");
    return(
        <div className="items-container">
     {kidsItems.map((item)=><KidsComp item={item}></KidsComp>)}
     </div>
    )
}
export default Kids;