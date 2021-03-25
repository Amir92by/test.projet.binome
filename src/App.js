import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Form, Card} from 'react-bootstrap';
import {Button } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      
           <Navbar className="nvb" fixed-top bg="warning" variant="light" >
              <Navbar.Brand href="#home">Express Marcket</Navbar.Brand>
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                 <Nav.Link href="#pricing">Contact us</Nav.Link>
              </Nav>
              <Form inline>
                    <Button variant="outline-danger">Log in</Button>
              </Form> 
           </Navbar>
          
             <Form className="Forme">
              <div className='container'>
                            
                                      <Form.Group controlId="formBasicEmail" >
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control  type="email" placeholder="Example@gmail.com"  />
                                            <Form.Text className="text-muted">
                                              we'll not share your email, trust us!
                                            </Form.Text>
                                      </Form.Group>
                                      
                                      <Form.Group controlId="formBasicPassword">
                                              <Form.Label>Enter your password</Form.Label>
                                              <Form.Control type="password" placeholder="password" />
                                        </Form.Group>
                              </div >
          
              <Button variant="light" className='btn btn-outline-info btnn-sm' type="submit" >Login</Button> 
            </Form>
                  
                 <div className="card1">
                    <Card className="mb-3" style={{ width: '400px'}}>
                        <Card.Img variant="top" src="https://picsum.photos/seed/picsum/300/200" />
                        <Card.Body>
                          <Card.Title>Welcome User ^.^ </Card.Title>
                          <Card.Text>
                            Dont forget to fellow us in facebook & instagram
                          </Card.Text>
                          <Button className='btn' variant="primary">Facebook</Button>
                          <Button variant="danger">Instagram</Button>
                        </Card.Body>
                      </Card>
                 </div>
     
    </div>
    
  
  );
}

export default App;
