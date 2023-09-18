import React from 'react'
import {Spinner} from "@nextui-org/spinner";

function Loader() {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left:'50%',
        }}>
            <Spinner size="lg"/>
        </div>
    )
}

export default Loader
