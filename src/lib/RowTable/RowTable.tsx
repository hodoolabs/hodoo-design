'use client';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { Key, memo, useState } from 'react';
import { ColumnDataType, ColumnType } from '../../types/table';
import { cn } from '../../utils/style';
import CheckBox from '../CheckBox/CheckBox';
import Tooltip from '../Tooltip/Tooltip';
import { TableBodyStyle, TableHeaderStyle } from './style';
import { stringify } from 'flatted';

interface RowTableProps {
	size: 'lg' | 'sm';
	columns: ColumnType<ColumnDataType>[];
	dataSource: ColumnDataType[];
	rowSelections?: {
		selectedRowKeys: Key[];
		onselect: (keys: Key[]) => void;
	};
	width?: number;
}

const RowTable = ({ size, columns, dataSource, rowSelections, width }: RowTableProps) => {
	const [sortDatas, setSortDatas] = useState(dataSource);
	const selectedRowKeys = rowSelections?.selectedRowKeys;
	const onselect = rowSelections?.onselect;

	const handleSortDatas = (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => {
		const isSorted = stringify(dataSource) !== stringify(sortDatas);

		setSortDatas(isSorted ? dataSource : [...dataSource].sort(sorter));
	};

	return (
		<div className='overflow-x-auto'>
			<table className='w-full' style={{ minWidth: `${width}px` }}>
				<thead className='font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
					<tr className='flex'>
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
											className='w-5 ml-2 cursor-pointer'
											onClick={() => handleSortDatas(dataSource, sortDatas, column.sorter!)}
										/>
									)}
									{column.tooltip && (
										<div className='flex ml-2 item-center'>
											<Tooltip
												color={column.tooltip.color}
												title={column.tooltip.title}
												isShowArrow={column.tooltip.isShowArrow}
												position={column.tooltip.position}
											>
												<QuestionMarkCircleIcon className='w-5 text-gray-400 cursor-pointe' />
											</Tooltip>
										</div>
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
		</div>
	);
};

export default memo(
	RowTable,
	(prev: RowTableProps, next: RowTableProps) =>
		prev.size === next.size &&
		prev.columns === next.columns &&
		prev.dataSource === next.dataSource &&
		prev.rowSelections?.selectedRowKeys === next.rowSelections?.selectedRowKeys &&
		prev.rowSelections?.onselect === next.rowSelections?.onselect &&
		prev.width === next.width
);
