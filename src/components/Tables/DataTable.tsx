"use client"
import { DataType, SortingMode, Table } from 'ka-table'
import React from 'react'

function DataTable() {
 const dataArray = Array(10).fill(undefined).map(
    (_, index) => ({
        column1: `column:1 row:${index}`,
        column2: `column:2 row:${index}`,
        column3: `column:3 row:${index}`,
        column4: `column:4 row:${index}`,
        id: index,
    }),
);
  return (
      <div>
        <Table
            columns={[
                { key: 'column1', title: 'Column 1', dataType: DataType.String },
                { key: 'column2', title: 'Column 2', dataType: DataType.String },
                { key: 'column3', title: 'Column 3', dataType: DataType.String },
                { key: 'column4', title: 'Column 4', dataType: DataType.String },
            ]}
            data={dataArray}
            rowKeyField={'id'}
            sortingMode={SortingMode.Single}
        />
    </div>
  )
}

export default DataTable