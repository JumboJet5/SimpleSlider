import React, {Component} from 'react';
import './css/App.css';
import {connect} from "react-redux";
import Slide from "./Slide";
import {bindActionCreators} from "redux";
import {changeCursor} from "./store/actions/changeCursor";
import {start} from "./store/actions/start";
import {stop} from "./store/actions/stop";
import PropTypes from "prop-types";

class App extends Component {
    componentDidMount() {
        this.props.start();
    }

    render() {
        let circles = this.props.feed.slider.map((_, index) =>
            index === this.props.slide.cursor ?
                <span role="img"
                      aria-label="active"
                      key={index}
                      onClick={() => this.props.setSlide(index)}>&#9899;</span> :
                <span role="img"
                      aria-label="non-active"
                      key={index}
                      onClick={() => this.props.setSlide(index)}>&#9898;</span>
        );
        let slideQueue = [];
        let index = (this.props.slide.cursor - 1 + this.props.feed.slider.length) % this.props.feed.slider.length;
        slideQueue.push(<Slide
            item={this.props.feed.slider[index]}
            key={index}
            id={index}
            isActive={false}
            setSlide={this.props.setSlide}
            stop={this.props.stop}
            start={this.props.start}
        />);
        index = this.props.slide.cursor;
        slideQueue.push(<Slide
            item={this.props.feed.slider[index]}
            key={index}
            id={index}
            isActive={true}
            setSlide={this.props.setSlide}
            stop={this.props.stop}
            start={this.props.start}
        />);
        index = (this.props.slide.cursor + 1) % this.props.feed.slider.length;
        slideQueue.push(<Slide
            item={this.props.feed.slider[index]}
            key={index}
            id={index}
            isActive={false}
            setSlide={this.props.setSlide}
            stop={this.props.stop}
            start={this.props.start}
        />);
        return (
            <div className="App">
                <div className="in-row">
                    {slideQueue}
                </div>
                <p>{circles}</p>
            </div>
        );
    }
}

App.propTypes = {
    setSlide: PropTypes.func,
    start: PropTypes.func,
    stop: PropTypes.func,
    feed: PropTypes.shape({
        slider: PropTypes.arrayOf(PropTypes.shape({
            hero: PropTypes.string,
            text: PropTypes.string,
            image: PropTypes.string
        }))
    }),
    slide: PropTypes.shape({
        cursor: PropTypes.number,
        auto: PropTypes.bool,
        skip: PropTypes.number
    })
};

App.defaultProps = {
    setSlide: () => 'setSlide',
    start: () => 'start',
    stop: () => 'stop',
    feed: {
        slider: [{
            hero: "url1",
            text: "test",
            image: "url2"
        }]
    },
    slide: {
        cursor: 0,
        auto: false,
        skip: 0
    },
};

function mapStateToProps(state) {
    return {
        feed: state.feed,
        slide: state.slide
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSlide: bindActionCreators(changeCursor, dispatch),
        start: bindActionCreators(start, dispatch),
        stop: bindActionCreators(stop, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
