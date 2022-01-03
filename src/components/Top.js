import React from "react";
function Top(props){
    const lists = props.lists;
    let lis = [];
    lists.forEach(list=>lis.push(<li key={list.id}>{list.list}</li>));
    return(
        <div id="header">
            <h1>{props.title}</h1>
            <ul>
                {lis}
            </ul>
        </div>
    );
}
export default Top;