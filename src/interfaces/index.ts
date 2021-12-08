export interface PokeResult {

    count: number,
    next: string | null,
    previous: string | null,
    results: Array<{name: string, url: string}>
        
}