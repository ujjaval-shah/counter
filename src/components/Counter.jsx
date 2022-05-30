import moment from 'moment';
import 'moment-precise-range-plugin';
import React, { Component } from 'react';

class Counter extends Component {

    render() {

        var starts = moment('2020-01-03 00:00:00');
        var ends = moment();

        // // var duration = moment.duration(ends.diff(starts));
        var diff = moment.preciseDiff(starts, ends, true);

        console.log()

        return (
            <div
                className='counter'
                style={{ fontSize: this.props.isMobile ? "inherit" : 45 }}
            >
                {`${diff.years} Years ${diff.months} Months and ${diff.days} Days`}
            </div>
        );
    }
}

export default Counter;