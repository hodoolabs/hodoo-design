'use client';

import { stringify } from 'flatted';
import { memo, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { ColumnDataType, ColumnType } from '../../types/table';
import Tbody from './components/Tbody';
import Thead from './components/Thead';

interface RowTableProps {
	size: 'lg' | 'sm';
	columns: ColumnType<any>;
	dataSource: any[];
	minWidth?: number;
}

const RowTable = ({ size, columns, dataSource, minWidth }: RowTableProps) => {
	const tableContainerRef = useRef<HTMLDivElement>(null);
	const tableRef = useRef<HTMLTableElement>(null);
	const [sortDatas, setSortDatas] = useState(dataSource);
	const [showShadow, setShowShadow] = useState(false);

	const handleSortDatas = (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => {
		const isSorted = stringify(dataSource) !== stringify(sortDatas);

		setSortDatas(
			isSorted
				? dataSource
				: [...dataSource].sort((a, b) => {
						return sorter(a, b);
				  })
		);
	};

	useEffect(() => {
		setSortDatas(dataSource);
	}, [dataSource]);

	useEffect(() => {
		if (tableContainerRef.current && tableRef.current) {
			if (tableContainerRef.current.offsetWidth < tableRef.current.offsetWidth) {
				setShowShadow(true);
			}
		}
	}, [tableContainerRef, tableRef]);

	return (
		<div className='relative flex overflow-x-auto' ref={tableContainerRef}>
			<table className='w-full' style={{ minWidth: `${minWidth}px` }} ref={tableRef}>
				<Thead size={size} columns={columns} dataSource={dataSource} sortDatas={sortDatas} onSort={handleSortDatas} />
				<Tbody size={size} columns={columns} sortDatas={sortDatas} />
			</table>
			{showShadow && <Shadow />}
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

const Shadow = styled.div`
	position: sticky;
	content: '';
	right: 0;
	top: 0;
	bottom: 0;
	box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px rgba(255, 255, 255, 0);
`;
