import React from 'react';
import './AdvanceGymDetail.css';
import imageOfGym from '../images/image/picThree.jpg';
import checkMark from '../images/icon/checkmark-square-2.png';

const AdvanceGymDetail = () => {
    return (
        <div className="gymDetail-container">
            <div className="gymImage">
                <img src={imageOfGym} alt=""/>
            </div>
            <div className="text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consectetur sint quae delectus quos consequatur expedita id veritatis, minima fuga eligendi error qui quibusdam dolores perspiciatis reprehenderit corporis beatae, voluptate placeat excepturi sequi voluptas dolorum. Ex repellendus quisquam officiis inventore harum recusandae nihil ipsam qui, facilis, ratione dignissimos fuga voluptas!</p>
            </div>
            <div className="mark-line">
                <ul>
                    <li className="mark-item-name">
                        <img className="icon" src={checkMark} alt=""/>
                        <b>Having Slimmer Shapely Thighs</b>
                    </li>
                    <li className="mark-item-name">
                        <img className="icon" src={checkMark} alt=""/>
                        <b>Getting Stronger Body</b>
                    </li>
                    <li className="mark-item-name">
                        <img className="icon" src={checkMark} alt=""/>
                        <b>Increased Metabolism</b>
                    </li>
                    <li className="mark-item-name">
                        <img className="icon" src={checkMark} alt=""/>
                        <b>Increased Muscular Endurance</b>
                    </li>
                    <li className="mark-item-name">
                        <img className="icon" src={checkMark} alt=""/>
                        <b>Maximum Results in Less Time</b>
                    </li>
                    <li className="mark-item-name">
                        <img className="icon" src={checkMark} alt=""/>
                        <b>Firm Hips and Tummy</b>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default AdvanceGymDetail;