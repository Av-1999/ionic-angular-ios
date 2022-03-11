export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  old: number;
  isAnonymous: boolean;
}

export interface AlertCancelButton {
  text: string;
  role?: 'cancel' | 'destructive' | string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void | {[key: string]: any};
}
