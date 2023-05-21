import React from "react";

export const Drawer = () => {
  return (
    <div
      style={{
        width: "50vw",
        height: "80vh",
        border: "1px solid red",
        margin: "10% auto",
      }}
    >
      <DrawerContent />
    </div>
  );
};

const DrawerContent = () => {
  return (
    <div style={{ marginLeft: "2rem" }}>
      <div>
        <h2>Manage who can view this project</h2>
        <p>
          Select which users can access and view this project. Only users with
          access can view and edit the project.
        </p>
      </div>

      <div style={{backgroundColor: "black"}}>
        {UsersJSON.map(user => 
        <UserChoice {...user}/>)}
      </div>
    </div>
  );
};

const UserChoice = (user) => 
    <div style={{height: "72px"}}>
        <img src="https://i.pravatar.cc/300" alt="userAvatar" width="50" height="50" style={{borderRadius: "1.2em", flexBasis: "content"}}/>
           <div style={{flexBasis: "max-content"}}>
            <h2 style={{color: "white"}}>{user.name}</h2>
            <span style={{color: "#B6F09C"}}> @{user.handle}</span>
            </div> 
    </div>


const UsersJSON = [
  {
    name: "Marcus Chen",
    handle: "marc",
  },
  {
    name: "Ava Gupta",
    handle: "avyavy",
  },
  {
    name: "Lucas Ortiz",
    handle: "luckyluc",
  },
];
