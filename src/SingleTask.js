import React from 'react';
import { Button } from 'reactstrap';


    const SingleTask = props =>{
        return(
            <li key={props}>{props.task} <Button className="btn btn-sm btn-danger" 
            onClick={ props.delete} > x </Button>
            </li>
            );
        }
export default SingleTask;