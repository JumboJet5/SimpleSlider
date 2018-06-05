import React, {Component} from 'react';
import './Slide.css';

class Slide extends Component {
    render() {
        let width = this.props.isActive ? '640px' : '320px';
        let height = this.props.isActive ? '480px' : '240px';

        return (
            <div className="Slide">
                <img
                    src={this.props.item.hero}
                    style={{
                        width: width,
                        height: height,
                    }}
                    className={this.props.isActive?'isActive':'isNotActive'}
                    alt={this.props.text}
                />
            </div>
        );
    }
}

export default Slide;
