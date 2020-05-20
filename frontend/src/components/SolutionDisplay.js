import React from 'react';

// If you would like to list out the individual properties, you may, but put them in {} like shown below
//const SolutionDisplay = ({setAdminState, issue, solution}) => {}
const SolutionDisplay = (props) => {
    return(
        <div className='App'>
            <h1>Desk Friend</h1>
            <h2 id={props.id}>{props.issue}</h2>
            
            <p className='bordered mediumWidth centered'>{props.solution}</p>

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

export default SolutionDisplay