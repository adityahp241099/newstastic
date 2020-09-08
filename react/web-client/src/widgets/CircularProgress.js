import React from 'react';
import { MDCCircularProgress } from '@material/circular-progress';
class CircularProgress extends React.Component{
    componentDidMount(){
        //eslint-disable-next-line
        const circularProgress = new MDCCircularProgress(document.querySelector('.mdc-circular-progress'));
        circularProgress.determinate = false;
    }
    render(){
        return(
            <div className="mdc-circular-progress mdc-circular-progress--medium" role="progressbar" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" style={{'marginLeft':'auto','marginRight':'auto'}}>
            <div className="mdc-circular-progress__determinate-container">
              <svg className="mdc-circular-progress__determinate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <circle className="mdc-circular-progress__determinate-circle" cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="78.54"/>
              </svg>
            </div>
            <div className="mdc-circular-progress__indeterminate-container">
              <div className="mdc-circular-progress__spinner-layer">
                <div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
                  <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27"/>
                  </svg>
                </div><div className="mdc-circular-progress__gap-patch">
                  <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27"/>
                  </svg>
                </div><div className="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
                  <svg className="mdc-circular-progress__indeterminate-circle-graphic" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="12.5" stroke-dasharray="78.54" stroke-dashoffset="39.27"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default CircularProgress;