import React from 'react';
const UserGreeting=({isLoggedIn})=>{
    if(isLoggedIn)
    {
        return <h2>Welcome back,user!</h2>
    }
    else{
        return <h2>Please log in.</h2>
    }
}
export default UserGreeting;

// Using Ternary Operator (Most Common in Interviews)
// const UserGreeting = ({ isLoggedIn }) => {
//   return (
//     <h2>{isLoggedIn ? "Welcome back, User!" : "Please log in."}</h2>
//   );
// };
