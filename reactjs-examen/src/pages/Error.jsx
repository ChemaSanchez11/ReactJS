import 'react';
import {Link, useRouteError} from "react-router-dom";

function Error() {

    const miError = useRouteError();

    return (
        <div className="Error text-danger text-center">
            <h1>{miError.status} {miError.statusText || miError.message} </h1>
            <Link to="/">Volver</Link>
        </div>
    )
}

export default Error
