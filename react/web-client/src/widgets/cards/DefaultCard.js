import React from 'react';
class DefaultCard extends React.Component{
  render(){
    return(
    <div className="mdc-card" style={{"maxHeight":"480px","margin":"8px","padding":"8px"}}>
      <h3 className="mdc-typography mdc-typography--overline" style={{"margin":"1px","padding":"1px"}}>{this.props.overline}</h3>
      <div className="mdc-typography--headline6">{this.props.title}</div>
      <div className="mdc-typography--subtitle2"><i>{this.props.subtitle}</i></div>
      <div className="mdc-typography--body1">{this.props.body}</div>


      {this.props.children}
    </div>
  );
  }
}
export default DefaultCard;
