import React from 'react';
import "../../../styles/App.css"
import useScript from '../../../hooks/useScript';

var htmlContent = require('./index.html');

const Flipbook = () => {
useScript('mobile/javascript/jquery-1.9.1.min.js');
useScript('mobile/javascript/config.js');
useScript('send_visit_info.js');
useScript('mobile/javascript/search_config.js');
useScript('mobile/javascript/LoadingJS.js');
useScript('mobile/javascript/main.js');
  return (
      <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
  );
}

export default Flipbook;
