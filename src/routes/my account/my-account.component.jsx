
import React, { Fragment, useContext } from "react";
import { UserContext } from '../../contexts/user.context';
import UserProfileData from "../../components/user-profile-component/user.profile.component";
import './../../style.css';

const MyAccount = () => {

    // const { currentUser } = useContext(UserContext);
    // console.log(currentUser);

    return (
        <div className="page-container">
            
            
            {/* {Object.keys(currentUser).map(( uid, email ) => (
                    <li key = {uid} >
                        <p><b>Unique ID:</b> {uid}</p>
                        <p><b>User email:</b> {email}</p>
                        <div>                          
                        </div>
                    </li>
                    ))} */}
            <h1>Your Recordings and information:</h1>
            <UserProfileData/>
            {/* <Fragment>
                {Object.keys(currentUser).map(( uid, email ) => (
                    <Fragment key = {uid} >
                        <p><b>Unique ID:</b> {uid}</p>
                        <p><b>User email:</b> {email}</p>
                        <div>                          
                        </div>
                    </Fragment>
                ))}  
            </Fragment> */}
        </div>
    );
}

export default MyAccount;