import react from 'react'
import { Component } from "react";
import { Card } from "react-bootstrap";
import  tofprofile from "../assets/tofprofile.jpg";

class Profile extends Component {

// profile = {
//     name : "Rahma BOUKERI",
//     bio : "Developer full stack studing at go my code schoole",
//     profession : "Full stack developer"
// }
    render() {

        return (
            <div>
           
             <div style={{width:'400px' , height:'500px' , fontWeight:'0.5' , backgroundColor:'rgba(0, 0, 0, 0.5)', borderRadius:'5%' , margin:'100px 600px', display:'flex' ,justifyContent:'center'}}>
    
                  <div>
               <Card style={{ width: '300px' , height:'470px' , display:'flex' , alignItems: 'center' , margin:'10px 10px' }}>
                   <Card.Img variant="top" style={{width:'250px',display:'flex' ,justifyContent:'center'}} src={tofprofile} />
                   <Card.Body>
                        <Card.Title style={{fontSize:'30px'}}>BOUKERI rahma</Card.Title>
                        <Card.Text style={{fontWeight:"bold"}}> Full stack developer </Card.Text>
                        <Card.Text> Developer full stack studing at go my code schoole </Card.Text>

                   </Card.Body>
                </Card>     
             </div> 
        
        </div>
            </div>
        )
    }
}

export default Profile ;
