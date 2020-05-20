import React from 'react';

class SearchPage extends React.Component {
  state = {
    paragraph: this.props.paragraph,
    searchFieldValue: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
    console.log('SearchPage : form submitted')
    this.setState({
      paragraph: 'You have searched: ' + this.state.searchFieldValue
    })
  }
  handleChange = (e) => {
    this.setState({searchFieldValue: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2 id={this.props.id}>{this.props.heading2}</h2>
        <p>{this.state.paragraph}</p>
        
        <form id="submitAttribute" onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.placeholder} value={this.state.searchFieldValue} onChange={this.handleChange} />
        </form>

        {
          this.props.results.map(result => {
            return (
              <button onClick={() => {result.executeWhenClicked()}} key={result.id}>{result.issue}</button>
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
    );
  }
}

export default SearchPage;
