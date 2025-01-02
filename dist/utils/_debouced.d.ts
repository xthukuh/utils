/**
 * Create debounced callback function
 *
 * @param handler  Throttled callback handler
 * @param delay  Callback delay milliseconds
 * @param maxWait  Maximum callback delay milliseconds
 * @param immediate  Execute callback before delay
 * @returns Throttled callback function
 */
export declare const _debouced: (handler: (...args: any) => void, delay?: number, maxWait?: number, immediate?: boolean | 1 | 0) => (...args: any) => void;
