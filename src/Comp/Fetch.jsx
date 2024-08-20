import { useDispatch, useSelector } from "react-redux";
import { fetchActions } from "../store/fetching";
import { useEffect } from "react";
import { ItemActions } from "../store/itemSlice";
import Load from "./Load";
function Fetch() {
   const fetchStatus= useSelector(store=>store.fetchDone);
   const dispatch=useDispatch();
   useEffect(()=>{
    if(fetchStatus.fetchdone) return ;
    const controller= new AbortController();
    const signal=controller.signal;
   //  dispatch(fetchActions.curFecthing());
    fetch("https://actual-backend-1.onrender.com/items",{signal})
    .then(res => res.json())
    .then((data)=>{
      console.log(data);
        dispatch (ItemActions.fetchingItems(data.items[0]));
        dispatch(fetchActions.fecthingdone());
        dispatch(fetchActions.curFecthingFinish());
    }
    );
    return ()=>{
      controller.abort;
    }
  }
  ,[dispatch,fetchStatus.fetchdone]);
    return (
        <>
       {!fetchStatus.fetchdone&&<Load></Load>}
       </>
    )
}
export default Fetch;