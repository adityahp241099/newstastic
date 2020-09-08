import TopAppBarButton from '../../widgets/TopAppBarMenuIcons.js';

import React from 'react';
import {MDCTopAppBar} from '@material/top-app-bar';

class ContextualAppBar extends React.Component {
  constructor(props){
    super(props);
    this.buttons = [];
  }
  componentDidMount(){
    // eslint-disable-next-line
    const topAppBarElement = document.querySelector('.mdc-top-app-bar');
    // eslint-disable-next-line
    const topAppBar = new MDCTopAppBar(topAppBarElement);
  }
  toggle(){
    this.props.toggler();
  }
  render(){
    return(
      <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <TopAppBarButton key="toggle" label='close' icon='close' onclick={this.toggle.bind(this)}/>
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
export default ContextualAppBar;
