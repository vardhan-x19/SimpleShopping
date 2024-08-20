import { useSelector } from "react-redux";
import MenComp from "../Comp/MenComp";
function Women(params) {
    const items=useSelector(store=>store.defItems);
    const menItems=items.filter((item)=>item.category==="Women");
    return(
        <div className="items-container">
     {menItems.map((item)=><MenComp item={item}></MenComp>)}
     </div>
    )
}
export default Women;