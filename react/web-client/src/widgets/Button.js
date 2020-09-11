import React from 'react';
import {MDCRipple} from '@material/ripple';
class Button extends React.Component{
  componentDidMount(){
    // eslint-disable-next-line 
    const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }
  render(){
    return (
      <div className="mdc-touch-target-wrapper">
        <button className="mdc-button">
           <div className="mdc-button__ripple"></div>
           <span className="mdc-button__label">{this.props.label}</span>
        </button>
      </div>
    );
  }
}export default Button;
