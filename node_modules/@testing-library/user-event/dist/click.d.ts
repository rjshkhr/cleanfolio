export declare interface clickOptions {
    skipHover?: boolean;
    clickCount?: number;
}
declare function click(element: Element, init?: MouseEventInit, { skipHover, clickCount }?: clickOptions): void;
declare function dblClick(element: Element, init?: MouseEventInit): void;
export { click, dblClick };
