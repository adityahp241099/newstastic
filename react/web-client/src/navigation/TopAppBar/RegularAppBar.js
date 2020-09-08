import TopAppBarButton from '../../widgets/TopAppBarMenuIcons.js';

import React from 'react';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCDrawer} from "@material/drawer";
import {MDCRipple} from '@material/ripple';

class RegularAppBar extends React.Component {
  constructor(props){
    super(props);
    if(this.props.disableEditable){
      this.buttons = []
    }else{
      this.buttons = [
        <TopAppBarButton key="toggle" label='edit' icon='edit' onclick={this.toggle.bind(this)}/>
      ]
    }
    
  }
  toggle(){
    this.props.toggler();
  }
  componentDidMount(){
    // eslint-disable-next-line
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // eslint-disable-next-line
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    try{
      topAppBar.setScrollTarget(document.getElementById('main-content'));
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
    }catch(Exception){
      console.log(Exception)
    }
    
    try{
      const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-top-app-bar__navigation-icon'));
      iconButtonRipple.unbounded = true;
    }catch(e){
      console.log(e);
    }
    
  }

  render(){
    if(this.props.disableDrawer){
      return(
        <header className="mdc-top-app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                
              <span className="mdc-top-app-bar__title">{this.props.title}</span>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
              {this.buttons}
            </section>
          </div>
        </header>
      );
    }else{
      return(
        <header className="mdc-top-app-bar">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                 <button className="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
              <span className="mdc-top-app-bar__title">{this.props.title}</span>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
              {this.buttons}
            </section>
          </div>
        </header>
      );
    }
    
  }
}
export default RegularAppBar;
