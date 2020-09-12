import React from 'react';
import LinearProgress from '../widgets/LinearProgress.js';
import Context from '../Context.js';
import Category from '../newstastic/Category.js';
import ListContainer from "../widgets/ListContainer.js";
class CategoriesPage extends React.Component{
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

      fetch(Context.getContext().apiHost+'/article/categories/').then(//// TODO: Change API
        (data)=>{this.loadData(data)}
      ).catch((error)=>{
          console.log(error);
          this.setState({'content' : false});
        }
      );
    }
    loadCategories(){
      let out = [];
      let content = this.state.content
      if(content.length<1){
        out.push(<div>No Categories to display</div>);
      }
      for(let i = 0; i< content.length;i++){
            out.push(new Category(content[i]).toCard()) ;
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
                Fetching Categories List
              </span>
          </div>
        );
      }else if (this.state.content === false){
        return (<span>Error fetching Categories List</span>)
      }else{
          return(
            <ListContainer>
                {this.loadCategories()}
            </ListContainer>
          );
      }
    }




}export default CategoriesPage;
