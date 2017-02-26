import React from 'react';
import {Link} from 'react-router';
import AccountsGrid from './AccountsGrid.js';
import AccountsChart from './AccountsChart.js';
import AccountsHeader from './AccountsHeader.js';
import {connect} from 'react-redux';

var initialAccounts = [
  { "name": "Brokerage Account 3", "marketValue": 1999990, "cash": 1995826},
  { "name": "Account 3", "marketValue": 1949990, "cash": 1695856},
  { "name": "Brokerage Account 1", "marketValue": 1349990, "cash": 1595866},
  { "name": "Brokerage Account 4", "marketValue": 155990, "cash": 160826},
  { "name": "Brokerage Account 2", "marketValue": 745600, "cash": 199560},
  { "name": "Account 4", "marketValue": 550060, "cash": 530060},
  { "name": "Account 13", "marketValue": 373400, "cash": 0},
  { "name": "Joint Account 1", "marketValue": 283080, "cash": 416700},
  { "name": "Joint Account 2", "marketValue": 1000000, "cash": 1000000}
]

function randomColor(brightness){
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

class AccountsPage extends React.Component {
  constructor() {
    super();

    for (let account of initialAccounts) {
      account.color = randomColor(120);
    }

    this.state = {
      accounts: initialAccounts.slice()
    };

    this.onAddAccount = this.onAddAccount.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }

  onAddAccount(){
    let newAccount = { name: 'New Account',
      marketValue: Math.random() * 1000000,
      cash: Math.random() * 4000000,
      color:randomColor(120)};

    let currentAccounts = this.state.accounts;
    currentAccounts.push(newAccount);
    this.setState({
      accounts: currentAccounts
    });
  }

  onRefresh(){
    for (let account of initialAccounts) {
      account.color = randomColor(120);
    }

    this.setState({
      accounts: initialAccounts.slice()
    });
  }

  render() {
    return (
        <div className='accounts-page'>
          <AccountsHeader addAccount={() => this.onAddAccount()} refresh={() => this.onRefresh()}/>
          <AccountsGrid accounts={this.state.accounts} />
          <AccountsChart accounts={this.state.accounts} />
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    return{
      accounts: state.accounts
    }

}

export default AccountsPage;

//const connectedStateAndProps = connect(mapStateToProps);
//export default connectedStateAndProps(AccountsPage);
