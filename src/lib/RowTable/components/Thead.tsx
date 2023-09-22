import { ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import { Key, memo } from 'react';
import { ColumnDataType, ColumnType } from '../../../types/table';
import { cn } from '../../../utils/style';
import CheckBox from '../../CheckBox/CheckBox';
import Tooltip from '../../Tooltip/Tooltip';
import { TableHeaderStyle } from '../style';

interface TheadProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	dataSource: any[];
	checkedList?: Key[];
	sortDatas: any[];
	onChecked?: (keys: Key[]) => void;
	onSort: (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => void;
}

const Thead = ({ size, columns, dataSource, checkedList, sortDatas, onChecked, onSort }: TheadProps) => {
	return (
		<thead className='font-semibold text-gray-500 border-b border-gray-200 bg-gray-50'>
			<tr className='flex'>
				{checkedList && (
					<th className='p-4 leading-none'>
						{onChecked && (
							<CheckBox
								checked={checkedList?.length === dataSource.length}
								onChange={() =>
									checkedList?.length === dataSource.length
										? onChecked([])
										: onChecked(dataSource.map((record) => record.id))
								}
							/>
						)}
					</th>
				)}
				{columns?.map((column, index) => (
					<th key={index} className={cn(TableHeaderStyle({ size }))} style={{ width: `${column.width}%` }}>
						<span>{column.title}</span>
						{column.sorter && (
							<ChevronUpDownIcon
								className='w-5 ml-2 cursor-pointer'
								onClick={() => onSort(dataSource, sortDatas, column.sorter!)}
							/>
						)}
						{column.tooltip && (
							<Tooltip {...column.tooltip} className='inline-flex ml-2 item-center'>
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
		prev.checkedList === next.checkedList &&
		prev.sortDatas === next.sortDatas &&
		prev.onChecked === next.onChecked &&
		prev.onSort === next.onSort
);
