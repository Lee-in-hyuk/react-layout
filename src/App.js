import React from 'react';
import Top from './components/Top';
import Title from './components/Title';
import './App.css';
import List from './components/List';
import BoardList from './components/BoardList';

function App() {
  const lists = [
    {id:1, list:"menu1"},
    {id:2, list:"menu2"},
    {id:3, list:"menu3"},
    {id:4, list:"menu4"},
  ];
  const listarr = [
    {id:1, sotitle:"작은제목 입니다.", con:"내용적는 부분입니다.", date:"2020.12.17"},
    {id:2, sotitle:"작은제목 입니다.", con:"내용적는 부분입니다.", date:"2020.12.17"},
    {id:3, sotitle:"작은제목 입니다.", con:"내용적는 부분입니다.", date:"2020.12.17"},
  ];
  const boardarr = [
    {id:1, boardlist:"2020 그린컴퓨터 아카데미 소식", date:"2020.12.17"},
    {id:2, boardlist:"코로나 바이러스 예방법 ", date:"2020.12.17"},
    {id:3, boardlist:"그린컴퓨터 아카데미 소식", date:"2020.12.17"},
    {id:4, boardlist:"코로나 바이러스 예방법 ", date:"2020.12.17"},
  ]
  return (
    <div className="App">
      <Top title="Green" lists={lists}></Top>
      <Title title="메인컨텐츠01"></Title>
      <List listarr={listarr}></List>
      <Title title="공지사항"></Title>
      <BoardList lists={boardarr}></BoardList>
    </div>
  );
}

export default App;
