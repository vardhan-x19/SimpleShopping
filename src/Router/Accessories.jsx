import { useSelector } from "react-redux";
import AccessoriesComp from "../Comp/AccessoriesComp";
function Accessories(params) {
    const items=useSelector(store=>store.defItems);
    const accessories=items.filter((item)=>item.category==="Accessories");
    return(
        <div className="items-container">
     {accessories.map((item)=><AccessoriesComp item={item}></AccessoriesComp>)}
     </div>
    )
}
export default Accessories;