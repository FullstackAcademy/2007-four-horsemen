import React from 'react'

const ViewAllUsers = (props) =>{

    const users = props.users


    return (<ul>
            {users.map(user => {
                return(
                   <li key = {user.id}> 

                       <div>
                           User Id : {user.id}
                       </div>
                       <div>
                           Name : ${user.name}
                       </div>
                       <div>
                           Email : {user.email}
                       </div>

                   </li>
                )
            } )}
            </ul>)

}
export default ViewAllUsers