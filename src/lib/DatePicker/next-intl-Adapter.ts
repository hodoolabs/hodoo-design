// 별도의 패키지나 파일로 분리
import { I18nAdapter } from './types';

class NextIntlAdapter implements I18nAdapter {
	// next-intl이 없을 때도 타입 오류가 발생하지 않도록 전역 선언
	private static nextIntl: any = null;

	// 외부에서 next-intl을 설정할 수 있는 메서드
	public static setNextIntl(nextIntlModule: any): void {
		NextIntlAdapter.nextIntl = nextIntlModule;
	}

	private static isNextIntlAvailable(): boolean {
		if (typeof window === 'undefined') {
			return false;
		}

		// next-intl이 이미 설정되어 있는지 확인
		return !!NextIntlAdapter.nextIntl;
	}

	useLocale(): string {
		// 기본 로케일
		const defaultLocale = 'ko';

		if (!NextIntlAdapter.isNextIntlAvailable()) {
			// next-intl이 없으면 기본값 반환
			return defaultLocale;
		}

		try {
			// 설정된 next-intl 모듈에서 useLocale 호출
			if (NextIntlAdapter.nextIntl.useLocale) {
				return NextIntlAdapter.nextIntl.useLocale();
			}
		} catch (e) {
			// 오류 시 기본값 사용
		}

		return defaultLocale;
	}
}

// 사용 시: NextIntlAdapter.setNextIntl(require('next-intl'))

export default NextIntlAdapter;
