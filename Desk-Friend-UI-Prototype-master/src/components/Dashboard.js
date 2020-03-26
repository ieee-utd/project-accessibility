import React from 'react';

// buttons : array of {display name, unique id, function to execute when pressed}
//const Dashboard = ({key, id, setAdminState, heading2, pageGreeting, buttons}) => {
const Dashboard = (props) => {
    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2 id={props.id}>{props.heading2}</h2>
        <p>{props.pageGreeting}</p>
        
        {
          props.buttons.map(button => {
            return (
              <button onClick={() => {button.executeWhenClicked()}} key={button.id}>{button.name}</button>
            )
          })
        }

      </div>
    )
}

export default Dashboard;
