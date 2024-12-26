import { I18nAdapter } from './types';

class DefaultI18nAdapter implements I18nAdapter {
	useLocale(): string {
		return 'ko'; // 또는 기본 locale
	}
}

export default DefaultI18nAdapter;
