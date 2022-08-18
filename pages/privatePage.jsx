import {routeGuard} from './context/routeGuard';

function privatePage(){
    return(
        <>
            <h2>THIS IS A PRIVATE PAGE, U ONLY WILL BE ABLE TO SEE THIS IF U R LOGED IN</h2>
        </>
    )
}

export default routeGuard(privatePage);