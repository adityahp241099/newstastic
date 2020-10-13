import React from 'react';
import DefaultChip from './DefaultChip.js';
class TextToVoice extends React.Component{
    constructor(props){
        super(props);
        this.synth = window.speechSynthesis;
        this.state ={
            playing:false
        }
        TTVObervable.register(this.stop.bind(this));
    }
    play(){
        TTVObervable.cancel(
            ()=>{
                this.setState({playing:true},
                    ()=>{
                        this.synth.cancel();
                        var utterThis = new SpeechSynthesisUtterance(this.props.text);
                        utterThis.voice = this.synth.getVoices().filter((item)=>"UK English" in item)[0];
                        utterThis.onend = this.stop.bind(this);
                        console.log(utterThis);
                        this.synth.speak(utterThis);
                    }    
                );
            }
        );
    }
    stop(){
        this.synth.cancel();
        this.setState({playing:false})
    }
    render(){
        if(this.state.playing){
            return (
                <>
                    <button onClick={this.stop.bind(this)} className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="stop">stop</button>
                </>
            )   
        }else{
            return (
                <>
                    <button onClick={this.play.bind(this)} className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="play_arrow">play_arrow</button>
                </>
            )
        }
    }
}export default TextToVoice;


class TTVObervable{
    static observerCallbacks = [];
    static register(callback){
        if(typeof callback === "function"){
            this.observerCallbacks.push(callback);
        }else{
            throw new Error("Must provide a callback function");
        }
        
    }
    static cancel(callback){
        for(let cb of this.observerCallbacks){
            try {
                cb();
            } catch (error) {
                console.error(error)
            }
        }        
        if(typeof callback === "function"){
            callback();
        }else{
            throw new Error("Must provide a callback function");
        }
    }
}
/*


var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');


function populateVoiceList() {
  voices = synth.getVoices();

  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
}

*/