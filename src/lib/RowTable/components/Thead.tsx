'use client';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ColumnDataType, ColumnType } from '../../../types/table';
import Tooltip from '../../Tooltip/Tooltip';

interface TheadProps {
	columns: ColumnType<any>;
	dataSource: any[];
	sortDatas: any[];
	onSort: (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => void;
}

const Thead = ({ columns, dataSource, sortDatas, onSort }: TheadProps) => {
	return (
		<thead className='text-sm font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
			<tr className='flex'>
				{columns.map((column, index) => (
					<th
						key={index}
						className='flex items-center gap-2 px-4 py-2 min-w-fit grow'
						style={{ width: `${column.width}%`, minWidth: column.fixWidth, maxWidth: column.fixWidth }}
					>
						<span>{column.title}</span>
						{column.sorter && (
							<div className='flex items-center justify-center cursor-pointer w-7 h-7'>
								<ChevronUpDownIcon className='w-5 h-5' onClick={() => onSort(dataSource, sortDatas, column.sorter!)} />
							</div>
						)}
						{column.tooltip && (
							<Tooltip {...column.tooltip} className='flex items-center justify-center cursor-pointer w-7 h-7'>
								<QuestionMarkCircleIcon className='w-5 text-gray-400 cursor-pointer' />
							</Tooltip>
						)}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default Thead;
