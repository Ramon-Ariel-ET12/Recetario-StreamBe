export const Button = ({ children, onClick, type, disabled, style }) => {
    return (
        <button className="btn" type={type} onClick={onClick} disabled={disabled} style={style}>
            {children}
        </button>
    );
};

export default Button;
