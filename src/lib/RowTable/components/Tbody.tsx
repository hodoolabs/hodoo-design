'use client';

import { ColumnType } from '../../../types/table';
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';

interface TbodyProps {
	columns: ColumnType<any>;
	sortDatas: any[];
}

const Tbody = ({ columns, sortDatas }: TbodyProps) => {
	return (
		<tbody>
			{sortDatas.map((record, index) => (
				<tr
					key={index}
					className='flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-gray-50'
				>
					{columns.map((column, index) => (
						<td
							key={index}
							className={cn(TableBodyStyle({ click: !!column.onClick }))}
							style={{ width: `${column.width}%`, minWidth: column.fixWidth, maxWidth: column.fixWidth }}
							onClick={() => column.onClick && column.onClick(record)}
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
