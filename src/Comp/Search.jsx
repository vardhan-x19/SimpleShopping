import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import SearchComp from "./SearchComp";
import NoSearchItems from "./NoSearchItems";
function Search() {
    const location = useLocation();
    const { data } = location.state ; // Provide a default empty object if state is undefined
    console.log(data);
    
    const items = useSelector(store => store.defItems);
    
    const searchItems = items.filter(item => {
        // Ensure category is defined and perform the check
        const matchesCategory = item.category && item.category===data;
    
        // Ensure name, id, and company are defined and perform the check
        const matchesSearchTerm = 
            (item.item_name && item.item_name.toLowerCase().includes(data)) || 
            (item.id && item.id.toLowerCase().includes(data)) || 
            (item.company && item.company.toLowerCase().includes(data));
    
        return matchesCategory || matchesSearchTerm;
    });
    
    
    
     
    console.log(searchItems);;
    

    return (
        <div className="items-container">
        {searchItems.length===0 && <NoSearchItems></NoSearchItems>}
        {searchItems.map((item)=><SearchComp item={item}></SearchComp>)}
        </div>
    );
}

export default Search;
