import React from 'react';
import LinearProgress from '../widgets/LinearProgress.js';
class StandardGames extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            'fetched':false
        }
    }
    componentDidMount(){
        console.log(this.props.page.apiTarget);
        
    }
    render(){
        return(
            <LinearProgress/>
        )
    }
}
export default StandardGames;