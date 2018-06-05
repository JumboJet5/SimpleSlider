import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import Slide from "./Slide";

class App extends Component {
    render() {
        let slideQueue = [];
        let index = (this.props.slide.cursor - 1 + this.props.feed.length) % this.props.feed.length;
        slideQueue.push(<Slide
            item={this.props.feed[index]}
            key={index}
            isActive={this.props.slide.cursor === index}/>);
        index = this.props.slide.cursor;
        slideQueue.push(<Slide
            item={this.props.feed[index]}
            key={index}
            isActive={this.props.slide.cursor === index}/>);
        index = (this.props.slide.cursor + 1) % this.props.feed.length;
        slideQueue.push(<Slide
            item={this.props.feed[index]}
            key={index}
            isActive={this.props.slide.cursor === index}/>);
        return (
            <div className="App in-row">
                {slideQueue}
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
