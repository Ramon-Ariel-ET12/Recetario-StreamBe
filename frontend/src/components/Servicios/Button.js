export const Button = ({ children, type, disabled, style }) => {
    return (
        <button className="btn" type={type} disabled={disabled} style={style}>
            {children}
        </button>
    );
};

export default Button;
