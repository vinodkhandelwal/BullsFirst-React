import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import AccountsGrid from './AccountsGrid.js';
import AccountsChart from './AccountsChart.js';
import AccountsHeader from './AccountsHeader.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as accountActions from '../../actions/accountActions';

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
  constructor(props,context) {
    super(props,context);
  }

  onAddAccount(){
    let newAccount = { name: 'New Account',
      marketValue: Math.random() * 1000000,
      cash: Math.random() * 4000000,
      color:randomColor(120)};

    this.props.actions.addAccount(newAccount);
  }

  onRefresh(){
    this.props.actions.loadAccounts();
  }

  render() {
    return (
        <div className='accounts-page'>
          <AccountsHeader addAccount={() => this.onAddAccount()} refresh={() => this.onRefresh()}/>
          <AccountsGrid accounts={this.props.accounts} />
          <AccountsChart accounts={this.props.accounts} />
        </div>
    );
  }
}

AccountsPage.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps){
  return{
    accounts: state.accounts
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(accountActions, dispatch)
  }
}

const connectedStateAndProps = connect(mapStateToProps,mapDispatchToProps);
export default connectedStateAndProps(AccountsPage);
