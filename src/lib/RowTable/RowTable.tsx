'use client';

import { useEffect, useRef, useState } from 'react';
import Tbody from './components/Tbody';
import Thead from './components/Thead';
import { ColumnType, TableCheckBoxType } from '../../types/table';

interface RowTableProps {
	columns: ColumnType<any>;
	dataSource: any[];
	checkBox?: TableCheckBoxType;
	className?: string;
}

const RowTable = ({ columns, dataSource, checkBox, className }: RowTableProps) => {
	const wrapRef = useRef<HTMLDivElement>(null);
	const tableRef = useRef<HTMLTableElement>(null);
	const [sortDatas, setSortDatas] = useState(dataSource);
	const [sortStatus, setSortStatus] = useState('basic');
	const [shadow, setShadow] = useState(false);

	const getSortDatas = (a: any, b: any, dataIndex: any) => {
		if (typeof a[dataIndex] === 'number' && typeof b[dataIndex] === 'number') {
			return a[dataIndex] - b[dataIndex];
		} else {
			return String(a[dataIndex]).localeCompare(String(b[dataIndex]));
		}
	};

	const handleClickSort = (dataIndex: any) => {
		if (sortStatus === 'basic') {
			setSortStatus('descend');
			setSortDatas([...dataSource].sort((b, a) => getSortDatas(a, b, dataIndex)));
		}

		if (sortStatus === 'descend') {
			setSortStatus('ascend');
			setSortDatas([...dataSource].sort((a, b) => getSortDatas(a, b, dataIndex)));
		}

		if (sortStatus === 'ascend') {
			setSortStatus('basic');
			setSortDatas(dataSource);
		}
	};

	const handleSetShadow = () => {
		if (!wrapRef.current || !tableRef.current) return;

		const isEndScroll = wrapRef.current.offsetWidth + wrapRef.current.scrollLeft === wrapRef.current.scrollWidth;
		const isScroll = wrapRef.current.offsetWidth < tableRef.current.offsetWidth;

		setShadow(isScroll && !isEndScroll);
	};

	useEffect(() => {
		setSortDatas(dataSource);
	}, [dataSource]);

	useEffect(() => {
		if (!wrapRef.current || !tableRef.current) return;

		handleSetShadow();

		global.window.addEventListener('resize', handleSetShadow);
		wrapRef.current.addEventListener('scroll', handleSetShadow);

		return () => {
			global.window.removeEventListener('resize', handleSetShadow);
			wrapRef.current?.removeEventListener('scroll', handleSetShadow);
		};
	}, [wrapRef, tableRef]);

	return (
		<div className={`relative ${className}`}>
			<div id='table' className='relative flex overflow-x-auto' ref={wrapRef}>
				<table className='w-full' ref={tableRef}>
					<Thead columns={columns} checkBox={checkBox} sortDatas={sortDatas} onSort={handleClickSort} />
					<Tbody columns={columns} checkBox={checkBox} sortDatas={sortDatas} />
				</table>
			</div>
			<div
				className={`absolute top-0 right-0 w-[100px] h-full bg-gradient-to-l from-white pointer-events-none duration-300 ${
					!shadow ? 'opacity-0' : 'opacity-100'
				}`}
			/>
		</div>
	);
};

export default RowTable;
