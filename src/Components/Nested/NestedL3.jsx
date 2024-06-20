import NestedL4 from "./NestedL4.jsx";

function NestedL3()
{
    const styles = {
        padding: 20 + 'px',
        display: 'flex',
        justifyContent: 'space-between',
        flex: '0 1 80%'
    }

    return (
        <div className='card' style={styles}>
            <h4>Layer 3</h4>
            <NestedL4 />
        </div>
    );
}

export default NestedL3