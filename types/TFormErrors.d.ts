export type TFormErrors<T> = {
    [K in keyof T]?: string;
}