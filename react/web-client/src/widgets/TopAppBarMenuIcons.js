import React from 'react';
import {MDCRipple} from '@material/ripple';
class TopAppBarButton extends React.Component {
  componentDidMount(){
    // eslint-disable-next-line
    const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
    iconButtonRipple.unbounded = true;
    
  }
  render(){
    return(
      <button onClick={()=>{if(this.props.onclick){this.props.onclick()}}} className="material-icons mdc-top-app-bar__action-item mdc-icon-button" aria-label={this.props.label}>
        {this.props.icon}
      </button>
    );
  }
}
export default TopAppBarButton;
