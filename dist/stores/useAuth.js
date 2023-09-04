import { create } from 'zustand';
import { persist } from 'zustand/middleware';
var useAuth = create(persist(function (set) { return ({
    accessToken: '',
    refreshToken: '',
    setAccessToken: function (accessToken) {
        set(function () { return ({
            accessToken: accessToken,
        }); });
    },
    setRefreshToken: function (refreshToken) {
        set(function () { return ({ refreshToken: refreshToken }); });
    },
    resetToken: function () {
        set(function () { return ({ accessToken: '', refreshToken: '' }); });
    },
}); }, {
    name: 'authStorage',
}));
export default useAuth;
