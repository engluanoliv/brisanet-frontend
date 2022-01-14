export interface IPokeResult {
    count: number,
    next: string | null,
    previous: string | null,
    results: Array<{name: string, url: string}>
}

export interface IData {
    name: string,
    url: string
}

export interface IInputProps {
    placeholder: string;
    type: string;
}

