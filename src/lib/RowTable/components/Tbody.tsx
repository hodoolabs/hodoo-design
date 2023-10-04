import { Key } from 'react';
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
import { ColumnType } from '../../../types/table';
import CheckBox from '../../CheckBox/CheckBox';

interface TbodyProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	checkedList?: Key[];
	sortDatas: any[];
	onChecked?: (keys: Key[]) => void;
}

const Tbody = ({ size, columns, checkedList, sortDatas, onChecked }: TbodyProps) => {
	return (
		<tbody>
			{sortDatas.map((record, index) => (
				<tr
					key={index}
					className='flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-blue-50 hover:border-blue-300'
				>
					{checkedList && (
						<td className='p-4 leading-none'>
							<CheckBox
								checked={checkedList.includes(record.id)}
								onChange={() => {
									const newSelectedKeys = checkedList.includes(record.id)
										? checkedList.filter((key) => key !== record.id)
										: [...checkedList, record.id];
									onChecked && onChecked(newSelectedKeys);
								}}
							/>
						</td>
					)}
					{columns.map((column, index) => (
						<td
							key={index}
							className={cn(TableBodyStyle({ size }))}
							style={{ width: column.width ? `${column.width}%` : 'auto' }}
						>
							{column.render ? column.render(record) : record[column.dataIndex]}
						</td>
					))}
				</tr>
			))}
		</tbody>
	);
};

export default Tbody;
