import React from 'react';

import RegularAppBar from './RegularAppBar.js';
import ContextualAppBar from './ContextualAppBar.js';
import Context from '../../Context.js';
class TopAppBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'mode':'regular'
    }
    this.props.parent.topappbar = this;
  }
  toggle(){
    if(this.state.mode==='regular'){
      this.setState({'mode':'contextual'});
    }else{
      this.setState({'mode':'regular'});
    }
  }
  render(){

      if(this.state.mode==='regular'){
        return(<RegularAppBar disableEditable={this.props.disableEditable} disableDrawer={this.props.disableDrawer} title={Context.getContext().title} toggler={this.toggle.bind(this)}/>);
      }else{
        return(<ContextualAppBar title='Edit' toggler={this.toggle.bind(this)} />);
      }

  }
}
export default TopAppBar;
