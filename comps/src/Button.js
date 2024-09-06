import PropTypes from 'prop-types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';
//  when items, including text, are entered between component tags, it is passed to the component via a special prop called "children"
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest /// ...rest will gather the remaining props and assign them to object named rest.
  ///  They can then be passed down to the intended component with {...rest} syntax, see below for the button component return
}) {
  const classNameText = twMerge(
    classNames(
      rest.className,
      'flex items-center',
      'px-3',
      'py-1.5',
      'border',
      {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-400 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
      },
      className || ''
    )
  );
  console.log(classNameText);
  return (
    <button {...rest} className={classNameText}>
      {children}
    </button>
  );
}

Button.propTypes = {
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error('only one of the variation props can be true');
    }
  },
};

export default Button;
