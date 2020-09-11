import React from 'react';
import {MDCTextField} from '@material/textfield';
class TextInput extends React.Component{
    constructor(props){
        super(props);
        this.type = 'text';
        if(props.type){
            this.type=props.type;
        }
    }
    componentDidMount(){
        try{
            // eslint-disable-next-line 
            const textField = new MDCTextField(document.querySelector('.mdc-text-field'));
        }catch(e){
            console.log(e);
        }

    }
    render(){
        return(
            <label style={{'marginTop':'0px','marginBottom':'10px'}} className="mdc-text-field mdc-text-field--filled mdc-text-field--fullwidth">
            <span className="mdc-text-field__ripple"></span>
            <input id={this.props.id} className="mdc-text-field__input"
                   type={this.type}
                   placeholder={this.props.label}
                   aria-label={this.props.label}/>
            <span className="mdc-line-ripple"></span>
            </label>
        );
    }
}
export default TextInput;
