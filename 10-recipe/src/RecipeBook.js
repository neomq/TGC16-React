import React from 'react'
import Listing from './Listing'
import AddNew from './AddNew'
import axios from 'axios'

export default class RecipeBook extends React.Component {
    
    state = {
        active: 'recipe',
        data: [
            {
                '_id': 1,
                'title': 'Chicken Rice',
                'ingredients': ['Chicken Broth', 'Chicken', 'Rice']
            },
            {
                '_id': 2,
                'title': 'Duck Rice',
                'ingredients': ['Duck', 'Rice']
            },
            {
                '_id': 3,
                'title': "Hor fun",
                'ingredients':['Rice noodle', 'Beef', 'Black Bean Paste']
            }
        ]
    }

    BASE_API_URL="https://8888-neomq-dwadrecipeapi-z7q2ywvge5p.ws-us34.gitpod.io/"

    async componentDidMount() {
        let response = await axios.get(this.BASE_API_URL + "recipes");
        this.setState({
            'data': response.data 
        })
    }

    renderPage(){
        if(this.state.active === 'recipe') {
            return <Listing data={this.state.data}/>
        } else if (this.state.active === 'add') {
            return <AddNew/>
        }
    }

    setActive(page) {
        this.setState({
            'active': page
        })
    }

    // the newRecipe arugment should be an object with _id,
    // title and ingredients
    addRecipe = (newRecipe) => {
        this.setState({
            'data': [...this.state.data, newRecipe],
            'active':'recipe'
        })
    }

    // all class-based component must have a render function
    // or else you cannot create instance of it
    render() {
        return (<div className="container">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <button className="nav-link"
                            onClick={()=>{
                                this.setActive('recipe')
                            }}>
                        Recipes
                    </button>
                </li>
                <li>
                    <button className="nav-link"
                            onClick={()=>{
                                this.setActive('add')
                            }}>
                        Add New
                    </button>
                </li>
            </ul>
            {this.renderPage()}
        </div>)
    }
}