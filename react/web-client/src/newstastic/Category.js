import React from 'react';
import DefaultChip from '../widgets/DefaultChip.js';
import ListItem from '../widgets/ListItem.js';
import Context from '../Context.js';
import {Link} from 'react-router-dom';
class Category{
    constructor(content) {
        this.id= content.id;
        this.label = content.label;
        this.icon = content.icon;
        this.link = "/category/"+this.id;
        this.url = Context.getContext().host+this.link+"/";
    }
    toChip(){
        return (<Link key={this.link} style={{'textDecoration':'none'}} to={this.link}> <DefaultChip text={this.label} icon={this.icon}/> </Link>);
    }
    toCard(){
        return (
          <Link key={this.link} style={{'textDecoration':'none'}} to={this.link}>
          <ListItem>
            <span className="mdc-list-item__graphic material-icons" aria-hidden="true">
              {this.icon}
            </span>
            <span className="mdc-list-item__text">
              {this.label}
            </span>
          </ListItem>
          </Link>
        );
    }
}export default Category;
