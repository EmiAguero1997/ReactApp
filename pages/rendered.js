function Rendered(props){
    return(
        <>
            <h2>{props.mensaje}</h2>
            <button onClick={props.click}>Click</button>
        </>
    )
}
export default Rendered