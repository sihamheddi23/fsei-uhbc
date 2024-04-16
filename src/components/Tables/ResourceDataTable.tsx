"use client";
import DataTable from 'react-data-table-component';

const customStyles = {
	headCells: {
		style: {
			backgroundColor: '#f8f8f8',
		},
	},
}

interface ColumnType {
	name?: string
	selector?: (row: any) => any
	sortable?: boolean,
	cell?: (row: any) => any
}

interface ResourceDataTableProps {
	columns: ColumnType[],
	data: any
}

const ResourceDataTable: React.FC<ResourceDataTableProps> =  ({columns, data}) => {
	return (
		<div className='my-6'>
			<DataTable
				columns={columns}
				data={data}
				customStyles={customStyles}
				pagination={true}
		   />
	    </div>
	);
};

export default ResourceDataTable