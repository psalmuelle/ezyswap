import React from "react";
import { useParams } from "react-router-dom";


// Add a redirect and put it in a loader in the router provider of this page to make sure authenticated user can only access this page

//Make us of useLoaderData and call API to get pair details.

const PairDetails = ()=>{
    const user = false;
    const {pairId} = useParams();

    return(
        <div>
         <div>This is the {pairId}</div>
        </div>
    )
}


export default PairDetails;