import * as React from 'react';
import './Popup.css';

interface Props {
  title: string;
  message: string;
}

export default class Popup extends React.PureComponent<Props> {
  render() {
    const {
      title,
      message,
    } = this.props;

    return (
      <div className="popup-wrapper fadeIn">
        <div className="popup">
          <div className="message">
            <h2>
              {title}
            </h2>
            <small>
              {message}
            </small>
          </div>
        </div>
      </div>
    );
  }
}