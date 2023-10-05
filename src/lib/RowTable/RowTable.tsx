'use client';

import { stringify } from 'flatted';
import { Key, memo, useEffect, useState } from 'react';
import { ColumnDataType, ColumnType } from '../../types/table';
import Tbody from './components/Tbody';
import Thead from './components/Thead';

interface RowTableProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	dataSource: any[];
	checkedList?: Key[];
	minWidth?: number;
	onChecked?: (keys: Key[]) => void;
}

const RowTable = ({ size, columns, dataSource, checkedList, minWidth, onChecked }: RowTableProps) => {
	const [sortDatas, setSortDatas] = useState(dataSource);

	const handleSortDatas = (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => {
		const isSorted = stringify(dataSource) !== stringify(sortDatas);

		setSortDatas(isSorted ? dataSource : [...dataSource].sort(sorter));
	};

	useEffect(() => {
		setSortDatas(dataSource);
	}, [dataSource]);

	return (
		<div className='overflow-x-auto'>
			<table className='w-full' style={{ minWidth: `${minWidth}px` }}>
				<Thead
					size={size}
					columns={columns}
					dataSource={dataSource}
					checkedList={checkedList}
					sortDatas={sortDatas}
					onChecked={onChecked}
					onSort={handleSortDatas}
				/>
				<Tbody size={size} columns={columns} checkedList={checkedList} sortDatas={sortDatas} onChecked={onChecked} />
			</table>
		</div>
	);
};

export default memo(
	RowTable,
	(prev: RowTableProps, next: RowTableProps) =>
		prev.size === next.size &&
		prev.columns === next.columns &&
		prev.dataSource === next.dataSource &&
		prev.checkedList === next.checkedList &&
		prev.minWidth === next.minWidth &&
		prev.onChecked === next.onChecked
);
