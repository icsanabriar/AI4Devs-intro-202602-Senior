/** Minimum input length (exclusive) below which the Reverse button is hidden. */
const REVERSE_BUTTON_MIN_LENGTH = 4;

/**
 * Pure function: returns the reversed string.
 * Uses Array.from for correct handling of Unicode (e.g. emojis).
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    if (typeof str !== 'string') return '';
    return Array.from(str).reverse().join('');
}

/**
 * Pure function: whether the Reverse button should be visible.
 * Visible only when input length is greater than 3.
 * @param {number} inputLength
 * @returns {boolean}
 */
function shouldShowReverseButton(inputLength) {
    return Number(inputLength) > 3;
}

/**
 * Pure function: the result to display for real-time (and button) reversal.
 * @param {string} input
 * @returns {string}
 */
function getDisplayResult(input) {
    return reverseString(typeof input === 'string' ? input : '');
}

(function () {
    if (typeof document === 'undefined') return;

    const ID_INPUT = 'string-input';
    const ID_RESULT = 'result';
    const ID_FORM = 'reverse-form';
    const ID_BTN = 'reverse-btn';

    function getInputValue() {
        const inputEl = document.getElementById(ID_INPUT);
        return inputEl ? inputEl.value : '';
    }

    function setResult(value) {
        const resultEl = document.getElementById(ID_RESULT);
        if (resultEl) resultEl.textContent = value;
    }

    function setButtonVisibility(visible) {
        const buttonEl = document.getElementById(ID_BTN);
        if (buttonEl) buttonEl.hidden = !visible;
    }

    function handleInputChange() {
        const value = getInputValue();
        setResult(getDisplayResult(value));
        setButtonVisibility(shouldShowReverseButton(value.length));
    }

    function handleReverse() {
        const value = getInputValue();
        setResult(getDisplayResult(value));
        setButtonVisibility(shouldShowReverseButton(value.length));
    }

    function init() {
        const formEl = document.getElementById(ID_FORM);
        const inputEl = document.getElementById(ID_INPUT);
        if (formEl) {
            formEl.addEventListener('submit', function (e) {
                e.preventDefault();
                handleReverse();
            });
        }
        if (inputEl) {
            inputEl.addEventListener('input', handleInputChange);
            handleInputChange();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        reverseString,
        shouldShowReverseButton,
        getDisplayResult,
    };
}
