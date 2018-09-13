import React, { Component } from 'react';


class table extends Component {
    
    render() {

        var columns = this.props.tableData.columns;
        var rows = this.props.tableData.rows;
        var tableheaders = (<thead>
            <tr>{columns.map(function (column) {
                return <th>{column}</th>
            })}</tr>
        </thead>)


        var tableBody = rows.map(function (row) {
            return (
                <tr>
                    {columns.map(function (column) {
                        return <td>{row[column]}
                        {console.log(column)}
                        </td>
                        
                    })}
                </tr>)
        })
        return <table>
            {tableheaders}
            {tableBody}
            
        </table >

        
    }
}

export default table;