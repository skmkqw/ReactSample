import NestedL3 from "./NestedL3.jsx";
function NestedL2()
{
    const styles = {
        padding: 20 + 'px',
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#797979',
        flex: '0 1 80%'
    }

    return (
        <div className='card' style={styles}>
            <h3>Layer 2</h3>
            <NestedL3 />
        </div>
    );
}

export default NestedL2