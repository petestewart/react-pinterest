import PropTypes from 'prop-types';

const pinShape = PropTypes.shape({
  boardId: PropTypes.string.isRequired,
  pinId: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export default { pinShape };
