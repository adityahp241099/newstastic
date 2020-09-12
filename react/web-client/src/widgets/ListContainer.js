import React from 'react';
import {MDCList} from '@material/list';
class ListContainer extends React.Component{
    componentDidMount(){
        // eslint-disable-next-line
        const list = new MDCList(document.querySelector('.mdc-list'));
    }
    render(){

       return (
           <ul className='mdc-list'>
               {this.props.children}
           </ul>
       );
    }
} export default ListContainer;
