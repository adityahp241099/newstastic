class Page{
    constructor(title,loaderKey,apiTarget){
        this.title = title;
        this.loaderKey = loaderKey;
        this.apiTarget = apiTarget;
    }
}

class Context{
    static instance = null;
    appname = 'Newstastic';
    isLoggedIn = true;
    apiHost = 'http://192.168.0.119:8000'
    static getContext(){
        if(Context.instance === null){
            Context.instance = new Context();
        }
        return Context.instance;
    }
    constructor(){
        this.title = this.appname;
        this.breadcrumbs = [];

        this.apimapper = {
         'news':[new Page('Today\'s Newspaper','newspaper',null),new Page('Live','live',null) ],
         'settings':new Page('Settings','settings',null)
        }

    }
    getNavFromBreadCrumbs(){
       var options = this.apimapper[this.breadcrumbs[0]];
       if(options){
           return options
       }else{
           this.breadcrumbs = ['news','newspaper']
           return this.getNavFromBreadCrumbs()
       }
    }
}
export default Context;
