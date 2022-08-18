import {appContext} from './appContext';
import { useRouter } from 'next/router';
import { useContext } from 'react';

export function routeGuard(Component){
    return function RouteGuard(props){
        const auth= useContext(appContext);
        const router = useRouter();
        console.log('auth.user: ',auth.user)
        if(!auth.user){
            router.replace("/login");
            return <h1>Loading...</h1>;
        }

        return <Component {...props} />;
    }
}