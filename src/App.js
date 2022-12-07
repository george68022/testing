import Search from "./Search";
import CardList from "./CardList";
import React from "react";
import "./App.css";
import ScrollableContainer from "./ScrollableContainer";

class App extends React.Component {

    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }
    
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
    }

    
    render () {
        const filteredRobots = this.state.robots.filter( robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });

        if(this.state.robots.length === 0){
            return(<h1>LOADING...</h1>)
        }
        else{
            return(
                <div className="tc">
                    <h1 className="f-subheadline">Robohomies</h1>
                    <Search searchChange = {this.onSearchChange}/>
                    <ScrollableContainer>
                        <CardList robots = {filteredRobots} />
                    </ScrollableContainer>
                </div>
            )
        }

    }
}

export default App;