import React from "react";
function List({listarr}){
    return(
        <div id="mainCnt1">
            <ul>
                {listarr.map(list=>(
                    <li key={list.id}>{list.sotitle}</li>
                ))}
            </ul>
        </div>
    );
}
export default List;