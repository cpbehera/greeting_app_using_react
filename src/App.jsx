import React from 'react';

function App(){
    let curDate = new Date();
    // console.log(curDate);
    curDate = curDate.getHours();
    // console.log(curDate);
    let greeting = '';
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    } else if (curDate > 12 && curDate < 20) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    } else {
        greeting = 'Good Night';
        cssStyle.color = 'black';
    }
    return (
        <h1 style={{fontSize:'35px',padding:'20px',background:'#1dd1a1',borderRadius:'30px'}}>Hello Sir,<span style={cssStyle}> {greeting}</span></h1>
    )
}

export default App;