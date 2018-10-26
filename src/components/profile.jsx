import React, { Component } from 'react';
import userPic from './user.svg';
var profileStyle={
    position: 'fixed',
     backgroundColor: '#e8f0f2',
     color: '#000',
     width: '15%',
    right: '0',
    paddingTop: '10vh',
    textAlign: 'center',
    height: '100vh',
    margin: '0vh'
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