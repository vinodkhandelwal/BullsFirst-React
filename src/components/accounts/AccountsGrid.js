import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const columns = [
    { accessor: 'name', header: 'Name',width: 205 },
    { accessor: 'marketValue', header: 'Market Value', footer: 'Total-', width: 105},
    { accessor: 'cash', header: 'Cash', width: 105 },
    { accessor: 'color', header: 'Legend', width: 75,
    render: row => (
       <div
         style={{
           width: '50%',
           height: '75%',
           backgroundColor: row.value,
           borderRadius: '2px'
         }}
       ></div>
     )}
];

const AccountsGrid = (props) => {
    return (
        <ReactTable
            columns={columns}
            data={props.accounts}
            className='-striped -highlight'
            defaultPageSize={10}
            />
    );
};

export default AccountsGrid;