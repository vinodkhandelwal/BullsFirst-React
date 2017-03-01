import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import RC2 from 'react-chartjs2';

const AccountsChart = (props) => {

    let chartData = {
        labels: [],
        datasets: [{
            data: [],
            backgroundColor: []
        }]
    };

    let options= {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
                boxWidth: 20
            },
            position: 'bottom'
        }
    };

    for (let {name: n, marketValue: mv, color:bgc} of props.accounts) {
        chartData.labels.push(n);
        chartData.datasets[0].data.push(mv);
        chartData.datasets[0].backgroundColor.push(bgc);
    }

  return (
      <div className="account-chart">
        <RC2  data={chartData} options={options} type="pie"/>
      </div>
  );
};

AccountsChart.propTypes = {
    accounts: PropTypes.array.isRequired
};


export default AccountsChart;