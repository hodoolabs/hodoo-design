import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UseAuthType {
	accessToken: string;
	refreshToken: string;
	setAccessToken: (accessToken: string) => void;
	setRefreshToken: (refreshToken: string) => void;
	resetToken: () => void;
}

const useAuth = create(
	persist<UseAuthType>(
		(set) => ({
			accessToken: '',
			refreshToken: '',
			setAccessToken: (accessToken: string) => {
				set(() => ({
					accessToken: accessToken,
				}));
			},
			setRefreshToken: (refreshToken: string) => {
				set(() => ({ refreshToken: refreshToken }));
			},
			resetToken: () => {
				set(() => ({ accessToken: '', refreshToken: '' }));
			},
		}),
		{
			name: 'authStorage',
		}
	)
);

export default useAuth;
