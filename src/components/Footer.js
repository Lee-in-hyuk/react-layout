import React from "react";
function Footer({title}){
    return(
        <div id="footer">
            <p>주소 : 서울특별시 용산구 한강대로 대표이사: 그린 <br/>
                사업자등록번호 : 110-12-12345<br/>
                통신판매신고 : 제 2020-서울용산-000호</p>
            <h1>{title}</h1>
        </div>
    );
}
export default Footer;