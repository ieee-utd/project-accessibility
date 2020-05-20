import React from 'react';

class EditIssue extends React.Component {
    state = {
        nameFieldValue: "",
        tagFieldValue: "",
        solutionFieldValues: [], 
        machineFieldValues: []
    }

    handleNameChange = (e) => { this.setState({nameFieldValue: e.target.value}); }
    handleTagChange = (e) => { this.setState({tagFieldValue: e.target.value}); }
    handleSolutionChange = (e) => {
        let vv = e.target.value
        this.setState(state => {
            return { solutionFieldValues: state.solutionFieldValues.concat(vv) };
        });
    };
    handleMachineChange = (e) => { this.setState({solutionFieldValues: [e.target.value]}); };
   
      
    handleSubmit = (e) => {
        e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
        console.log('EditIssue : form submitted')
    }

    render() {
        return(
            <div className='App'>
                <h1>Desk Friend</h1>
                <h2 id={this.props.id}>{this.props.heading2}</h2>
                <p>{this.props.paragraph}</p>

                <form className="issueForm" id="submitAttribute" onSubmit={this.handleSubmit}>
                    <label for="newIssue">Issue: </label>
                    <input type="textSolidPlaceholder" id="newIssue" name="newIssue" placeholder={this.props.issue.name} value={this.state.nameFieldValue} onChange={this.handleNameChange} />
                </form>

                {
                    this.props.issue.tags.map(tag => {
                        return (
                            <form className="issueForm" id="submitAttribute" onSubmit={this.handleSubmit}>
                                <label for="newTag">Tag: </label>
                                <input type="textSolidPlaceholder" id="newTag" name="newTag" placeholder={tag} value={this.state.tagFieldValue} onChange={this.handleTagChange} />
                            </form>
                        )
                    })
                }

                {
                    this.props.issue.solutions.map((soln, index) => {
                        return (
                            <div>
                                <form className="solnForm" id="submitAttribute" onSubmit={this.handleSubmit}>
                                    <label for="newSoln">Solution: </label>
                                    <input type="textSolidPlaceholder" id="newSoln" name="newSoln" placeholder={soln.soln} value={this.state.solutionFieldValues[index]} onChange={this.handleSolutionChange} />
                                </form>

                                <form className="machineForm" id="submitAttribute" onSubmit={this.handleSubmit}>
                                    <label for="newMachine">Machine: </label>
                                    <input type="textSolidPlaceholder" id="newMachine" name="newMachine" placeholder={soln.mach} value={this.state.machineFieldValues[index]} onChange={this.handleMachineChange} />
                                </form>
                            </div>
                        )
                    })
                }

                <div id="buttonDiv" className='mediumWidth centered'>
                    <p id="centered">{this.props.navMsg}</p>
                    {
                        this.props.navButtons.map(button => {
                        return (
                            <button className="smallButton" onClick={() => {button.executeWhenClicked()}} key={button.id}>{button.name}</button>
                        )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default EditIssue