'use client';

import { stringify } from 'flatted';
import { memo, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
import { ColumnDataType, ColumnType } from '../../types/table';

interface RowTableProps {
	columns: ColumnType<any>;
	dataSource: any[];
	minWidth?: number;
}

const RowTable = ({ columns, dataSource, minWidth }: RowTableProps) => {
	const wrapRef = useRef<HTMLDivElement>(null);
	const tableRef = useRef<HTMLTableElement>(null);
	const [sortDatas, setSortDatas] = useState(dataSource);
	const [shadow, setShadow] = useState(false);

	const handleSortDatas = (
		dataSource: ColumnDataType[],
		sortDatas: ColumnDataType[],
		sorter: (a: ColumnDataType, b: ColumnDataType) => number
	) => {
		const isSorted = stringify(dataSource) !== stringify(sortDatas);
		setSortDatas(isSorted ? dataSource : [...dataSource].sort((a, b) => sorter(a, b)));
	};

	const handleSetShadow = () => {
		if (!wrapRef.current || !tableRef.current) return;
		setShadow(wrapRef.current.offsetWidth < tableRef.current.offsetWidth);
	};

	useEffect(() => {
		setSortDatas(dataSource);
	}, [dataSource]);

	useEffect(() => {
		if (!wrapRef.current || !tableRef.current) return;

		handleSetShadow();

		global.window.addEventListener('resize', handleSetShadow);

		return () => {
			global.window.removeEventListener('resize', handleSetShadow);
		};
	}, [wrapRef, tableRef]);

	return (
		<div className='relative flex overflow-x-auto' ref={wrapRef}>
			<table className='w-full' style={{ minWidth }} ref={tableRef}>
				<Thead columns={columns} dataSource={dataSource} sortDatas={sortDatas} onSort={handleSortDatas} />
				<Tbody columns={columns} sortDatas={sortDatas} />
			</table>
			{shadow && <Shadow />}
		</div>
	);
};

export default memo(
	RowTable,
	(prev: RowTableProps, next: RowTableProps) =>
		prev.columns === next.columns && prev.dataSource === next.dataSource && prev.minWidth === next.minWidth
);

const Shadow = styled.div`
	position: sticky;
	content: '';
	right: 0;
	top: 0;
	bottom: 0;
	box-shadow: 0 0 60px 30px #fff, 0 0 100px 60px rgba(255, 255, 255, 0);
`;
