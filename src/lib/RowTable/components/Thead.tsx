'use client';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ColumnType } from '../../../types/table';
import Tooltip from '../../Tooltip/Tooltip';

interface TheadProps {
	columns: ColumnType<any>;
	onSort: (dataIndex: any) => void;
}

const Thead = ({ columns, onSort }: TheadProps) => {
	return (
		<thead className='text-sm font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
			<tr className='flex'>
				{columns.map((column, index) => (
					<th
						key={index}
						className='flex items-center gap-2 px-4 py-2'
						style={{ width: `${column.width}%`, minWidth: column.minWidth }}
					>
						<span>{column.title}</span>
						{column.sorter && (
							<div className='flex items-center justify-center cursor-pointer w-7 h-7'>
								<ChevronUpDownIcon className='w-5 h-5' onClick={() => onSort(column.dataIndex)} />
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
