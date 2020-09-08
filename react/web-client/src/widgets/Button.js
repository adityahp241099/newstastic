import React from 'react';
import {MDCRipple} from '@material/ripple';
class Button extends React.Component {
  componentDidMount(){
    // eslint-disable-next-line
    const fabRipple = new MDCRipple(document.querySelector('.mdc-button'));
  }
  render(){
    return(
      <button className="mdc-button mdc-button--raised" onClick={this.props.onclick}>
        <div className="mdc-button__ripple"></div>
        <span className="mdc-button__label">{this.props.label}</span>
      </button>
    );
  }
}
export default Button;
