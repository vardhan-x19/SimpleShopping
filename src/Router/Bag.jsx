import BagSummery from "../Comp/BagSummery";
import BagItem from "../Comp/BagItem";
import { useSelector } from "react-redux";
function Bag() {
    const itemComp= useSelector(store=>store.addBagItems);
    return (
        <div className="items-container">
        <div class="bag-page">
            <div class="bag-items-container">
            {itemComp.map((item)=>(
                <BagItem item={item} ></BagItem>
            ))}
            </div>
            <BagSummery items={itemComp} ></BagSummery>
        </div>
        </div>
    )
}
export default Bag;