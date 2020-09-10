import React from 'react';
import {MDCSnackbar} from '@material/snackbar';

class Snackbar extends React.Component{
  componentDidMount(){
    var snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));

    snackbar.open();
    setTimeout(()=>{snackbar.close()},this.props.duration);
  }
  render(){
    return (
      <div className="mdc-snackbar">
        <div className="mdc-snackbar__surface">
          <div className="mdc-snackbar__label"
               role="status"
               aria-live="polite">
            {this.props.text}
          </div>
          <div className="mdc-snackbar__actions">
            {this.props.actions}
          </div>
        </div>
      </div>
    );
  }
};
class SnackbarParent extends React.Component{
    constructor(props){
        super(props);
        this.container = props.container;
        this.state = {
          'length':0
        };
        this.container.component = this;
    }
    render(){

      return (<div>{SnackbarContainer.tray}</div>);
    }
};

class SnackbarContainer{
  static tray = [];
  static instance=null;
  constructor(){
    this.component = null;
  }
  static getContainer(){
    if(SnackbarContainer.instance ===null){
      SnackbarContainer.instance = new SnackbarContainer();
    }
    return (SnackbarContainer.instance);
  }
  renderable(){
    return (<SnackbarParent container={this}/>)
  }
  addSnackbar(text,actions,duration){
    SnackbarContainer.tray.push(
      <Snackbar key={text+this.component.state.length} text={text} actions={actions} duration={duration}/>
    );
    this.component.setState({'length':this.component.state.length+1});
  }
}export default SnackbarContainer;
