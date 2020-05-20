import React from 'react';

const Dashboard = (props) => {
    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2 id={props.id}>{props.heading2}</h2>
        <p>{props.paragraph}</p>
        
        {
          props.buttons.map(button => {
            return (
              <button onClick={() => {button.executeWhenClicked()}} key={button.id}>{button.name}</button>
            )
          })
        }

        <div id="buttonDiv" className='mediumWidth centered'>
          <p id="centered">{props.navMsg}</p>
          {
            props.navButtons.map(button => {
              return (
                <button className="smallButton" onClick={() => {button.executeWhenClicked()}} key={button.id}>{button.name}</button>
              )
            })
          }
        </div>
      </div>
    )
}

export default Dashboard;
