import React from 'react';
import PropTypes from 'prop-types';

const userData=[
    {
       name:"james" ,
       city:"CBE",
       role:"developer",
       skills:["java","sql","react","tailwindcss"] ,
       online:true,
       profile:"images/profile1.jpg" 
    },
    {
       name:"james" ,
       city:"CBE",
       role:"developer",
       skills:["java","sql","react","DSA"] ,
       online:false,
       profile:"images/profile2.jpg" 
    },
    {
       name:"james" ,
       city:"CBE",
       role:"developer",
       skills:["java","sql","react","html","css"],
       online:true,
       profile:"images/profile3.jpg" 
    },
]
const User = ({
    name = "No Name",
    city = "CBE",
    role = "developer",
    skills="Beginner",
    online=false,
    profile="no-img"
}) => {
    return (
        <div className="card-container">
            <span className={online?"pro online":"pro offline"}>{online?"online":"offline"}</span>
            <img className="img" src={profile} alt="user1" />
            <h3>{name}</h3>
            <h3>{city}</h3>
            <p>{role}</p>
            <div className="buttons">
                <button className="primary">Msg</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {skills.map((skill,index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const A_User_Card = () => {
    return (
        <>
        {/*
            <User name="james" city="CBE" role="developer" skills={["java","sql","react"]} online={true} profile="images/profile1.jpg" />
            <User name="" city="CBE" role="developer" skills={["java","sql","react","html & css"]}  online={false} profile="images/profile2.jpg"/>         {/* blank string */}
            {/*<User city="CBE" role="developer" skills={["java","sql","react","DSA"]}  online={true} profile="images/profile3.jpg"/>               {/* missing name */}  


            {
                userData.map((user,index)=>(
                    <User key={index} 
                    name={user.name}
                    city={user.city}
                    role={user.role}
                    skills={user.skills}
                    online={user.online}
                    profile={user.profile}
                    

                    />
                ))
            }
        </>
    );
};

export default A_User_Card;

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    skills:PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile:PropTypes.string.isRequired
};