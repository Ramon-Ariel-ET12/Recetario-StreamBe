
export const Card = ({ children, className = '', style }) => {
    return (
        <div className={`card ${className}`} style={{ padding: '20px', width: 'fit-content', height: 'fit-content', ...style }}>
            {children}
        </div>
    );
}

export default Card;