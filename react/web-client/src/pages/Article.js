import React from 'react';
import CircularProgress from '../widgets/CircularProgress.js';
import Context from '../Context.js';
import DefaultChip from '../widgets/DefaultChip.js';
class Article extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      content : null
    }
  }
  componentDidMount(){
    fetch(Context.getContext().apiHost+"/article/"+this.props.id+"/").then(
      (resp)=>{
        resp.text().then(
          (text)=>{
            var data = JSON.parse(text);
            this.setState({'content':data});
          }
        );
      }
    ).catch((e)=>{
      console.log(e);
      this.setState({"content":false});
      }
    );
  }
  render(){
    if(this.state.content === null){
      return (
        <div style={{"display":"flex","flexWrap":"wrap"}}>
          <div style={{"display":'flex',"width":'100%',"alignContent":"center"}}>
            <CircularProgress/><br/>
          </div>
          <div style={{"display":'block',"width":'100%',"alignContent":"center","textAlign":"center"}}>
          Loading Article...
          </div>
        </div>
      );
    }else if (this.state.content === false){
      return(
        <div style={{"display":"flex","flexWrap":"wrap"}}>
          <div style={{"display":'block',"width":'100%',"alignContent":"center","textAlign":"center"}}>
            Error Loading Article!
          </div>
        </div>
      );
    }else{
      var content = this.state.content;
      return (
        <div>
          <h1 className="mdc-typography--headline4">{content.title}</h1>
          <DefaultChip text={content.category.label} icon={content.category.icon}/>
          <hr/>
          <h4 className="mdc-typography--subtitle">-<i>{content.author}</i></h4>
          <span className="mdc-typography--body">
            {content.body}
          </span>
        </div>
      );
    }

  }
}
export default Article;
