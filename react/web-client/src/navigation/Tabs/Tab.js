import React from 'react';
import {MDCTab} from '@material/tab';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.pages = this.props.pages;
        this.props.parent.tabs = this;
        this.state={
            'active': this.props.active
        }

    }
    refreshPage(nextPage){
        this.props.refreshPage(nextPage);
        //this.setState({'active':nextPage});
    }
    getPages(){
        var out = [];
        for(var page in this.pages){
            if(this.state.active.loaderKey === this.pages[page].loaderKey){
                
                out.push(
                    <Tab refreshPage={this.refreshPage.bind(this)} key={page} page={this.pages[page]} active={true} label={this.pages[page].title} tabIndex={page} />
                )
            }else{
                out.push(
                    <Tab refreshPage={this.refreshPage.bind(this)} key={page} page={this.pages[page]} active={false} label={this.pages[page].title} tabIndex={page} />
                )
            }

        }

        return out;
    }
    setActive(nextPage){
        this.setState({'active':nextPage});
    }
    render(){
        this.pages = this.props.pages;
        this.props.parent.tabs = this;

        return (
            <div className='mdc-tab-bar' role='tablist'>
            <div className='mdc-tab-scroller'>
                <div className='mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll'>
                    <div className='mdc-tab-scroller__scroll-content'>
                        {this.getPages()}
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


class Tab extends React.Component{
    constructor(props){
        super(props);
        this.active = this.props.active;
    }

    componentDidMount(){
        var tab = new MDCTab(document.querySelector('#mdc-tab-'+this.props.page.loaderKey));
        if(this.active){
            tab.activate();
        };
    }

    render(){

        if(this.props.active){
            return(
            <button id={'mdc-tab-'+this.props.page.loaderKey} onClick={()=>{this.props.refreshPage(this.props.page)}} className="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabIndex={this.props.tabIndex}>
                <span className="mdc-tab__content">

                    <span className="mdc-tab__text-label">{this.props.label}</span>
                </span>
                <span className="mdc-tab-indicator mdc-tab-indicator--active">
                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                </span>
                <span className="mdc-tab__ripple"></span>
            </button>
            );
        }else{
            return (
                <button id={'mdc-tab-'+this.props.page.loaderKey} onClick={()=>{this.props.refreshPage(this.props.page)}} className="mdc-tab" role="tab" aria-selected="false" tabIndex={this.props.tabIndex}>
                                <span className="mdc-tab__content">
                                    <span className="mdc-tab__text-label">{this.props.label}</span>
                                </span>
                                <span className="mdc-tab-indicator">
                                    <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                                </span>
                                <span className="mdc-tab__ripple"></span>
                </button>
            );
        }

    }
}

export default Tabs;
