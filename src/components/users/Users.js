import React, { useContext } from "react";
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from "../../context/github/GithubContext";

const Users = () => {

  const {users, loading} = useContext(GithubContext);

  if(loading) {
    return <Spinner />
  } 
    return <div style={userStyle}>
        {users.map(user => (
            <UserItem key={user.id} user={user}/>
        ))}
    </div>;
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem'
};

export default Users;
