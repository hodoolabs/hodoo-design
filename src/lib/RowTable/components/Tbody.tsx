'use client';

import { ColumnType, TableCheckBoxType } from '../../../types/table';
import { cn } from '../../../utils/style';
import CheckBox from '../../CheckBox/CheckBox';
import { TableBodyStyle } from '../style';

interface TbodyProps {
	columns: ColumnType<any>;
	checkBox?: TableCheckBoxType;
	sortDatas: any[];
}

const Tbody = ({ columns, checkBox, sortDatas }: TbodyProps) => {
	const id = checkBox?.id;
	const selected = checkBox?.selected;

	const onSelect = (seleted: any[]) => {
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
						<td className='px-4 leading-none'>
							<CheckBox
								checked={selected!.map((item) => item[id!]).includes(record[id!])}
								onChange={() => {
									const select = selected!.map((item) => item[id!]).includes(record[id!])
										? selected!.filter((item) => item[id!] !== record[id!])
										: [...selected!, record];

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
