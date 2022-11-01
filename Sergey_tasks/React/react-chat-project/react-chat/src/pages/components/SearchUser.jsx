
import React from 'react';
import "../components/main.css";
import ExistingsChats from './ExistingsChats';

function SearchUser({authUser, foundUsers}){
      return(
         <div className='active-user' >
            <ExistingsChats authUser={authUser} foundUsers={foundUsers}/>
         </div>
      )
}
export default SearchUser;