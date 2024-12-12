// 별도의 패키지나 파일로 분리
import { I18nAdapter } from './types';

class NextIntlAdapter implements I18nAdapter {
	private static isNextIntlAvailable(): boolean {
		try {
			require.resolve('next-intl');
			return true;
		} catch (e) {
			return false;
		}
	}

	useLocale(): string {
		if (!NextIntlAdapter.isNextIntlAvailable()) {
			return 'ko'; // 기본 로케일 반환
		}

		// @ts-ignore or use proper type checking
		return require('next-intl').useLocale();
	}
}
export default NextIntlAdapter;
