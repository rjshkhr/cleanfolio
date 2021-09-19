import { keyboardKey, keyboardOptions } from './types';
/**
 * Get the next key from keyMap
 *
 * Keys can be referenced by `{key}` or `{special}` as well as physical locations per `[code]`.
 * Everything else will be interpreted as a typed character - e.g. `a`.
 * Brackets `{` and `[` can be escaped by doubling - e.g. `foo[[bar` translates to `foo[bar`.
 * Keeping the key pressed can be written as `{key>}`.
 * Modifiers like `{shift}` imply being kept pressed. This can be turned of per `{shift/}`.
 */
export declare function getNextKeyDef(text: string, options: keyboardOptions): {
    keyDef: keyboardKey;
    consumedLength: number;
    releasePrevious: boolean;
    releaseSelf: boolean;
};
