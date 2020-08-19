import React, { useState } from 'react';
import LaunchItem from './launchItem';

export default function Launches({
    launches
}) {
    const original = launches;
    const [all, setAll] = useState(launches);
    let state = all;

    const handleFilterSuccess = (data) => {
        state = data.filter(item => item.launch_success);
        setAll(state)
    }

    const handleFilterFail = (data) => {
        state = data.filter(item => !item.launch_success);
        setAll(state)
    }

    const clearFilter = () => {
        setAll(original);
    }

    const filterByYear = (year) => {
        state = original.filter(item => item.launch_year === year);
        setAll(state)
    }

    const uniqueBy = (arr, prop) => {
        return arr.reduce((a, d) => {
            if (!a.includes(d[prop])) { a.push(d[prop]); }
            return a;
        }, []);
    }

    return (
        <div className="row">
            <div className="col-md-3">
                <div className='title'>
                    <h1 className='title'>Filters</h1>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleFilterSuccess(original)}>Success</button>
                    <button className="btn btn-sm btn-outline-secondary ml-1" onClick={() => handleFilterFail(original)}>Fail</button>
                    <button className="btn btn-sm btn-outline-secondary ml-1" onClick={() => clearFilter()}>Clear</button>
                    <h4 className='years'>Launch Year</h4>
                    <div className="col-md-9">
                        {uniqueBy(original, "launch_year").map(launch => (
                            <button className="btn btn-sm btn-outline-secondary ml-1" onClick={() => filterByYear(launch)} key={launch} >{launch}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-md-9">
                {all.map(launch => (
                    <LaunchItem key={launch.flight_number} launch={launch} />
                ))}
            </div>
        </div>
    )
}