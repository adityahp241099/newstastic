import React from 'react';
import { MDCLinearProgress } from '@material/linear-progress';
class LinearProgress extends React.Component{
    componentDidMount(){
        //eslint-disable-next-line
        const linearProgress = new MDCLinearProgress(document.querySelector('.mdc-linear-progress'));
    }
    render(){
        return(
        <div role="progressbar" className="mdc-linear-progress mdc-linear-progress--indeterminate" aria-label="Example Progress Bar" aria-valuemin="0" aria-valuemax="1" aria-valuenow="0">
            <div className="mdc-linear-progress__buffer">
                <div className="mdc-linear-progress__buffer-bar"></div>
                <div className="mdc-linear-progress__buffer-dots"></div>
            </div>
            <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                <span className="mdc-linear-progress__bar-inner"></span>
            </div>
            <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                <span className="mdc-linear-progress__bar-inner"></span>
            </div>
        </div>
        );
    }
}
export default LinearProgress;