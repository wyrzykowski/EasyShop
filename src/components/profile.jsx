import React, { Component } from 'react';
import userPic from './user.svg';
var profileStyle={
     backgroundColor: '#91d4ff',
     color: '#000',
     width: '30%',
    float: 'right',
    textAlign: 'center',
    height: '100vh'
};

var profileImage = {
    marginTop: '5vh',
    width: '15vh'
};

class Profile extends Component {
  state = {  }
 
    render() { 
        const {userName , userSurname} = this.props;
        return (
            <div style={profileStyle} className="Profile">
                     <img style={profileImage} src={userPic}></img>
                <h2>{userName || "Name"} {userSurname || "Surname"}  </h2>
       
            </div>
         
          );
    }
}
 
export default Profile;