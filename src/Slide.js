import React, {Component} from 'react';
import './css/Slide.css';

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
                    alt={this.props.text}
                    onClick={() => this.props.setSlide(this.props.id)}
                />
            </div>
        );
    }
}


export default Slide;
