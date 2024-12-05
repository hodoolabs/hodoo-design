import { I18nAdapter } from './types';
declare class NextIntlAdapter implements I18nAdapter {
    private static isNextIntlAvailable;
    useLocale(): string;
}
export default NextIntlAdapter;
