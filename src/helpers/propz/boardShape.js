import PropTypes from 'prop-types';

const boardShape = PropTypes.shape({
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { boardShape };
