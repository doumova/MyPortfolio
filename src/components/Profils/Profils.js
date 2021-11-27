import React from 'react';
import { Typography } from '@material-ui/core';
import './Profils.css';
import profile from '../../assets/images/profile.jpg';
import CustomTimeline from '../Timeline/MyTimeline';
const Profils = () => {
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Modou Gueye</Typography>
                <Typography className="title">Web Developper</Typography>
            </div>
            {/* figure profil */}
            <figure className="profile_image">
                <img src={profile}  alt=""/>
            </figure>
            {/* informations profile */}

            <div className="profile_information">
                <CustomTimeline/>

                <br/>
                <button>Download Cv</button>
            </div>
        </div>
    )
}

export default Profils;
