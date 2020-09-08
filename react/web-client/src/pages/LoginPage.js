import React from 'react';
import Button from '../widgets/Button.js';
import TextInput from '../widgets/TextInput.js';
import CircularProgress from '../widgets/CircularProgress.js';
class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            'form':'input'//Input -> Sending -> Waiting -> Recieved or Input again
        }
    }
    submitHandler(){
        this.setState({'form':'sending'},this.sendRequest);
    }
    sendRequest(){
        var username = document.querySelector('#username').value
        var password = document.querySelector('#password').value

        var cookieValue = null;
        var name = 'csrftoken';
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].replace(/^\s+|\s+$/g, "");
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        var csrfmiddlewaretoken = cookieValue;
        console.log(username,password,csrfmiddlewaretoken);

    }
    render(){
        return (
            <div method="POST" style={{'display':'flex','flexFlow':'column'}}>
                <CircularProgress />
                <br/><br/>
                <TextInput id={'username'} label='Username'/>
                <br/><br/>
                <TextInput id={'password'} type='password' label='Password'/>
                <br/>
                <br/>
                <Button onclick={()=>{this.submitHandler()}} label='Login/Sign Up'/>


            </div>

        );
    }
}
export default LoginPage;
