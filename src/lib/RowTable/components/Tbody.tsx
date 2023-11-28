'use client';

import { ReactNode } from 'react';
import { ColumnType, TableCheckBoxType } from '../../../types/table';
import { cn } from '../../../utils/style';
import { TableBodyStyle } from '../style';
import CheckBox from '../../CheckBox/CheckBox';

interface TbodyProps {
	columns: ColumnType<any>;
	checkBox?: TableCheckBoxType;
	sortDatas: any[];
}

const Tbody = ({ columns, checkBox, sortDatas }: TbodyProps) => {
	const id = checkBox?.id;
	const selected = checkBox?.selected;

	const onSelect = (seleted: ReactNode[]) => {
		checkBox?.onSelect(seleted);
	};

	return (
		<tbody>
			{sortDatas?.map((record, index) => (
				<tr
					key={index}
					className='flex items-center font-medium border-b border-solid border-b-gray-200 hover:bg-gray-50'
				>
					{checkBox && (
						<td className='p-4 leading-none'>
							<CheckBox
								checked={selected!.includes(record[id!])}
								onChange={() => {
									const select = selected!.includes(record[id!])
										? selected!.filter((key) => key !== record[id!])
										: [...selected!, record[id!]];

									onSelect(select);
								}}
							/>
						</td>
					)}
					{columns.map((column, index) => (
						<td
							key={index}
							className={cn(TableBodyStyle({ click: !!column.onClick }))}
							style={{ width: `${column.width}%`, minWidth: column.minWidth }}
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
