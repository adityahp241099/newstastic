import React from 'react';
import {MDCRipple} from '@material/ripple';
class DefaultCard extends React.Component{
  componentDidMount(){

    // const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
    // const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
    //   return new MDCRipple(el);
    // });
  }
  render(){
    return(
    <div className="mdc-card" style={{"maxHeight":"480px","margin":"8px","padding":"8px"}}>
      <div className="mdc-typography--headline6">{this.props.title}</div>
      <div className="mdc-typography--subtitle2"><i>{this.props.subtitle}</i></div>
      <div className="mdc-typography--body1">{this.props.body}</div>
      
      {this.props.children}
    </div>
  );
  }
}
export default DefaultCard;
