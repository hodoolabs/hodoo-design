interface UseAuthType {
    accessToken: string;
    refreshToken: string;
    setAccessToken: (accessToken: string) => void;
    setRefreshToken: (refreshToken: string) => void;
    resetToken: () => void;
}
declare const useAuth: import("zustand").UseBoundStore<Omit<import("zustand").StoreApi<UseAuthType>, "persist"> & {
    persist: {
        setOptions: (options: Partial<import("zustand/middleware").PersistOptions<UseAuthType, UseAuthType>>) => void;
        clearStorage: () => void;
        rehydrate: () => void | Promise<void>;
        hasHydrated: () => boolean;
        onHydrate: (fn: (state: UseAuthType) => void) => () => void;
        onFinishHydration: (fn: (state: UseAuthType) => void) => () => void;
        getOptions: () => Partial<import("zustand/middleware").PersistOptions<UseAuthType, UseAuthType>>;
    };
}>;
export default useAuth;
