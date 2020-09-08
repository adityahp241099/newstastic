import React from 'react';
import {MDCRipple} from '@material/ripple';
import Context from '../Context.js';
class DrawerOptions extends React.Component {
    constructor(props){
        super(props);
        if(this.props.breadcrumbs){
            this.breadcrumbs = this.props.breadcrumbs;
        }else{
            this.breadcrumbs = [];
        }
        
        this.state = {
            'activated':false
        }
        if(this.props.active){
            this.state = {
                'activated':true
            }
        }
        
        
    }
    componentDidMount(){
    // eslint-disable-next-line
    const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-list-item__ripple'));
    this.props.parent.children.push(this);
    }
    clickHandler(){
        this.props.parent.setActive(this);
        var ctx = Context.getContext();
        ctx.breadcrumbs = this.breadcrumbs;
        this.props.parent.refreshPage(this);
        
    }

   

    render(){
        console.log();
        if(this.state.activated){
            return(
            <p onClick={()=>{this.clickHandler()}} className="mdc-list-item mdc-list-item--activated" href="" aria-current="page">
                <span className="mdc-list-item__ripple"></span>
                <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{this.props.icon}</i>
                <span className="mdc-list-item__text">{this.props.label}</span>
            </p>
            );
        }else{
            return(
                <p onClick={()=>{this.clickHandler()}} className="mdc-list-item mdc-list-item" href="" aria-current="page">
                    <span className="mdc-list-item__ripple"></span>
                    <i className="material-icons mdc-list-item__graphic" aria-hidden="true">{this.props.icon}</i>
                    <span className="mdc-list-item__text">{this.props.label}</span>
                </p>
            );
        }
    }
}
export default DrawerOptions;
