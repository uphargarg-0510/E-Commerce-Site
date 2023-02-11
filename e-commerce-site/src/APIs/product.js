function Pro({ proobj }) {
    return (
        <div style={{
            margin:'2px',
            border: '2px solid black',
            width:'25vw',
            height:'55vh'
        }}>
            <img
                style={{
                    width: '130px',
                    height: '130px',
                }}
                src={proobj.image}
                alt={"product"}
            >
            </img>
            <h3>{proobj.title}</h3>
            <p>{proobj.description}</p>
        </div>
    )
}

export default Pro;
