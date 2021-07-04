import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import '../App.scss'
import './Table.css'

const TableTime = (props) => {

    const row_style = { background: 'black' };
    //const [rowData, setRowData] = useState([]);

    let rowData = [
        {time: '00:26', price: 1735, qty: 3},
        {time: '01:24', price: 1735, qty: 1},
        {time: '02:23', price: 1735, qty: 1},
        {time: '03:23', price: 1735, qty: 0},
        {time: '04:22', price: 1845, qty: 3},
        {time: '05:22', price: 1845, qty: 1},
        {time: '06:22', price: 1845, qty: 0},
        {time: '07:23', price: 1845, qty: 1},
        {time: '08:23', price: 1845, qty: 3},
        {time: '09:24', price: 1845, qty: 1},
        {time: '10:25', price: 1845, qty: 0},
        {time: '11:26', price: 1845, qty: 2},
        {time: '12:27', price: 1600, qty: 2},
        {time: '13:27', price: 1500, qty: 1},
    ];

//     useEffect(() => {
//     fetch('http://localhost:3000/products')
//         .then(result => result.json())
//         .then(rowData => setRowData(rowData))
// }, []);

    function formatNumber(number) {
        return Math.floor(number)
            .toString()
    }

    function currencyFormatter(params) {
        return formatNumber(params.value) + ' ₽';
    }
    function textFormatter(params) {
        return formatNumber(params.value) + ' шт';
    }


    return (
            <div className="ag-theme-balham" row_style={row_style} style={{ height: 687, width: 647}}>
                <AgGridReact defaultColDef={{
                    width: 215,
                    editable: false,
                    filter: 'agNumberColumnFilter',
                    floatingFilter: true,
                    resizable: false,
                }}
                             popupParent={document.querySelector('body')}
                             debounceVerticalScrollbar={true}
                             enableRangeSelection={true}
                             clipboardDeliminator={' '}
                             defaultColGroupDef={{ marryChildren: true }}
                             columnTypes={{
                                 numberColumn: {
                                 width: 215,
                                 filter: 'agNumberColumnFilter',
                             },
                             medalColumn: {
                                 width: 215,
                                 filter: false,
                             },
                             nonEditableColumn: { editable: false },
                             dateColumn: {
                                 width: 215,
                                 filter: 'agNumberColumnFilter',
                             },
                         }}
                         rowData={rowData}
            >
                <AgGridColumn
                    field="time"
                    minWidth={215}
                    filter="agNumberColumnFilter"
                    sortable={true}
                />
                <AgGridColumn
                    headerName="price"
                    field="price"
                    sortable={true}
                    valueFormatter={currencyFormatter}
                />
                <AgGridColumn
                    headerName="qty"
                    field="qty"
                    sortable={true}
                    valueFormatter={textFormatter}
                />
                </AgGridReact>
            </div>
    )
}

export default TableTime