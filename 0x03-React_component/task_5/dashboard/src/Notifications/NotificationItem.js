import React from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, value, html, markAsRead, id } = this.props;
    
    return (
      value ? 
        <li data-notification-type={type} onClick={() => markAsRead(id)}>
          {value}
        </li> 
        :
        <li data-notification-type={type} dangerouslySetInnerHTML={html} onClick={() => markAsRead(id)}>
        </li>
    );
  }
}

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: 0,
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

export default NotificationItem;