import { useSelector } from "react-redux";
import GadgetComp from "../Comp/GadgetComp";
function Gadgets(params) {
    const items=useSelector(store=>store.defItems);
    const gadgetItems=items.filter((item)=>item.category==="Gadgets");
    return(
        <div className="items-container">
     {gadgetItems.map((item)=><GadgetComp item={item}></GadgetComp>)}
     </div>
    )
}
export default Gadgets;