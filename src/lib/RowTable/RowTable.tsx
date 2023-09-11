'use client';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Key, memo, useState } from 'react';
import { ColumnType, DataType } from '../../types/table';
import { cn } from '../../utils/style';
import CheckBox from '../CheckBox/CheckBox';
import { TableBodyStyle, TableHeaderStyle } from './style';

interface RowTableProps {
	size: 'lg' | 'sm';
	columns: ColumnType<DataType>[];
	dataSource: DataType[];
	rowSelections?: {
		selectedRowKeys: Key[];
		onselect: (keys: Key[]) => void;
	};
}

const RowTable = ({ size, columns, dataSource, rowSelections }: RowTableProps) => {
	const [sortDatas, setSortDatas] = useState(dataSource);
	const selectedRowKeys = rowSelections?.selectedRowKeys;
	const onselect = rowSelections?.onselect;

	const handleSortDatas = (
		dataSource: DataType[],
		sortDatas: DataType[],
		sorter: (a: DataType, b: DataType) => number
	) => {
		const isSorted = JSON.stringify(dataSource) !== JSON.stringify(sortDatas);

		setSortDatas(isSorted ? dataSource : [...dataSource].sort(sorter));
	};

	return (
		<table className='w-full'>
			<thead className='font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
				<tr className='flex w-full'>
					{rowSelections && (
						<th className='p-4 leading-none'>
							{onselect && (
								<CheckBox
									checked={selectedRowKeys?.length === dataSource.length}
									onChange={() =>
										selectedRowKeys?.length === dataSource.length
											? onselect([])
											: onselect(dataSource.map((record) => record.id))
									}
								/>
							)}
						</th>
					)}
					{columns &&
						columns.map((column) => (
							<th
								key={column.dataIndex}
								className={cn(TableHeaderStyle({ size }))}
								style={{ width: `${column.width}%` }}
							>
								<span>{column.title}</span>
								{column.sorter && (
									<ChevronUpDownIcon
										className='w-5 cursor-pointer'
										onClick={() => handleSortDatas(dataSource, sortDatas, column.sorter!)}
									/>
								)}
							</th>
						))}
				</tr>
			</thead>
			<tbody>
				{sortDatas.map((record) => (
					<tr
						key={record.id}
						className='flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-blue-50 hover:text-gray-900 hover:border-blue-300'
					>
						{rowSelections && (
							<td className='p-4 leading-none'>
								{selectedRowKeys && onselect && (
									<CheckBox
										checked={selectedRowKeys.includes(record.id)}
										onChange={() => {
											const newSelectedKeys = selectedRowKeys.includes(record.id)
												? selectedRowKeys.filter((key) => key !== record.id)
												: [...selectedRowKeys, record.id];

											onselect(newSelectedKeys);
										}}
									/>
								)}
							</td>
						)}
						{columns.map((column, index) => (
							<td key={index} className={cn(TableBodyStyle({ size }))} style={{ width: `${column.width}%` }}>
								{record[column.dataIndex]}
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default memo(
	RowTable,
	(prev: RowTableProps, next: RowTableProps) =>
		prev.size === next.size &&
		prev.columns === next.columns &&
		prev.dataSource === next.dataSource &&
		prev.rowSelections?.selectedRowKeys === next.rowSelections?.selectedRowKeys &&
		prev.rowSelections?.onselect === next.rowSelections?.onselect
);
