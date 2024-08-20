import { useSelector } from "react-redux";
import MenComp from "../Comp/MenComp";
function Men(params) {
    const items=useSelector(store=>store.defItems);
    const menItems=items.filter((item)=>item.category==="Men");
    return(
        <div className="items-container">
     {menItems.map((item)=><MenComp item={item}></MenComp>)}
     </div>
    )
}
export default Men;