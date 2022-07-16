
function Card(props){
    return(
        <>
        <div className="container">
            <div className="cardBody">
                <img className='image' alt='100' src="54a7bd0c0d9033785e7f6f2c234024e3.jpg" />
                <div className='texts'>
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <button disabled={props.disabled} onClick={()=>props.clickCounter(1)}>Click me to pass data to parent</button>
                </div>
            </div>
            
        </div>
        
        </>
    )
}
export default Card