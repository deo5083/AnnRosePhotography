import React, { Component } from 'react';

class Image extends Component {
    render() {
        return (
            <img
                // style={{
                //     maxWidth: this.props.maxWidth,
                //     height: "auto"
                // }}
                className={this.props.classNames}
                src={this.props.source}
                alt={this.props.alt}
            />
        );
    }
}
// Image.defaultProps = {
//     maxWidth: '900px'
// };
export default Image;