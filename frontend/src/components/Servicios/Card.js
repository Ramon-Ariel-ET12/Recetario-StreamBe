


export const Card = ({ children, style  }) => {
    return (
        <div className="card" style={{ padding:'20px', width: 'fit-content', height: 'fit-content', ...style }}>
            {children }
        </div>
    );
}

export default Card;