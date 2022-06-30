import React from 'react';
import Hello from './Hello'
import './App.css';

function App() {
  const name = '창훈';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fondSize: 24,  // 기본 단위 px
    padding: 'rem'  // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <>
    {/* 주석은 중괄호로 감싸야 주석이된다 ~ */}
      <Hello />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
      {/* <div>{name}</div>
      <div>안녕히계세요</div> */}
    </>
  )
}

export default App;
