import React from 'react';

import './MembershipForm.css';

import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import NavBar from '../Header/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer';
import { useForm } from 'react-hook-form';

const MembershipForm = () => {
    

    const { register, handleSubmit } = useForm();

    const onSubmit = (data)=>{

            console.log(data)
    }
   
    return (
        <>
        <div className="class-container">
                <div className="class-heading text-center">
                    <NavBar></NavBar>
                    <div className="header-tag">
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>
                            YOUR GYM MEMBERSHIP
                        </h1>
                    </div>
                </div>
        <section>
            <div  className="container">
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input id="inputName" name="riviewName" placeholder='Your Name' className="form-control" ref={register({ required: true })}/> */}
                <div className="row">
                    <div className="col-50">
                        <label for="cname">First Name</label>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" ref={register({ required: true })}></input>
                        <label for="cname">Email</label>
                            <input type="text" id="email" name="email" placeholder="Email" ref={register({ required: true })}></input>
                        <label for="cname">Date of Birth</label>
                            
                        <TextField
                            id="date"
                            label=""
                            type="date"
                            defaultValue="2017-05-24"
                            // className={classes.textField}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />


                        <label for="cname">Address Line 1</label>
                            <input type="text" id="firstName" name="firstName" placeholder="First Name" ref={register({ required: true })}></input>

                        <label for="cname">City</label>
                            <input type="text" id="email" name="email" placeholder="Email" ref={register({ required: true })}></input>
                    </div>

                    <div className="col-50">
                    <label for="cname">Last Name</label>
                        <input type="text" id="cname" name="lastName" placeholder="" ref={register({ required: true })}></input>
                
                    <label for="cname">Phone</label>
                        <input type="text" id="phone" name="phone" placeholder="" ref={register({ required: true })}></input>
               
                    <label for="cname">Gender</label> 
                    <select id="country" name="country">
                        <option value="australia">Male</option>
                        <option value="canada">Female</option>
                        <option value="usa">Others</option>
                        </select>
                
                    <label for="cname">Country</label>
                        <input type="text" id="cname" name="lastName" placeholder="" ref={register({ required: true })}></input>
                
                <label for="cname">Post Code</label>
                    <input type="text" id="phone" name="text" placeholder="" ref={register({ required: true })}></input>


                    </div>


                </div>

                
                    
                    <Link to="checkout">
                    <button type="submit" className="btn btn-lg banner-btn m-3 d-block ml-auto">Next</button>
                    </Link>
                </form>
                </div>
            </div>
        </section>
        </div>
            <Footer></Footer>
        </>
    );
};

export default MembershipForm;