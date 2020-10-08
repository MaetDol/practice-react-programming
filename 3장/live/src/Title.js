import React from 'react';


function Title({ title }) {
  console.log('Rendering Title');
  return <p>{ title }</p>
}

export default React.memo( Title );