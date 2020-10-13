import React from 'react';


function Chip(props){
    return (
      <div className="mdc-chip" role="link" >
        <div className="mdc-chip__ripple"></div>
        <span role="gridcell">
          <span role="button" tabIndex="0" className="mdc-chip__primary-action">
            <span className="mdc-chip__text" aria-label={props.text} >{props.text}</span>
          </span>
        </span>
        <span role="gridcell">
          <i className="material-icons mdc-chip__icon mdc-chip__icon--trailing" tabIndex="-1" role="button">{props.icon}</i>
        </span>
      </div>
    );
}

export default Chip;
