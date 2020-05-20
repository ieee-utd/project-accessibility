import React from 'react'
import Dashboard from './components/Dashboard'
import SearchPage from './components/SearchPage'
import SolutionDisplay from './components/SolutionDisplay'
import TicketReport from './components/TicketReport'
import EditIssue from './components/EditIssue'

class App extends React.Component {
  setAdminState = () => {
    //this.setState({isAdmin: ! this.state.isAdmin})
    this.setState({control: (this.state.control+1)%7})
  }

  state = {
    control: 0,
    isAdmin: true,
    tickets : [
      { id:1, summary:'Summary of Report 1', comments:['04/09/2020 09:31:00 : Comment 1', '04/09/2020 09:31:50 : Comment 2'] },
      { id:2, summary:'Summary of Report 2', comments:['04/09/2020 09:31:00 : Comment 1'] }, 
      { id:3, summary:'Summary of Report 3', comments:[''] }
    ],
    solutions : [
      { issue:'Issue 1', id:0, executeWhenClicked: this.setAdminState },
      { issue:'Issue 2', id:1, executeWhenClicked: this.setAdminState },
      { issue:'Issue 3', id:2, executeWhenClicked: this.setAdminState }
    ],
    issues : [
      { issue:'issue 1', id:0, name:'issue 1', tags:['internet','Add'], solutions:[{soln:'solution 1',mach:'Add'}, {soln:'solution 2',mach:'Add'}, {soln:'Add',mach:'Add'}], executeWhenClicked: this.setAdminState },
      { issue:'issue 2', id:1, name:'issue 2', tags:['sound','speaker','Add'], solutions:[{soln:'solution 1',mach:'Add'}, {soln:'solution 2',mach:'Dell 600'}, {soln:'Add',mach:'Add'}], executeWhenClicked: this.setAdminState },
      { issue:'issue 3', id:2, name:'issue 3', tags:['JAWS','Add'], solutions:[{soln:'solution 1',mach:'Add'}, {soln:'Add',mach:'Add'}], executeWhenClicked: this.setAdminState }
    ],
    adminDashboardButtons : [
      { name:'Issue Management', id:0, executeWhenClicked: this.setAdminState },
      { name:'View Ticket Reports', id:1, executeWhenClicked: this.setAdminState }
    ],
    ticketReports : [
      { name:'Ticket Report 1', id:0, executeWhenClicked: this.setAdminState },
      { name:'Ticket Report 2', id:1, executeWhenClicked: this.setAdminState },
      { name:'Ticket Report 3', id:2, executeWhenClicked: this.setAdminState },
      { name:'Ticket Report 4', id:3, executeWhenClicked: this.setAdminState }
    ],
    adminDashboardNavButtons : [
      { name:'Exit as Admin', id:2, executeWhenClicked: this.setAdminState }
    ],
    userSolutionDisplayNavButtons : [
      { name:'Yes', id:0, executeWhenClicked: this.setAdminState },
      { name:'No', id:1, executeWhenClicked: this.setAdminState },
      { name:'Back', id:2, executeWhenClicked: this.setAdminState }
    ],
    ticketReportNavButtons : [
      { name:'Close Ticket', id:0, executeWhenClicked: this.setAdminState },
      { name:'Back', id:1, executeWhenClicked: this.setAdminState },
      { name:'Home', id:2, executeWhenClicked: this.setAdminState }
    ],
    editIssueNavButtons : [
      { name:'Delete', id:0, executeWhenClicked: this.setAdminState },
      { name:'Back', id:1, executeWhenClicked: this.setAdminState },
      { name:'Home', id:2, executeWhenClicked: this.setAdminState }
    ],
    defaultNavButtons : [
      { name:'Back', id:1, executeWhenClicked: this.setAdminState },
      { name:'Home', id:2, executeWhenClicked: this.setAdminState }
    ]
  }


  render() {
    switch(this.state.control) {
      case 0: return <SearchPage key='userSearch' id='user' heading2='Computers for the Blind' paragraph='Enter your issue into the search bar or tab through then select one from the list of common issues below.' placeholder='Type here to search issues' results={this.state.solutions} navMsg="" navButtons={[]} />
      case 1: return <SolutionDisplay key='userSolutionDisplay' id='user' issue='Your Issue' solution='This is a solution to your problem' navMsg="Did this solve your issue?" navButtons={this.state.userSolutionDisplayNavButtons} />
      case 2: return <Dashboard key='adminDashboard' id='admin' heading2='ADMINISTRATOR ACCESS : DASHBOARD' paragraph='You are an admin.' buttons={this.state.adminDashboardButtons} navMsg="" navButtons={this.state.adminDashboardNavButtons} />
      case 3: return <SearchPage key='adminSearch' id='admin' heading2='ADMINISTRATOR ACCESS: ISSUE MANAGEMENT' paragraph='Search the issue you would like to manage.' placeholder='Type here to search issues' results={this.state.issues} navMsg="" navButtons={this.state.defaultNavButtons} />
      case 4: return <EditIssue key='editAnIssue' id='admin' heading2='ADMINISTRATOR ACCESS: VIEW/EDIT ISSUE' paragraph='Replace text in field and press enter to edit/add issue attributes.' issue={this.state.issues[0]} actionFn={this.setAdminState} navMsg="" navButtons={this.state.editIssueNavButtons} />
      case 5: return <Dashboard key='listTicketReports' id='admin' heading2='ADMINISTRATOR ACCESS : VIEW TICKET REPORTS' paragraph='Here are the currently open ticket reports' buttons={this.state.ticketReports} navMsg="" navButtons={this.state.defaultNavButtons} />
      case 6: return <TicketReport key='viewATicketReport' id='admin' ticket={this.state.tickets[0]} addCommentFn={this.setAdminState} navMsg="" navButtons={this.state.ticketReportNavButtons} />
      default: return <SearchPage key='userSearch' id='user' heading2='Computers for the Blind' paragraph='Enter your issue into the search bar or tab through then select one from the list of common issues below.' placeholder='Type here to search issues' results={this.state.solutions} navMsg="" navButtons={[]} />
    }
  }
}

export default App;
