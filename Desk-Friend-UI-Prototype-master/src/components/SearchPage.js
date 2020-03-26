import React from 'react';

class SearchPage extends React.Component {
  state = {
    pageGreeting: this.props.initGreeting,
    searchFieldValue: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
    console.log('SearchPage : form submitted')
    this.setState({
      pageGreeting: 'You have searched: ' + this.state.searchFieldValue
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
        <p>{this.state.pageGreeting}</p>
        
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.placeholder} value={this.state.searchFieldValue} onChange={this.handleChange} />
        </form>

        {
          this.props.results.map(result => {
            return (
              <button onClick={() => {result.executeWhenClicked()}} key={result.id}>{result.issue}</button>
            )
          })
        }
      </div>
    );
  }
}

export default SearchPage;
