import React, {PropTypes} from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap';

const AccountsHeader = (props) => {

    return (
        <div className="accounts-header">
            <div>Accounts:</div>
            <ButtonToolbar>
                <Button bsStyle="primary" onClick={props.addAccount}>Add Account</Button>
                <Button bsStyle="primary" onClick={props.refresh}>Refresh</Button>
            </ButtonToolbar>
        </div>
    );
};

AccountsHeader.propTypes = {
    addAccount: PropTypes.func.isRequired,
    refresh: PropTypes.func.isRequired
};


export default AccountsHeader;