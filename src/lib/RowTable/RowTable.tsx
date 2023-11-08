'use client';

import { stringify } from 'flatted';
import { useEffect, useRef, useState } from 'react';
import { ColumnDataType, ColumnType } from '../../types/table';
import Tbody from './components/Tbody';
import Thead from './components/Thead';

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
			{shadow && (
				<div
					className='sticky top-0 right-0'
					style={{ boxShadow: '0 0 60px 30px #fff,0 0 100px 60px rgba(255, 255, 255, 0.5)' }}
				/>
			)}
		</div>
	);
};

export default RowTable;
