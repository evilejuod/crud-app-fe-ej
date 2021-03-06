import css from './Icon.module.css'

function Icon({ icon, red, green, className, onClick }){
    const iconColor = () => {
        if (red) return css.red;
        if (green) return css.green;
        return css.orange;
    };

    return(
        <span onClick={onClick} className={iconColor() + (!className ? ` ${className}` : '') }>
          <i className={`fa ${icon}`} aria-hidden='true' />
        </span>
    )
}
export default Icon;