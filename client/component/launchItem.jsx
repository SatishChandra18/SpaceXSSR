import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';

export default function LaunchItem({
    launch: { flight_number, mission_name, launch_date_local, launch_success }
}) {
    return (
        <div className="column">
            <div className='card card-body mb-3'>
                <h6>Mission: {}
                    <span className={classNames({
                        'text-success': launch_success,
                        'text-danger': !launch_success
                    })}>{mission_name}</span>
                </h6>
                <p>Date: <Moment format='MMMM Do YYYY'>{launch_date_local}</Moment></p>
            </div>
        </div>
    )
}