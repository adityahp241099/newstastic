import React from 'react';
import {MDCRipple} from '@material/ripple';
import {MDCList} from '@material/list';

class ListItem extends React.Component{
    componentDidMount() {
      try{
        // eslint-disable-next-line
        const list = new MDCList(document.querySelector('.mdc-list'));
        // eslint-disable-next-line
        const listItemRipples = list.listElements.map((listItemEl) => new MDCRipple(listItemEl));
      }catch(e){

      }
    }

    render(){
      return(

          <li className="mdc-list-item" tabIndex="0">
                <span className="mdc-list-item__ripple"></span>

                    {this.props.children}

          </li>

      );
    }

}export default ListItem;
