import React from 'react';
import CircularProgress from '../widgets/CircularProgress.js';
import Context from '../Context.js';
import News from '../newstastic/News.js';
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

      return new News(this.state.content).toPost();
    }

  }
}
export default Article;
