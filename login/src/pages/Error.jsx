import 'react';
import {Link, useRouteError} from "react-router-dom";

function Error() {

    const miError = useRouteError();
    console.log(miError);

    return (
        <div className="Error">
            <h1>{miError.status} {miError.statusText || miError.message} </h1>
            <Link to="/">Volver al menu</Link>
        </div>
    )
}

export default Error
