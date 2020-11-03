import React from 'react'
import {connect} from 'react-redux'
import {createUser} from '../../store/redux/users'



class SignUp extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'',
            address: '',
            phoneNum: 0,
            username:'',
            email:'',
            hasAccount:true,
            password:''
        }
        this.create = this. create.bind(this)
    }
     create(ev){
        const {username,name,password,phoneNum,email,address} = this.state;
        ev.preventDefault();
        if( username ==='' 
            || name ==='' 
            || password ==='' 
            || phoneNum === 0
            || email ===''
            || address ===''){
            window.alert('please enter vaild information!!!');
        }
        else{
            this.props.createUser({
            username: username,
            password: password,
            address: address,
            phoneNum: phoneNum,
            name: name,
            email: email,
            hasAccount: true
            })
            window.alert('Created!')
            window.location.replace('/login');

            }
    }
    render(){
        const {username,name,password,phoneNum,email,address} = this.state;
        return (
            <>
            <h1>Create Your Account</h1>
            <form onSubmit = {this.create}>
            <label>
            Username:
            <input value = {username} onChange = {ev=> this.setState({username :ev.target.value})}/>
            </label>
            <label>
            Password:
            <input value = {password} onChange = {ev=> this.setState({password :ev.target.value})}/>
            </label>
            <label>
            Full Name:
            <input value = {name} onChange = {ev=> this.setState({name :ev.target.value})}/>
            </label>
            <label>
            Phone Number:
            <input value = {phoneNum} onChange = {ev=> this.setState({phoneNum :ev.target.value})}/>
            </label>
            <label>
            address:
            <input value = {address} onChange = {ev=> this.setState({address :ev.target.value})}/>
            </label>
            <label>
            Email:
            <input value = {email} onChange = {ev=> this.setState({email :ev.target.value})}/>
            </label>
             <button>Create</button>
            </form>
            </>
        )
    }
}

const mapStateToProps=({})=>{
    return {};
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createUser: (user) => {dispatch(createUser(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
