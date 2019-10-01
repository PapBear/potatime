/// <reference types="node" />
export declare class Potato {
    name: string;
    active: boolean;
    interval: NodeJS.Timeout | null;
    duration: number | null;
    private _remaining;
    constructor(name: string);
    clear(): void;
    start(options: {
        duration: number;
        callback: (remaining: number) => void;
    }): void;
    goodbye(): void;
    static findPotato(name: string): Potato | undefined;
}
