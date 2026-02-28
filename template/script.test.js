/**
 * Unit tests for reverseString, shouldShowReverseButton, and getDisplayResult.
 * Run with: node script.test.js
 * No DOM APIs; no external test libraries.
 */

const {
    reverseString,
    shouldShowReverseButton,
    getDisplayResult,
} = require('./script.js');

function assertEqual(actual, expected, label) {
    if (actual !== expected) {
        throw new Error(
            `[FAIL] ${label}\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`
        );
    }
}

function assertStrictEqual(actual, expected, label) {
    if (actual !== expected) {
        throw new Error(
            `[FAIL] ${label}\n  expected: ${JSON.stringify(expected)}\n  actual:   ${JSON.stringify(actual)}`
        );
    }
}

function runReverseStringTests() {
    const cases = [
        { input: 'AI4Devs', expected: 'sveD4IA', label: 'AI4Devs → sveD4IA' },
        { input: '', expected: '', label: '"" → ""' },
        { input: 'a', expected: 'a', label: '"a" → "a"' },
        { input: 'hola mundo', expected: 'odnum aloh', label: '"hola mundo" → "odnum aloh"' },
        { input: '😀a', expected: 'a😀', label: '"😀a" → "a😀"' },
    ];

    for (const { input, expected, label } of cases) {
        const actual = reverseString(input);
        assertEqual(actual, expected, label);
    }

    assertEqual(reverseString(null), '', 'reverseString(non-string) → ""');
    assertEqual(reverseString(undefined), '', 'reverseString(undefined) → ""');

    const hadSegmenter = typeof Intl !== 'undefined' && Intl.Segmenter;
    if (hadSegmenter) {
        const Segmenter = Intl.Segmenter;
        Intl.Segmenter = undefined;
        try {
            assertEqual(reverseString('xy'), 'yx', 'reverseString fallback (no Segmenter) → "yx"');
        } finally {
            Intl.Segmenter = Segmenter;
        }
    }
}

function runButtonVisibilityTests() {
    const hiddenCases = [0, 1, 2, 3];
    for (const length of hiddenCases) {
        const actual = shouldShowReverseButton(length);
        assertStrictEqual(actual, false, `Button visibility: hidden when length = ${length}`);
    }

    const visibleCases = [4, 5, 100];
    for (const length of visibleCases) {
        const actual = shouldShowReverseButton(length);
        assertStrictEqual(actual, true, `Button visibility: visible when length = ${length}`);
    }

    assertStrictEqual(shouldShowReverseButton(undefined), false, 'Button visibility: undefined → false');
    assertStrictEqual(shouldShowReverseButton(NaN), false, 'Button visibility: NaN → false');
}

function runRealTimeBehaviorTests() {
    const cases = [
        { input: 'test', expected: 'tset', label: 'Real-time: "test" → "tset"' },
        { input: 'ab', expected: 'ba', label: 'Real-time: "ab" → "ba"' },
        { input: '', expected: '', label: 'Real-time: "" → ""' },
        { input: 'AI4Devs', expected: 'sveD4IA', label: 'Real-time: "AI4Devs" → "sveD4IA"' },
    ];

    for (const { input, expected, label } of cases) {
        const actual = getDisplayResult(input);
        assertEqual(actual, expected, label);
    }

    assertEqual(getDisplayResult(null), '', 'getDisplayResult(null) → ""');
    assertEqual(getDisplayResult(42), '', 'getDisplayResult(non-string) → ""');
}

function runTests() {
    runReverseStringTests();
    runButtonVisibilityTests();
    runRealTimeBehaviorTests();
    console.log('All tests passed.');
}

try {
    runTests();
} catch (err) {
    console.error(err.message);
    process.exit(1);
}
