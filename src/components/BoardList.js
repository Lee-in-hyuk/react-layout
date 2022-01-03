import React from "react";
function BoardList({lists}){
    return(
        <div id="mainCnt2">
            <ul>
                {lists.map(list=>(
                   <li key={list.id}>{list.boardlist}<span>{list.date}</span></li>
                ))}
            </ul>
        </div>
    );
}
export default BoardList;
