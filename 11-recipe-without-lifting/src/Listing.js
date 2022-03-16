import React from 'react'
import axios from 'axios'

export default class Listing extends React.Component {
    state = {
        'data': []
    }

    BASE_API_URL = "https://8888-kunxinchor-dwadrecipeapi-tbknv7p66bz.ws-us34.gitpod.io/"

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL + 'recipes');
        this.setState({
            'data': response.data
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.state.data.map( r => {
                    return (
                        <React.Fragment key={r._id}>
                            <div className="card" style={{'width':'18rem'}}>
                                <div className="card-body">
                                    <h4 className="card-title">{r.title}</h4>
                                    <h5>Ingredients:</h5>
                                    {
                                        r.ingredients.map( (i,index) => <li key={index}>{i}</li> )
                                    }
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>      
        )
    }
}