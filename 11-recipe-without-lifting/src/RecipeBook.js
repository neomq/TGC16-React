import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Listing from './Listing'

export default class RecipeBook extends React.Component {
    state = {
        'active': 'recipe'
    }

    setActive= (active) => {
        this.setState({
            'active': active
        })
    }

    renderPage() {
        if (this.state.active === 'recipe') {
            return <Listing/>
        }
    }

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
                    <button className="nav-link" onClick={()=>{
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