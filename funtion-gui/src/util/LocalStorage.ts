export function removeStorageItem(key: string) {
    localStorage.removeItem(key);
}

export function setStorageItem(key: string, value: string) {
    localStorage.setItem(key, value);
}

export function getStorageItemByName(name: string): string {
    try {
        return localStorage.getItem(name) || '';
    } catch (e) {
        return '';
    }
}
