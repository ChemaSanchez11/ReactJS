import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Auth0Provider } from "@auth0/auth0-react";
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/index.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(

        <Auth0Provider
            domain="dev-bkw65qrh8wkf1udw.us.auth0.com"
            clientId="9zzgD8DBgsF3jPKSHCeXDxrO0Emzlkdc"
            authorizationParams={{
                redirect_uri: window.location.origin
            }}>
            <RouterProvider router={router}></RouterProvider>
        </Auth0Provider>
)