'use client';

import { stringify } from 'flatted';
import { memo, useEffect, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
import { ColumnDataType, ColumnType } from '../../types/table';

interface RowTableProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	dataSource: any[];
	minWidth?: number;
}

const RowTable = ({ size, columns, dataSource, minWidth }: RowTableProps) => {
	const [sortDatas, setSortDatas] = useState(dataSource);

	const handleSortDatas = (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType, lastIndex: number) => number
	) => {
		const isSorted = stringify(dataSource) !== stringify(sortDatas);
		console.log(dataSource.length - 1);
		setSortDatas(
			isSorted
				? dataSource
				: [...dataSource].sort((a, b) => {
						console.log(dataSource.length - 1);
						return sorter(a, b, dataSource.length - 1);
				  })
		);
	};

	useEffect(() => {
		setSortDatas(dataSource);
	}, [dataSource]);

	return (
		<div className='overflow-x-auto'>
			<table className='w-full' style={{ minWidth: `${minWidth}px` }}>
				<Thead size={size} columns={columns} dataSource={dataSource} sortDatas={sortDatas} onSort={handleSortDatas} />
				<Tbody size={size} columns={columns} sortDatas={sortDatas} />
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
		prev.minWidth === next.minWidth
);
