import cookie from '../../tenor.gif'

export const Loading = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={cookie} style={{ height: '15vh', }} alt="Loading..." />
        </div>
    );
}

export default Loading;