// Stub DOM types for rxjs in Node.js environment
declare type DOMHighResTimeStamp = number;
declare type FrameRequestCallback = (timestamp: DOMHighResTimeStamp) => void;
declare const requestAnimationFrame: (callback: FrameRequestCallback) => number;
declare const cancelAnimationFrame: (handle: number) => void;
