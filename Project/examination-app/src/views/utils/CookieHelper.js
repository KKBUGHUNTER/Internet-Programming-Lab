import Cookies from 'js-cookie';

class CookieHelper {
    static getFullCookie() {
        return Cookies.get('token');
    }

    static getUserId() {
        const token = CookieHelper.getFullCookie();
        return token.substring(0, 13);
    }

    static removeTokenCookie() {
        Cookies.remove('token');
    }
}

export default CookieHelper;
