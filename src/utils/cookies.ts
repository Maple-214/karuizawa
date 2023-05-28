import Keys from '@/config/cookieKey'
import Cookies from 'js-cookie'
const expiresDate = new Date();
expiresDate.setDate(expiresDate.getDate() + 7);

export const getFavList = () => Cookies.get(Keys.FavListKey)
export const setFavList = (idsAry: string) => {
    Cookies.set(Keys.FavListKey, JSON.stringify(idsAry), { expires: expiresDate })
}