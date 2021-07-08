import React, {Fragment, useEffect, useState} from 'react';
import TableDay from "./table/TableDay";
import TableTime from "./table/TableTime";

import './table/rectangle.css'

const SwitchTable = ({children}) => (
    <div>
        <a href='http://localhost:3000/tableday'>tableday</a>
        <br></br>
        <a href='http://localhost:3000/tabletime'>tabletime</a>
        <Fragment>
            {children}
        </Fragment>
    </div>
)

export default SwitchTable;
