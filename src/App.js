import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import Slide from "./Slide";
import {bindActionCreators} from "redux";
import {changeCursor} from "./store/actions/changeCursor";
import {tick} from "./store/actions/tick";

class App extends Component {
    componentDidMount(){
        this.props.tick(this.props.slide.cursor, this.props.feed.length);
    }

    render() {
        let slideQueue = [];
        let index = (this.props.slide.cursor - 1 + this.props.feed.length) % this.props.feed.length;
        slideQueue.push(<Slide
            item={this.props.feed[index]}
            key={index}
            id={index}
            isActive={this.props.slide.cursor === index}
            setSlide={this.props.setSlide}
        />);
        index = this.props.slide.cursor;
        slideQueue.push(<Slide
            item={this.props.feed[index]}
            key={index}
            id={index}
            isActive={this.props.slide.cursor === index}
            setSlide={this.props.setSlide}
        />);
        index = (this.props.slide.cursor + 1) % this.props.feed.length;
        slideQueue.push(<Slide
            item={this.props.feed[index]}
            key={index}
            id={index}
            isActive={this.props.slide.cursor === index}
            setSlide={this.props.setSlide}
        />);
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

function mapDispatchToProps(dispatch) {
    return {
        setSlide: bindActionCreators(changeCursor, dispatch),
        tick: bindActionCreators(tick, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
