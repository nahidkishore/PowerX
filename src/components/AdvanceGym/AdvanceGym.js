import React from 'react';
import { useParams } from 'react-router-dom';
import AdvanceGymClassTime from '../AdvanceGymClassTime/AdvanceGymClassTime';
import AdvanceGymDetail from '../AdvanceGymDetail/AdvanceGymDetail';
import '../Classes/Classes.css';
import NavBar from '../Header/NavBar/NavBar';

import './AdvanceGym.css';

const AdvanceGym = () => {
    const {title} = useParams();
 
    return (
        <div className="class-container">
            <div className="class-heading text-center">
                <NavBar></NavBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="header-tag">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-7">
                    <AdvanceGymDetail title={title}></AdvanceGymDetail>
                </div>
                <div className="col-md-5">
                    <AdvanceGymClassTime></AdvanceGymClassTime>
                </div>

            </div>


        </div>
    );
};

export default AdvanceGym;