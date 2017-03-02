import React, {PropTypes} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});



const AccountsGrid = (props) => {

    let marketValSum = 0;
    let cashSum = 0;
    const accountData = props.accounts;

   if(accountData.length >0) {
        for (let i = 0; i < accountData.length; i++) {
          marketValSum += accountData[i].marketValue;
          cashSum += accountData[i].cash;
        }
    }

    const columns = [
        { accessor: 'name', header: 'Name',width: 180 },
        { accessor: 'marketValue',
          header: 'Market Value',
          footer: 'Total: ' + formatter.format(marketValSum),
          width: 145,
          render: row => {return formatter.format(row.value);}
        },
        { accessor: 'cash',
          header: 'Cash',
          footer: 'Total: ' + formatter.format(cashSum),
          width: 145,
          render: row => {return formatter.format(row.value);}
        },
        { accessor: 'color', header: 'Legend', width: 70,
        render: row => (
           <div
             style={{
               width: '50%',
               height: '75%',
               backgroundColor: row.value,
               borderRadius: '2px',
               marginLeft: '25%'
             }}
           ></div>
         )}
    ];

    return (
        <ReactTable
            columns={columns}
            data={props.accounts}
            className="-striped -highlight"
            defaultPageSize={10}
            />
    );
};

AccountsGrid.propTypes = {
    accounts: PropTypes.array.isRequired
};


export default AccountsGrid;