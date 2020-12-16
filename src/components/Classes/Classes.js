import React, { useEffect } from 'react';
import './Classes.css';

import { Container } from 'react-bootstrap';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import ClassItems from '../ClassItems/ClassItems';
import { useState } from 'react';
//import fakeData from '../../fakeData/fakeData';

const Classes = () => {

     //const [service, setService] = useState(fakeData);
    // console.log(service);

     const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://limitless-anchorage-82823.herokuapp.com/getClass')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
 
    return (
        <>
        <div className="class-container">

            <div className="class-heading text-center">
                
                <NavBar></NavBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="header-tag">
                    <h1>OUR CLASSES</h1>
                </div>
                
            </div>
           <section>
               <Container>
               <div className="row">
                {
                    service.map(service => <ClassItems service={service} key={service.id}></ClassItems>)
                }
            </div>
               </Container>
           </section>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Classes;