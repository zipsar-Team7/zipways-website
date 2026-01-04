import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ 
  children, 
  variant = 'default',
  hoverable = false,
  className = '' 
}) => {
  const classNames = [
    'card',
    `card-${variant}`,
    hoverable ? 'card-hoverable' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'bordered', 'elevated']),
  hoverable: PropTypes.bool,
  className: PropTypes.string
};

export default Card;
