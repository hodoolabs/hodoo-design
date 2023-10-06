import { Key, memo } from 'react';
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
import { ColumnType } from '../../../types/table';

interface TbodyProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	checkedList?: Key[];
	sortDatas: any[];
	onChecked?: (keys: Key[]) => void;
}

const Tbody = ({ size, columns, sortDatas }: TbodyProps) => {
	return (
		<tbody>
			{sortDatas.map((record, index) => (
				<tr key={index} className='flex items-center font-medium border-b border-solid border-b-gray-200'>
					{columns.map((column, index) => (
						<td key={index} className={cn(TableBodyStyle({ size }))} style={{ width: `${column.width}%` }}>
							{column.render ? column.render(record) : record[column.dataIndex]}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default memo(
	Tbody,
	(prev: TbodyProps, next: TbodyProps) =>
		prev.size === next.size &&
		prev.columns === next.columns &&
		prev.checkedList === next.checkedList &&
		prev.sortDatas === next.sortDatas &&
		prev.onChecked === next.onChecked
);
