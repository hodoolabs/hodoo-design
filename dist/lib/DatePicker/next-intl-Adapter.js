class NextIntlAdapter {
    static isNextIntlAvailable() {
        try {
            require.resolve('next-intl');
            return true;
        }
        catch (e) {
            return false;
        }
    }
    useLocale() {
        if (!NextIntlAdapter.isNextIntlAvailable()) {
            return 'ko'; // 기본 로케일 반환
        }
        // @ts-ignore or use proper type checking
        return require('next-intl').useLocale();
    }
}
export default NextIntlAdapter;
