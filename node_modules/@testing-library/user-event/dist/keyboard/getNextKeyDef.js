"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNextKeyDef = getNextKeyDef;

/**
 * Get the next key from keyMap
 *
 * Keys can be referenced by `{key}` or `{special}` as well as physical locations per `[code]`.
 * Everything else will be interpreted as a typed character - e.g. `a`.
 * Brackets `{` and `[` can be escaped by doubling - e.g. `foo[[bar` translates to `foo[bar`.
 * Keeping the key pressed can be written as `{key>}`.
 * Modifiers like `{shift}` imply being kept pressed. This can be turned of per `{shift/}`.
 */
function getNextKeyDef(text, options) {
  var _text$slice$match;

  const startBracket = ['{', '['].includes(text[0]) ? text[0] : '';
  const startModifier = startBracket && text[1] === '/' ? '/' : '';
  const descriptorStart = startBracket.length + startModifier.length;
  const descriptor = startBracket ? text[descriptorStart] === startBracket ? startBracket : (_text$slice$match = text.slice(descriptorStart).match(/^\w+/)) == null ? void 0 : _text$slice$match[0] : text[descriptorStart];

  if (!descriptor) {
    throw new Error(getErrorMessage('key descriptor', text[descriptorStart], text));
  }

  const descriptorEnd = descriptorStart + descriptor.length;
  const endModifier = startBracket && descriptor !== startBracket && ['/', '>'].includes(text[descriptorEnd]) ? text[descriptorEnd] : '';
  const endBracket = !startBracket || descriptor === startBracket ? '' : startBracket === '{' ? '}' : ']';

  if (endBracket && text[descriptorEnd + endModifier.length] !== endBracket) {
    throw new Error(getErrorMessage('closing bracket', text[descriptorEnd + endModifier.length], text));
  }

  const modifiers = {
    consumedLength: [startBracket, startModifier, descriptor, endModifier, endBracket].map(c => c.length).reduce((a, b) => a + b),
    releasePrevious: startModifier === '/',
    releaseSelf: hasReleaseSelf(startBracket, descriptor, endModifier)
  };

  if (isPrintableCharacter(startBracket, descriptor)) {
    var _options$keyboardMap$;

    return { ...modifiers,
      keyDef: (_options$keyboardMap$ = options.keyboardMap.find(k => k.key === descriptor)) != null ? _options$keyboardMap$ : {
        key: descriptor,
        code: 'Unknown'
      }
    };
  } else if (startBracket === '{') {
    var _options$keyboardMap$2;

    const key = mapLegacyKey(descriptor);
    return { ...modifiers,
      keyDef: (_options$keyboardMap$2 = options.keyboardMap.find(k => {
        var _k$key;

        return ((_k$key = k.key) == null ? void 0 : _k$key.toLowerCase()) === key.toLowerCase();
      })) != null ? _options$keyboardMap$2 : {
        key: descriptor,
        code: 'Unknown'
      }
    };
  } else {
    var _options$keyboardMap$3;

    return { ...modifiers,
      keyDef: (_options$keyboardMap$3 = options.keyboardMap.find(k => {
        var _k$code;

        return ((_k$code = k.code) == null ? void 0 : _k$code.toLowerCase()) === descriptor.toLowerCase();
      })) != null ? _options$keyboardMap$3 : {
        key: 'Unknown',
        code: descriptor
      }
    };
  }
}

function hasReleaseSelf(startBracket, descriptor, endModifier) {
  if (endModifier === '/' || !startBracket) {
    return true;
  }

  if (startBracket === '{' && ['alt', 'ctrl', 'meta', 'shift'].includes(descriptor.toLowerCase())) {
    return false;
  }

  return endModifier !== '>';
}

function mapLegacyKey(descriptor) {
  var _ctrl$del$esc$space$d;

  return (_ctrl$del$esc$space$d = {
    ctrl: 'Control',
    del: 'Delete',
    esc: 'Escape',
    space: ' '
  }[descriptor]) != null ? _ctrl$del$esc$space$d : descriptor;
}

function isPrintableCharacter(startBracket, descriptor) {
  return !startBracket || startBracket === descriptor || startBracket === '{' && descriptor.length === 1;
}

function getErrorMessage(expected, found, text) {
  return `Expected ${expected} but found "${found != null ? found : ''}" in "${text}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`;
}