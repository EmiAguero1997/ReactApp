import Rendered from "./rendered";

function Renderer(){
    function handleClick(){
        console.log('click');
    }
    return(
        <>
            <Rendered mensaje='Rendered' click={handleClick}></Rendered>
        </>
    )
}
export default Renderer