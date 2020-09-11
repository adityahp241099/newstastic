import React from 'react';
import DefaultCard from '../widgets/cards/DefaultCard';
import Context from '../Context.js';
import {Link} from 'react-router-dom';
import copyTextToClipboard from '../Clipboard.js';
import SnackbarContainer from '../widgets/Snackbar.js';
import Button from '../widgets/Button.js';
import DefaultChip from '../widgets/DefaultChip.js';
import marked from 'marked';
class News{
  constructor(content){
    this.id=content.id;
    this.title = content.title;
    this.author = content.author;
    this.category = content.category;
    this.preview = content.preview;
    this.body = content.body;
    this.posted_on = content.posted_on;
    this.link = "article/"+this.id;
    this.url = Context.getContext().host+"/"+this.link+"/";
  }
  copyFunction(){
    copyTextToClipboard(this.url)
    SnackbarContainer.getContainer().addSnackbar("Copied to clipboard",[],1000);
  }
  toCard(){
    return (<DefaultCard title={this.title} subtitle={"-"+this.author} body={this.preview} overline={new Date(this.posted_on).toString()}>
      <div className="mdc-card__primary-action">
      </div>
      <div className="mdc-card__actions">
        <Link key={this.link} style={{'textDecoration':'none'}} to={this.link}>
          <Button label="View More"/>
        </Link>

        <div className="mdc-card__action-icons">
        <div className="mdc-card__action-buttons">
          <DefaultChip text={this.category.label} icon={this.category.icon}/>
        </div>
          <button onClick={()=>{this.copyFunction()}} className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>

        </div>
      </div>
    </DefaultCard>);
  }
  toPost(){

    var markdownText =  marked(this.body, {sanitize: true});
    return (<div style={{"padding":"8px"}}>
      <h1 className="mdc-typography--headline4">{this.title}</h1>
      <DefaultChip text={this.category.label} icon={this.category.icon}/>
      <button style={{'float':'right'}} onClick={()=>{this.copyFunction()}} className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
      <hr/>
      <h4 className="mdc-typography--subtitle">-<i>{this.author}</i></h4>
      <div className="mdc-typography--body" style={{"textAlign":"justify"}} dangerouslySetInnerHTML={{__html:markdownText}}/>
    </div>
    )
  };
}export default News;
