import React, { Component } from "react"
import {connect} from 'react-redux'
import { 
  Container,
  Col, Row, Button,
  Form, FormGroup,
  Label, Input,
  Alert
} from 'reactstrap'
import { checkUserCredential } from '../../reducers/users/action';

class Login extends Component {
    state={
        email:"",
        password:"",
        emailError:"",
        pwdError:"",
        loginStatus: ""
    }

    handleEmail = (e) =>{
        const {value,name} = e.target
        this.setState({
            [name]:value,
            emailError:""
        })
        
    }

    handlePwd = (e) =>{
      const {value,name} = e.target
      this.setState({
          [name]:value,
          pwdError:""
      })
      
  }

    handleLogin = () =>{
        const {email,password} = this.state;

        let errors = false
        const errorMsgs = {}

        if(!email){
          errorMsgs.emailError = "Email is required"
          errors = true
        }
        if(!password){
          errorMsgs.pwdError = "Password is required"
          errors = true
        }

        if(errors){
          this.setState({
            emailError: errorMsgs.emailError,
            pwdError: errorMsgs.pwdError,
            loginStatus: ""
          })
          return
        }
        this.props.checkUserCredential({email,password}, this.props.history)
    }

  render() {
    const { emailError,pwdError } = this.state
    const { loginStatus, isLoading } = this.props
    return (
      <div>
        {/* <h1>Login Component</h1> */}
        <Container>

        <Form className="mt-5 form-design" autoComplete="off">
          <h4>Login</h4>
          <div className="text-danger">{loginStatus}</div>
          <Row form>
            <Col sm={12}>
              <FormGroup>
                <Label for="email" className="float-left">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Please Enter Email"
                  value={this.state.email}
                  onChange={(e)=>this.handleEmail(e)}
                  
                />
                <div className="text-danger text-left">{emailError}</div>
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm={12}>
              <FormGroup>
                <Label for="pwd" className="float-left">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="pwd"
                  value={this.state.password}
                  placeholder="Please Enter Password"
                  onChange={(e)=>this.handlePwd(e)}
                />
                <div className="text-danger text-left">{pwdError}</div>
              </FormGroup>
             
            </Col>
          </Row>
          
              
              <Button color="info" size="md" disabled={isLoading} block onClick={(e)=>this.handleLogin(e)}>Login</Button>
            
        </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    loginStatus:state.loginStatus,
    loading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserCredential: (user,history) => dispatch(checkUserCredential(user, history))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);
