import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Context from './Context.js';




class Doc extends React.Component{
  componentDidMount(){
    document.title = Context.getContext().appname;
  }

  render(){
    return(
      <App />
    )
  }
}
ReactDOM.render(
  <React.StrictMode>
    <Doc/>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
