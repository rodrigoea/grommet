import PropTypes from 'prop-types';
import { colorPropType, genericProps } from '../../utils/general-prop-types';

let PropType = {};
if (process.env.NODE_ENV !== 'production') {
  PropType = {
    ...genericProps,
    color: colorPropType,
    fill: PropTypes.bool,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
    responsive: PropTypes.bool,
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ]),
    textAlign: PropTypes.oneOf(['start', 'center', 'end', 'justify']),
    truncate: PropTypes.bool,
  };
}
export const HeadingPropTypes = PropType;
