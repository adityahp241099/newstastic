import React from 'react';
import Context from '../Context.js';

import Tabs from '../navigation/Tabs/Tab.js';

import ErrorPage from './ErrorPage.js';
import TodaysNewspaper from './TodaysNewspaper.js';
import LiveNews from './LiveNews.js';
import CategoriesPage from './Categories.js';
import About from './About.js';

class SelectedPage extends React.Component{
    constructor(props){
        super(props);
        this.props.parent.selectedpage = this;
        this.state = {
            'PageInfo': Context.getContext().getNavFromBreadCrumbs()
        }

        this.content = null;
    }
    refreshPage(nextPage){
       this.currentPage = nextPage;
       this.tabs.setActive(nextPage);
       this.getPage()
    }
    getPage(){
        if(this.currentPage){
            this.content.setState({'page':this.currentPage});
        }else{
            this.content.setState({'page':this.state.PageInfo});
        }
    }
    render(){
        this.currentPage = null;
        if(this.state.PageInfo instanceof Array){

            this.currentPage = this.state.PageInfo[0];
        }
        this.tabs = null;
        var page = null;
        if(this.currentPage){
            page = this.currentPage;
        }else{
            page = this.state.PageInfo;
        }
        if(this.content){
          this.content.setState({"page":page});
        }
        if(this.state.PageInfo instanceof Array){

            return (
                <div>
                    <Tabs refreshPage={this.refreshPage.bind(this)} parent={this} pages={this.state.PageInfo} active={this.currentPage}/>
                    <Content parent={this} page={page}/>
                </div>
            );
        }else{

            return (
                <div>
                    <Content parent={this} page={page}/>
                </div>

            );
        }

    }
}



class Content extends React.Component{
    constructor(props){
        super(props);
        this.props.parent.content = this;
        this.state = {
            'page':this.props.page
        }
        this.mapper = {
            'error':ErrorPage,
            'newspaper':TodaysNewspaper,
            'live':LiveNews,
            'categories':CategoriesPage,
            'about':About
        }
    }
    render(){
        this.props.parent.content = this;
        if(this.state.page){
            if(this.state.page.loaderKey in this.mapper){
                var view = React.createElement(this.mapper[this.state.page.loaderKey],{'page':this.state.page});
                return (<div>{view}</div>);
            }else{
                return (<ErrorPage/>);
            }

        }else{
            return (<ErrorPage/>);
        }

    }

}



export default SelectedPage;
