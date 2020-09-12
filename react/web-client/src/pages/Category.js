import React from 'react';
import LinearProgress from '../widgets/LinearProgress.js';
import Context from '../Context.js';
import News from '../newstastic/News.js';
class CategoryPage extends React.Component{
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

    fetch(Context.getContext().apiHost+'/article/category/'+this.props.id+'/').then(
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

      out.push(<h1 key={"ContentHeader"} className="mdc-typography--headline4 mdc-theme--primary">  {content.label}</h1>);
      out.push(<hr key={"ContentRuler"} className="mdc-theme--primary-bg" />);
      if(content.articles.length<1){
        out.push(<div> This Section is empty.</div>);
      }
      for(var j=0;j<content.articles.length;j++){
          out.push(new News(content.articles[j]).toCard())
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
export default CategoryPage;
