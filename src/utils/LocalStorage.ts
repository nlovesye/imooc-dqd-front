import type { ILocalStorage } from "@/models";

type LocalStorageKey = keyof ILocalStorage;

export class LocalStorage {
  public static get<T = string | null>(
    key: LocalStorageKey,
    parse: boolean = false
  ): T {
    const value = localStorage.getItem(key);
    const result = (!value || !parse
      ? value
      : JSON.parse(value)) as unknown as T;
    return result;
  }

  public static set(obj: Partial<ILocalStorage> = {}) {
    (Object.keys(obj) as LocalStorageKey[]).forEach((key) => {
      const value = obj[key];
      if (typeof value === "string") {
        localStorage.setItem(key, value);
      } else if (typeof value === "object" || typeof value === "number") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    });
  }

  public static remove(key: LocalStorageKey) {
    localStorage.removeItem(key);
  }

  public static clear() {
    localStorage.clear();
  }
}
