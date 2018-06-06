import React, {Component} from 'react';
import './css/Slide.css';
import PropTypes from 'prop-types'

class Slide extends Component {
    render() {
        return (
            <div className="Slide">
                <img
                    src={this.props.item.image}
                    alt={this.props.item.text}
                    className={this.props.isActive ? 'is-active' : 'is-not-active'}
                />
                <p>{this.props.item.text}</p>
                <img
                    src={this.props.item.hero}
                    onMouseOver={() => this.props.stop()}
                    onMouseOut={() => this.props.start()}
                    className={this.props.isActive ? 'is-active-hero' : 'is-not-active-hero'}
                    alt={this.props.item.text}
                    onClick={() => this.props.setSlide(this.props.id)}
                />
            </div>
        );
    }
}

Slide.propTypes = {
    item: PropTypes.shape({
        hero: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string
    }),
    isActive: PropTypes.bool,
    id: PropTypes.number,
    start: PropTypes.func,
    stop: PropTypes.func,
    setSlide: PropTypes.func
};

Slide.defaultProps = {
    item: {
        hero: "url1",
        text: "text",
        image: "url2"
    },
    isActive: false,
    id: 0,
    start: () => 'startSlide',
    stop: () => 'stopSlide',
    setSlide: () => 'slide'
};

export default Slide;
