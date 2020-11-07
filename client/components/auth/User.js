import React from 'react';
import {connect} from 'react-redux'
import {setSingleUser} from '../../store/redux/users'
import {fetchMyOrders} from '../../store/redux/orders'
import {fetchAllOrders} from '../../store/redux/orders'
import {setUsers} from '../../store/redux/allUsers'

import Popup from 'reactjs-popup'
import ViewMyOrders from './ViewMyOrders'
import ViewAllOrders from './ViewAllOrders'
import ViewAllUsers from './ViewAllUsers'
import AddProduct from '../products/AddProduct'



class  User extends React.Component{
        constructor(){
            super()
        }
        async componentDidMount(){
            await this.props.getUser()
            if(this.props.user.isAdmin)
            {   
                await this.props.getAllOrders()
                await this.props.getAllUsers()
                
            }
            else
            {
                await this.props.getOrders(this.props.user.id)
            }
        }

        render(){
        return(
            
            <div>
                <li>
                    My Name: {this.props.user.name}
                </li>
                <li>
                    My EMAIL: {this.props.user.email}
                </li>
                <li>
                    My Address: {this.props.user.email}
                </li>
                <li>
                    My Phone Number: {this.props.user.email}
                </li>
                
                {this.props.user.isAdmin ?
                <div>
                <Popup trigger={<button> View All Orders</button>} position="right center" modal >
                <ViewAllOrders orders = {this.props.orders} />
                </Popup>
                <Popup trigger={<button> View All Users</button>} position="right center" modal >
                <ViewAllUsers users = {this.props.users}/>
                </Popup>
                <Popup trigger={<button> Upload New Model!!</button>} position="right center" modal >
                <AddProduct/>
                </Popup>
                </div>
                :
                <Popup trigger={<button> View My Orders</button>} position="right center" modal >
                <ViewMyOrders orders = {this.props.orders} />
                </Popup>
                }

            </div>
        )
        }
}

const mapStateToProps=({user,users,orders})=>{
    return {user,users,orders};
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getUser: () => dispatch(setSingleUser()),
        getOrders: (id) => dispatch(fetchMyOrders(id)),
        getAllOrders: () => dispatch(fetchAllOrders()),
        getAllUsers: ()=>dispatch(setUsers())
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(User)
