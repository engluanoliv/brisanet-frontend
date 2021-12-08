export interface IPokeResult {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<{name: string, url: string}>
}

export interface InputProps {
    placeholder: string;
    type: string;
}

export interface IData {
    name: string,
    url: string
}
