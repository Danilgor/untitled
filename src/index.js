import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import SwitchTable from "./SwitchTable";
import TableDay from "./table/TableDay";
import TableTime from "./table/TableTime";

ReactDOM.render((
    <BrowserRouter>
        <App>
            <Switch>
                <Route exact path='/' component={SwitchTable} />
                <Route path='/tableday' component={TableDay} />
                <Route path='/tabletime' component={TableTime} />
            </Switch>
        </App>
    </BrowserRouter>
    ),
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
