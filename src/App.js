import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";

class App extends Component {
    render() {
        let img = this.props.feed.map((item) => <img src={item.hero}/>);
        return (
            <div className="App">
                {img}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        feed: state.feed,
        slide: state.slide
    }
}

export default connect(mapStateToProps)(App);
