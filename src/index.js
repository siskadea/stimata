import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HelloComponent from './component/HelloComponent';
import StateFullComponent from './container/StateFullComponent';

//vidio4
// const HelloWorld = () => {
//   return <p>Hello World</p>
// }

//vidio5
//2cara membuat komponen

//1 stateless component 
// function HelloComponent(){ //sudah tdk digunakan
// const HelloComponent = () => { 
//   return <p>Hello Functional Component</p>
// }

//2 statefull component
// class StateFullComponent extends React.Component{
//   render(){
//     return <p>Statefull component</p>
//   }
// }


ReactDOM.render(<HelloComponent />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
