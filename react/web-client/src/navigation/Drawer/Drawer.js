import React from 'react';
import {MDCDrawer} from "@material/drawer";
import DrawerOptions from '../../widgets/DrawerOptions.js';
import Context from '../../Context.js';
import {Link} from 'react-router-dom';
class Drawer extends React.Component {
  constructor(props){
    super(props);
    this.context = Context.getContext();
    this.children = [

    ]
  }
  refreshPage(){

    this.props.refreshPage();
  }
  setActive(nav){
    for(var child in this.props.parent.children){
        this.props.parent.children[child].state.activated=false;
        if(this.props.parent.children[child].state.activated===true){
            this.props.parent.children[child].setState({'activated':false});
        }
    }
    nav.setState({'activated':true});
  }

  componentDidMount(){
    // eslint-disable-next-line
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    const listEl = document.querySelector('.mdc-drawer .mdc-list');
    const mainContentEl = document.querySelector('.main-content');

    listEl.addEventListener('click', (event) => {
      var a = mainContentEl.querySelector('input, button');
      if(a){
        a.focus();
      }
    });

    document.body.addEventListener('MDCDrawer:closed', () => {
      var a = mainContentEl.querySelector('input, button')
      if(a){
        a.focus();
      }
    });
    // this.setActive(this.children[0]);
  }



  render(){
    return(
      <aside className="mdc-drawer mdc-drawer--dismissible">
        {this.props.children}
        <div className="mdc-drawer__content">
          <nav className="mdc-list">
            <Link style={{'textDecoration':'none'}} to={"/"}>
            <DrawerOptions active={true} parent={this} key='nav_news'  breadcrumbs={['news','newspaper']} label='News' icon='public'/>
            </Link>
            <Link style={{'textDecoration':'none'}} to={"/"}>
              <DrawerOptions parent={this} key='nav_category'  breadcrumbs={['categories']} label='Categories' icon='category'/>
            </Link>
            <Link style={{'textDecoration':'none'}} to={"/"}>
              <DrawerOptions parent={this} key='nav_about'  breadcrumbs={['about']} label='About' icon='info'/>
            </Link>
          </nav>

        </div>
       </aside>
    );
  }
}
export default Drawer;
