
export default function Modal(props: { children: React.ReactNode }) {
    return (
        <div
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '2px solid black',
                padding: '10px'
            }}
        >
            {props.children}

            <a href="/">close</a>
        </div>
    )
}