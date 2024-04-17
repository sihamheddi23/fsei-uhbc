"use client";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { AgGridReact } from "ag-grid-react";

interface ColumnType {
	headerName?: string
	field?: string
	cellRenderer?: (props: any) => any,
	flex?: number
}

interface ResourceDataTableProps {
	columns: ColumnType[],
	data: any,
}

const ResourceDataTable: React.FC<ResourceDataTableProps> =  ({columns, data}) => {
	return <div className='ag-theme-alpine h-[200px] max-h-[400px] w-[100%] overflow-auto my-5'>
		<AgGridReact rowData={data} columnDefs={columns} enableRtl={true}  />
	</div>
};

export default ResourceDataTable