import React from 'react'
import UserServices from '../services/UserService'
import { Card, Button } from 'react-bootstrap';
import './UserComponent.css'

 class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            plant: []
        }
    }

    componentDidMount() {  //lifecycle method...
        UserServices.getAPI().then( (response) => {
            this.setState({plant: response.data})
        }).catch( (error) => console.log(error))
    }

    render() {
        return (
            <div>
                <h1 style={{margin: '0 auto'}}>Plants</h1>
                {
                    this.state.plant.map(plant => {

                        if(plant.image_url === null) plant.image_url ="https://www.gardeningknowhow.com/wp-content/uploads/2013/12/leaf-curl.jpg"

                        return <Card key={plant.id} style={{border: '1px solid black', width: '25rem', padding: '20px', margin: '0 auto'}}>
                                <Card.Img variant="top" src={plant.image_url} style={{ width: '250px' }}/>
                                <Card.Body>
                                    <Card.Title style={{ fontWeight: 'bold' }}>{plant.common_name}</Card.Title>
                                    <Card.Text>
                                    <p>{plant.scientific_name}</p>
                                    <p>{plant.family_common_name}</p>
                                    </Card.Text>
                                    <Button variant="primary">Select</Button>
                                </Card.Body>
                                </Card>
                    })
                }

            </div>
        )
    }
}

export default UserComponent

//'100px180"