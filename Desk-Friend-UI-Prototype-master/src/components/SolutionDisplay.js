import React from 'react';

// If you would like to list out the individual properties, you may, but put them in {} like shown below
//const SolutionDisplay = ({setAdminState, issue, solution}) => {}
const SolutionDisplay = (props) => {
    return(
        <div className='App'>
            <h1>Desk Friend</h1>
            <h2 id={props.id}>{props.issue}</h2>
            <p className='bordered mediumWidth centered'>{props.solution}</p>

            <div className='bordered mediumWidth centered'>
                <p>{props.prompt}</p>
                {
                    props.buttons.map(button => {
                        return (
                        <button onClick={() => {button.executeWhenClicked()}} key={button.id}>{button.name}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SolutionDisplay