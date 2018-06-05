import React, {Component} from 'react';

class Slide extends Component {
    render() {
        let size = this.props.isActive ? '100%' : '50%';
        return (
            <div className="Slide">
                <img
                    src={this.props.item.hero}
                    style={{
                        maxWidth: size,
                        maxHeight: size,
                    }}
                />
            </div>
        );
    }
}

export default Slide;
