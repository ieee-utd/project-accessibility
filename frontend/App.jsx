import React from "react";
import Table from "./Table";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonClicked: "",
      issue: [] ,
      tags: [],
      machineTags: {}
    };

    this.handleButtonClicked = this.handleButtonClicked.bind(this);
    this.addIssue = this.addIssue.bind(this);
    this.addTags = this.addTags.bind(this);
    this.addMachineTags = this.addMachineTags.bind(this);
  }

  handleButtonClicked(buttonName) {
    this.setState({
      buttonClicked: buttonName
    });
  }

  /*Check out this addAssignment method*/
  addIssue(issueName) {
    this.setState({
      issue: this.state.issue.concat(issueName)
    });
  }

  /*Write an addStudent method here*/
  addTags(tagsName) {

    this.setState({
      tags: this.state.tags.concat(tagsName)
    }); 
  }
  addMachineTags(issue, tags, score) {
    let machineTags = this.state.machineTags;
    let issueName = issue;
    let tagsName = tags;
    if (!(issue in machineTags)) {
      machineTags[issueName] = {};
    }
    machineTags[issueName][tagsName] = score;
    this.setState({ machineTags: machineTags });
  }

  render() {
    let tabChoice = <div />;

    
    if (this.state.buttonClicked === "issue") {
      tabChoice = (
        <List
          placeholder="Add issue..."
          currList={this.state.issue}
          addFunction={this.addIssue}
          title="issue"
        />
      );
    }


    if (this.state.buttonClicked === "tags") {
      tabChoice = (
        <List
          placeholder="Add tags..." 
          currList={this.state.tags}
          addFunction={this.addTags}
          title="Tags"
        />
      );
    }

    if (this.state.buttonClicked === "machineTags") {
      tabChoice = (
        <Table
          tableNames={this.state.issue}
          rows={this.state.tags}
          addFunction={this.addMachineTags}
          data={this.state.machineTags}
        />
      );
    }

    return (
      <div>
        <div className="Box Box--spacious f4">
          <div className="Box-header">
            <h3 className="Box-title d-flex flex-justify-center">Add Issue</h3>
          </div>
        </div>
        <nav className="UnderlineNav d-flex flex-justify-center">
          <div className="UnderlineNav-body pt-6">
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("issue")}
            >
              issue
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("tags")}
            >
              tags
            </button>
            <button
              className="btn btn-primary"
              onClick={() => this.handleButtonClicked("machineTags")}
            >
              machineTags
            </button>
          </div>
        </nav>
        {tabChoice}
      </div>
    );
  }
}

export default App;
