import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import Slide from "./Slide";

class App extends Component {
    render() {
        let img = this.props.feed.map((item, index) =>
            <Slide
                item={item}
                key={index}
                isActive={this.props.slide.cursor === index}/>);
        return (
            <div className="App in-row">
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
