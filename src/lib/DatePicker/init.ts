import NextIntlAdapter from './next-intl-Adapter';

// 초기화 함수: 애플리케이션 시작 시 호출
export function initNextIntl(): void {
	// 클라이언트 사이드에서만 실행
	if (typeof window === 'undefined') {
		return;
	}

	try {
		// Function 생성자를 사용하여 정적 분석 회피
		// 이렇게 하면 webpack이 빌드 시 이 코드를 분석하지 않음
		const loadModule = new Function('moduleName', 'return require(moduleName)');
		const nextIntl = loadModule('next-intl');

		if (nextIntl) {
			NextIntlAdapter.setNextIntl(nextIntl);
		}
	} catch (e) {
		// next-intl이 없으면 무시
		console.debug('next-intl is not available, using default locale');
	}
}

// 자동 초기화 (선택 사항)
if (typeof window !== 'undefined') {
	// 브라우저 환경에서만 시도
	setTimeout(() => {
		initNextIntl();
	}, 0);
}
