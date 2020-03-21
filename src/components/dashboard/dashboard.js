import React,{ Component  } from "react"
import {connect} from 'react-redux'
import { Container, Table } from 'reactstrap';

class Dashboard extends Component{
    render(){
        const {users} = this.props
        return(
            <div>
                <Container className="mt-5">
        <h1>Welcome to Dashboard</h1>

          <Table bordered  className="mt-3">
          <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
          {
              users.map((item,index)=>{
                  return(
                      <tr key={index}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.gender}</td>
                          <td>{item.email}</td>
                          <td>{item.phoneNo}</td>
                      </tr>
                  )
              })
          }
      </tbody>
          </Table>

        </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
      users:state.user
    }
}

export default connect(mapStateToProps,null)(Dashboard)