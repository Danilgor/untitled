import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import '../App.scss'
import './Table.css'

const TableDay = () => {

    const row_style = { background: 'black' };
    //const [rowData, setRowData] = useState([]);

    let rowData = [
        {date: '22.06.2021', price: 1735, qty: 3},
        {date: '22.05.2021', price: 1735, qty: 1},
        {date: '22.05.2020', price: 1735, qty: 1},
        {date: '19.06.2021', price: 1735, qty: 0},
        {date: '18.06.2021', price: 1845, qty: 3},
        {date: '17.06.2021', price: 1845, qty: 1},
        {date: '16.06.2021', price: 1845, qty: 0},
        {date: '15.06.2021', price: 1845, qty: 1},
        {date: '14.06.2021', price: 1845, qty: 3},
        {date: '13.06.2021', price: 1845, qty: 1},
        {date: '12.06.2021', price: 1845, qty: 0},
        {date: '11.06.2021', price: 1845, qty: 2},
        {date: '10.06.2021', price: 1600, qty: 2},
        {date: '09.06.2021', price: 1500, qty: 1}
    ];

//     useEffect(() => {
//     fetch('http://localhost:3000/products')
//         .then(result => result.json())
//         .then(rowData => setRowData(rowData))
// }, []);

    // (function (item, index, rowData) {
    //     return rowData[0].date;
    // })
    //
    // let result = rowData.date
    //     .sort((a, b) => new Date(a).getTime() > new Date(b).getTime() ? 1 : -1)
    // console.log(result)

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

    const getContextMenuItems = () => {
    let result = [
      {
        name: 'Open this day',
        action: function () {
            // eslint-disable-next-line no-restricted-globals
          open('http://localhost:3000/tabletime');
        },
      }
    ];
    return result;
  };

    return (
        <div>
            <div className="ag-theme-balham" row_style={row_style} style={{ height: 687, width: 647}}>
                <AgGridReact defaultColDef={{
                    width: 215,
                    editable: false,
                    filter: 'agNumberColumnFilter',
                    floatingFilter: true,
                    resizable: false,
                }}
                             getContextMenuItems={getContextMenuItems}
                             popupParent={document.querySelector('body')}
                             enableRangeSelection={true}
                             clipboardDeliminator={' '}
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
                                 filter: 'agDateColumnFilter',
                                 filterParams: {
                                     comparator: function (filterLocalDateAtMidnight, cellValue) {
                                         const dateParts = cellValue.split('.');
                                         const day = Number(dateParts[0]);
                                         const month = Number(dateParts[1]) - 1;
                                         const year = Number(dateParts[2]);
                                         const cellDate = new Date(year, month, day);
                                         if (cellDate < filterLocalDateAtMidnight) {
                                             return -1;
                                         } else if (cellDate > filterLocalDateAtMidnight) {
                                             return 1;
                                         } else {
                                             return 0;
                                         }
                                         },
                                 },
                             },
                         }}
                         rowData={rowData}
            >
                <AgGridColumn
                    field="date"
                    minWidth={215}
                    filter="agDateColumnFilter"
                    type={['dateColumn', 'nonEditableColumn']}
                    comparator={dateComparator}
                    sortable={true}
                />
                <AgGridColumn
                    headerName="price"
                    minWidth={215}
                    field="price"
                    sortable={true}
                    valueFormatter={currencyFormatter}
                />
                <AgGridColumn
                    headerName="qty"
                    minWidth={215}
                    field="qty"
                    sortable={true}
                    valueFormatter={textFormatter}
                />
                </AgGridReact>
            </div>
        </div>
    )
}

function dateComparator(date1, date2) {
  let date1Number = monthToComparableNumber(date1);
  let date2Number = monthToComparableNumber(date2);
  if (date1Number === null && date2Number === null) {
    return 0;
  }
  if (date1Number === null) {
    return -1;
  }
  if (date2Number === null) {
    return 1;
  }
  return date1Number - date2Number;
}
function monthToComparableNumber(date) {
  if (date === undefined || date === null || date.length !== 10) {
    return null;
  }
  let yearNumber = date.substring(6, 10);
  let monthNumber = date.substring(3, 5);
  let dayNumber = date.substring(0, 2);
  let result = yearNumber * 10000 + monthNumber * 100 + dayNumber;
  return result;
}

export default TableDay