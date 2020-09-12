import React from 'react';
import marked from 'marked';

function About(props){
  const text =  `
# Newstastic (Beta)

## Creators

- Aditya Panchal
- Aditya Vedpathak
- Viraj Thakkar

## Created using

- python3
  - django
  - DRF (djangorestframework)
  - django-cors-headers
- JavaScript
  - react
  - react-router-dom
  - marked
  - MDC (Material Design Components)
- SQLite3
  `;
  const markdownText = marked(text, {sanitize: true});
  return (

      <div className="mdc-typography--body" style={{"textAlign":"justify","margin":"4px"}} dangerouslySetInnerHTML={{__html:markdownText}}/>

  );
}export default About;
