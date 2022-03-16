import React from 'react'

export default class SurveyForm extends React.Component {
    state = {
        'name': '',
        'colour': '',
        'country': '',
        'fruits': []
    }

    colours = [
        {
            'display':'Red',
            'value': 'red'
        },
        {
            'display': 'Green',
            'value': 'green'
        },
        {
            'display': 'Blue',
            'value': 'blue'
        }
    ]

    countries = [
        {
            'display': 'Singapore',
            'value': 'singapore'
        },
        {
            'display': 'Malaysia',
            'value': 'malaysia'
        },
        {
            'display': 'Indonesia',
            'value': 'indonesia'
        }
    ]

    fruits = [
        {
            'display':'Apple',
            'value':'apple'
        },
        {
            'display':'Banana',
            'value': 'banana'
        },
        {
            'display': 'Cherries',
            'value': 'cherries'
        }
    ]

    renderColours() {
        let options = []; // empty array to store the final JSX elements
        for (let c of this.colours){
            let e = (
                <React.Fragment key={c.value}>
                    <input name="colour" type="radio" value={c.value} checked={this.state.colour === c.value} onChange={this.updateFormField}/>
                    <span>{c.display}</span>
                </React.Fragment>
            )
            options.push(e)
        }
        return options;
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    updateFruits = (e) => {
        // case 1: the array already have the value
        // if the value is in the array,
        if (this.state.fruits.includes(e.target.value)) {
            // 1. clone
            let clone = this.state.fruits.slice();
            // 2. modify
            let indexToRemove = this.state.fruits.findIndex(function(fruit){
               return fruit === e.target.value
            })
            clone.splice(indexToRemove, 1) // remove the value from the array
            // 3. replace
            this.setState({
                'fruits': clone
            });
        } else {
            // case 2: the array don't have the value
            // 1. clone
            let clone = this.state.fruits.slice();
            // 2. modify
            clone.push(e.target.value); // add the value to the array
            // 3. replace
            this.setState({
                'fruits': clone
            });
        }


        // case 2: the array don't have the value
    }

    render() {
        return(
            <React.Fragment>

            {/* Text input */}
            <div>
                <label>Name:</label>
                <input name="name" type="text" value={this.state.name} onChange={this.updateFormField}/>
            </div>

            {/* Radio */}
            <div>
                <label>Favourite Colour:</label>
                {/* <input name="colour" type="radio" value="red" checked={this.state.colour === 'red'} onChange={this.updateFormField}/>Red */}
                {/* <input name="colour" type="radio" value="blue" checked={this.state.colour === 'blue'} onChange={this.updateFormField}/>Blue */}
                {/* <input name="colour" type="radio" value="green" checked={this.state.colour === 'green'} onChange={this.updateFormField}/>Green */}
                
                {this.renderColours()}
            </div>

            {/* Select */}
            <div>
                <label>Country:</label>
                <select name="country" value={this.state.country} onChange={this.updateFormField}>
                    {/* <option value="singapore">Singapore</option> */}
                    {/* <option value="malaysia">Malaysia</option> */}
                    {/* <option value="indonesia">Indonesia</option> */}
                    
                    {this.countries.map(
                        (c) => <option key={c.value} value={c.value}>{c.display}</option>
                    )}
                </select>
            </div>

            {/* Checkboxes */}
            <div>
                <label>Fruits:</label>
                {/* <input type="checkbox" name="fruits" value="apple" checked={this.state.fruits.includes('apple')} onChange={this.updateFruits}/>Apple */}
                {/* <input type="checkbox" name="fruits" value="orange" checked={this.state.fruits.includes('orange')} onChange={this.updateFruits}/>Orange */}
                {/* <input type="checkbox" name="fruits" value="pineapple" checked={this.state.fruits.includes('pineapple')} onChange={this.updateFruits}/>Pineapple */}
                {/* <input type="checkbox" name="fruits" value="durian" checked={this.state.fruits.includes('durian')} onChange={this.updateFruits}/>Durian */}

                {this.fruits.map(
                    (f) =>
                    <React.Fragment>
                        <input key={f.value} type="checkbox" name="fruits" value={f.value} checked={this.state.fruits.includes(f.value)} onChange={this.updateFruits}/>
                        <span>{f.display}</span>
                    </React.Fragment>
                )}
            </div>

            <button>Submit</button>

        </React.Fragment>
        );
    }
}