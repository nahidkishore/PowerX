import React from 'react';
import fakeData from '../../fakeData/fakeData';

import '../Classes/Classes.css';

import NavBar from '../Header/NavBar/NavBar';

const Service = () => {

    const clickButtonForAddClass = () => {
        fetch('https://limitless-anchorage-82823.herokuapp.com/addClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
        })
    }

    return (
        <div className="class-container">

            <div className="class-heading text-center">
                
                <NavBar></NavBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="header-tag">
                    <h1>ADD CLASSES</h1>
                </div>
                
            </div>

            <button onClick={clickButtonForAddClass}>Add Class</button>
            
        </div>
    );
};

export default Service;