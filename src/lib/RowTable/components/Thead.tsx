import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { memo } from 'react';
import { cn } from '../../../utils/style';
import { TableHeaderStyle } from '../style';
import { ColumnDataType, ColumnType } from '../../../types/table';
import Tooltip from '../../Tooltip/Tooltip';

interface TheadProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	dataSource: any[];
	sortDatas: any[];
	onSort: (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => void;
}

const Thead = ({ size, columns, dataSource, sortDatas, onSort }: TheadProps) => {
	return (
		<thead className='font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
			<tr className='flex'>
				{columns?.map((column, index) => (
					<th key={index} className={cn(TableHeaderStyle({ size }))} style={{ width: `${column.width}%` }}>
						<span className='my-1 leading-5'>{column.title}</span>
						{column.sorter && (
							<ChevronUpDownIcon
								className='w-5 m-1 ml-3 cursor-pointer'
								onClick={() => onSort(dataSource, sortDatas, column.sorter!)}
							/>
						)}
						{column.tooltip && (
							<Tooltip {...column.tooltip} className='inline-flex m-1 ml-3 item-center'>
								<QuestionMarkCircleIcon className='w-5 text-gray-400 cursor-pointer' />
							</Tooltip>
						)}
					</th>
				))}
			</tr>
		</thead>
	);
};

export default memo(
	Thead,
	(prev: TheadProps, next: TheadProps) =>
		prev.size === next.size &&
		prev.columns === next.columns &&
		prev.dataSource === next.dataSource &&
		prev.sortDatas === next.sortDatas &&
		prev.onSort === next.onSort
);
