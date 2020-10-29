import React from 'react';
import {connect} from 'react-redux'
import {setSingleUser} from "../store/redux/users"


class  User extends React.Component{
        constructor(){
            super()
        }
        componentDidMount(){
            this.props.getUser()
        }

        render(){
            console.log(this.props)
        return(
            <div>
                <li>
                    USER: {this.props.user.name}
                </li>
                <li>
                    EMAIL: {this.props.user.email}
                </li>
            </div>
        )
        }
}

const mapStateToProps=({user})=>{
    return {user};
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getUser: () => dispatch(setSingleUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(User)