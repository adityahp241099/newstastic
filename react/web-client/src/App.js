import React from 'react';
import TopAppBar from './navigation/TopAppBar/TopAppBar.js';
import Drawer from './navigation/Drawer/Drawer.js';
import SelectedPage from './pages/SelectedPage.js';
import Context from './Context.js';
import LoginPage from './pages/LoginPage.js';
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
          <Drawer refreshPage={this.refreshPage.bind(this)} />
          <div className="mdc-drawer-app-content">
            <TopAppBar parent={this} />
            <main className="main-content limited-container" id="main-content">
              <div className="mdc-top-app-bar--fixed-adjust">
                <SelectedPage topappbar={this.topappbar} parent={this} ></SelectedPage>
              </div>
            </main>
          </div>
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
