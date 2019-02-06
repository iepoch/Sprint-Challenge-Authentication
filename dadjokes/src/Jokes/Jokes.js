import React, { Component } from 'react';
import axios from 'axios'


class Jokes extends Component {
    state = {
        jokes: []
    }

    signout = () => {
        localStorage.removeItem('jwt')
        this.setState({ jokes: [] })
    }
    componentDidMount = () => {
        const token = localStorage.getItem('jwt')
        const endpoint = 'http://localhost:3300/api/jokes'
        const options = {
            headers: {
                Authorization: token
            }
        }
        this.forceUpdate();
        axios.get(endpoint, options)
            .then(res => {
                this.setState({
                    jokes: res.data
                })
            })
            .catch(err => {
                console.log('error', err)
            })

    }
    render() {
        return (
            <div>
                <h2>Dad Jokes </h2>
                {this.state.jokes.map(joke => (
                    <li key={joke.id}>{joke.joke}</li>))}


            </div>
        )
    }
}



export default Jokes;