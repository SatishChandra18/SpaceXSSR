import React from 'react';
import Launches from './component/launches';

export const App = ({ initialData }) => (
    <div className="container mt-5">
        <div className='heading'>SPACEX</div>
        <Launches launches={initialData} />
    </div>
)