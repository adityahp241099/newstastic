import React from 'react';
import LinearProgress from '../widgets/LinearProgress.js';
import Context from '../Context.js';
import DefaultCard from '../widgets/cards/DefaultCard.js';
import {Link} from 'react-router-dom';
import Button from '../widgets/Button.js';
import DefaultChip from '../widgets/DefaultChip.js';
class TodaysNewspaper extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      "content":null
    } ;
  }
  loadData(data){
    data.text().then((text)=>{
      this.setState({'content':JSON.parse(text)});
    });
  }
  componentDidMount(){
    console.log("Mounted");
    fetch(Context.getContext().apiHost+'/article/category/').then(
      (data)=>{this.loadData(data)}
    ).catch((error)=>{
        this.setState({'content' : false});
      }
    );
  }
  loadArticles(){
    var out = [];
    var content = this.state.content
    for(var i = 0; i< content.length;i++){
      out.push(<h1 key={"ContentHeader"+i} className="mdc-typography--headline4 mdc-theme--primary">  {content[i].label}</h1>);
      out.push(<hr key={"ContentRuler"+i} className="mdc-theme--primary-bg" />);
      for(var j=0;j<content[i].articles.length;j++){
          var card = content[i].articles[j];

          out.push(<DefaultCard key={"articleCard/"+card.id} title={card.title} subtitle={"-"+card.author} body={card.body} >
          <div className="mdc-card__primary-action">


          </div>
          <div className="mdc-card__actions">
            <Link key={"article/"+card.id} style={{'textDecoration':'none'}} to={"article/"+card.id}>
              <Button label="View More"/>
            </Link>

            <div className="mdc-card__action-icons">
            <div className="mdc-card__action-buttons">
              <DefaultChip text={card.category.label} icon={card.category.icon}/>
            </div>
              <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
              <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
            </div>
          </div>
          </DefaultCard>
          );
      }

    }
    return out;
  }
  render(){
    if(this.state.content === null){
      return (
        <div>
            <LinearProgress/>
            <br/>
            <span style={{'width':'100%','textAlign':'center','alignContent':'center','display':'block'}}>
              Fetching Today's Newspaper
            </span>
        </div>
      );
    }else if (this.state.content === false){
      return (<span>Error fetching Newspaper</span>)
    }else{
        return(
          <span>
            {this.loadArticles()}
          </span>
        );
    }
  }
}
export default TodaysNewspaper;
