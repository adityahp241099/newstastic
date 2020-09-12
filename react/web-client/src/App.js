import React from 'react';
import TopAppBar from './navigation/TopAppBar/TopAppBar.js';
import Drawer from './navigation/Drawer/Drawer.js';
import SelectedPage from './pages/SelectedPage.js';
import Context from './Context.js';
import LoginPage from './pages/LoginPage.js';
import Article from './pages/Article.js';
import {BrowserRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import SnackbarContainer from './widgets/Snackbar.js';
import CategoryPage from './pages/Category.js';
class App extends React.Component {
  constructor(props){
    super(props);
    this.selectedpage = null;
    this.state ={
      'loggedIn':Context.getContext().isLoggedIn
    }
    this.topappbar = null;
  }

  refreshPage(){
    if(this.selectedpage){
      this.selectedpage.setState({'PageInfo':Context.getContext().getNavFromBreadCrumbs()});
    }
  }

  render(){

    if(this.state.loggedIn){
      return (
        <div className="App">
          <Router>
          <Drawer refreshPage={this.refreshPage.bind(this)} parent={this}>
              <div className="mdc-drawer__header">
                <h3 className="mdc-drawer__title">Newstastic</h3>
                <h6 className="mdc-drawer__subtitle">Beta</h6>
              </div>
              <hr className="mdc-list-divider"/>
          </Drawer>
          <div className="mdc-drawer-app-content">
            <TopAppBar parent={this} disableEditable={true}/>
            <main className="main-content limited-container" id="main-content">
              <div className="mdc-top-app-bar--fixed-adjust">
                <Switch>
                <Route exact={true} path='/' component={()=>{return(<SelectedPage topappbar={this.topappbar} parent={this} ></SelectedPage>)}}/>
                <Route exact={true} path='/article/:id' component={
                    ({match})=>{
                    return(<Article id={match.params.id}/>);
                  }
                }/>
                <Route exact={true} path='/category/:id' component ={
                  ({match})=>{
                    return (<CategoryPage id={match.params.id}/>)
                  }
                }/>
                <Redirect to={"/"}/>
                </Switch>
              </div>
            </main>
          </div>
          </Router>
          {SnackbarContainer.getContainer().renderable()}
        </div>
      );
    }else{
      var ctx = Context.getContext();
      ctx.title = 'Login'
      return (
        <div className="App">
          <TopAppBar parent={this} disableDrawer={true} disableEditable={true}/>
          <main className="main-content limited-container" id="main-content">
              <div className="mdc-top-app-bar--fixed-adjust">
          <LoginPage/>
          </div>
          </main>
        </div>
      );
    }
  }
}

export default App;
