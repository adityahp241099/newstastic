import React from 'react';
import LinearProgress from '../widgets/LinearProgress.js';
import Context from '../Context.js';
import News from '../newstastic/News.js';

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
    if(content.length<1){
      out.push(<div>No Posts to display</div>);

    }
    for(var i = 0; i< content.length;i++){
      out.push(<h1 key={"ContentHeader"+i} className="mdc-typography--headline4 mdc-theme--primary">  {content[i].label}</h1>);
      out.push(<hr key={"ContentRuler"+i} className="mdc-theme--primary-bg" />);
      if(content[i].paperArticles.length<1){
        out.push(<div> This Section is empty.</div>);
      }
      for(var j=0;j<content[i].paperArticles.length;j++){
          out.push(new News(content[i].paperArticles[j]).toCard())
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
