import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool,
    children: PropTypes.node
  };

  render() {
    const { black } = this.props;
    const color = black ? 'white' : 'black';
    let classes = 'Square'
    classes += black ? ' Black' : '';

    return (
      <div className={classes} style={{
        width: '100%',
        height: '100%'
      }}>
        {this.props.children}
      </div>
    );
  }
}
