'use client';

import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { ReactNode } from 'react';
import { ColumnType, TableCheckBoxType } from '../../../types/table';
import CheckBox from '../../CheckBox/CheckBox';
import Tooltip from '../../Tooltip/Tooltip';

interface TheadProps {
	columns: ColumnType<any>;
	checkBox?: TableCheckBoxType;
	sortDatas: any[];
	onSort: (dataIndex: any) => void;
}

const Thead = ({ columns, checkBox, sortDatas, onSort }: TheadProps) => {
	const selected = checkBox?.selected;
	const isAllCheck = selected?.length === sortDatas.length;

	const onSelect = (seleted: ReactNode[]) => {
		checkBox?.onSelect(seleted);
	};

	return (
		<thead className='text-sm font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
			<tr className='flex'>
				{checkBox && (
					<th className='p-4 leading-[0px]'>
						<CheckBox checked={isAllCheck} onChange={() => (isAllCheck ? onSelect([]) : onSelect(sortDatas))} />
					</th>
				)}
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
