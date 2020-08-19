import React from 'react';
import pinShape from '../../helpers/propz/boardShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="card">
        <img className="card-img" src={pin.url} alt={pin.pinId} />
      </div>
    );
  }
}

export default Pin;
