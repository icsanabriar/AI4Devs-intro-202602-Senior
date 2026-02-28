---

### Prompt - 2026-02-28T00:00:00

You are an expert frontend developer working inside a project governed by strict Cursor Project Rules.

You MUST comply with all rules defined under `.cursor/rules/`.

Your task is to implement a simple web page that reverses a string using JavaScript, ensuring that unit tests are implemented separately from production code.

────────────────────────────
Project Constraints
────────────────────────────

- Use the existing seed files:
  - template/index.html
  - template/script.js

- You are allowed to create ONE additional file:
  - template/script.test.js

- Do NOT create any other files.

- Follow all architectural, accessibility, and quality rules defined at the project level.

────────────────────────────
Architecture Requirements
────────────────────────────

- The core logic (reverseString) must be pure.
- Production code (script.js) must not contain test logic.
- Tests must be implemented exclusively in script.test.js.
- Tests must not depend on DOM APIs.
- The reverseString function must be structured so it can be tested independently.

────────────────────────────
Functional Requirement
────────────────────────────

The page must:

- Accept a string input
- Reverse it
- Display the result

Example:
Input: AI4Devs  
Output: sveD4IA

────────────────────────────
Testing Requirements
────────────────────────────

In template/script.test.js:

- Implement unit tests for reverseString.
- Use a minimal assertion strategy (no external libraries).
- Cover at least:

  - "AI4Devs" → "sveD4IA"
  - "" → ""
  - "a" → "a"
  - "hola mundo" → "odnum aloh"
  - "😀a" → "a😀"

- Tests must clearly report failures.

────────────────────────────
Output Requirements
────────────────────────────

Return the FULL updated content of:

- template/index.html
- template/script.js
- template/script.test.js
- template/prompts.md

Each file must be clearly separated using:

===== template/filename =====

The task is incomplete if any required file is missing.

---

### Prompt - 2026-02-28T12:00:00

You are an expert frontend developer working inside a project governed by strict Cursor Project Rules.

You MUST comply with all rules defined under `.cursor/rules/`.

Your task is to enhance the existing string reverser web page and update the test suite to cover the new behavior.

────────────────────────────
New Functional Requirements
────────────────────────────

1. The "Reverse" button must only be visible when the input contains more than 3 characters.
   - If the input length is 3 characters or less, the button must be hidden.

2. The reversed string must be displayed in real time as the user types.
   - The result must update on every input change.
   - The behavior must NOT depend on clicking the button.

3. The button must still work correctly if clicked.

────────────────────────────
Testing Requirements (MANDATORY)
────────────────────────────

- Update the existing test file: template/script.test.js
- Preserve previous reverseString unit tests.
- Add new tests to validate:

  1. Button visibility logic:
     - Hidden when input length ≤ 3
     - Visible when input length > 3

  2. Real-time behavior logic:
     - Simulate input changes
     - Verify that reverseString is triggered correctly
     - Verify correct output value

- Tests must remain separated from production code.
- Do NOT move test logic into script.js.
- Tests must not rely on manual interaction.

────────────────────────────
Constraints
────────────────────────────

- Do NOT create new files.
- Modify only:
  - template/index.html
  - template/script.js
  - template/script.test.js

- Preserve existing functionality.
- Maintain separation between pure logic and DOM logic.
- Maintain compliance with all project rules.

────────────────────────────
Output Requirements
────────────────────────────

Return the FULL updated content of:

- template/index.html
- template/script.js
- template/script.test.js
- template/prompts.md

Each file must be clearly separated using:

===== template/filename =====

The task is incomplete if any required file is missing.

---

### Prompt - 2026-02-28T14:30:00

You are an expert frontend developer working inside a project governed by strict Cursor Project Rules.

You MUST comply with all rules defined under `.cursor/rules/`.

Task: Update the existing string-reverser page to match a modern landing-page style inspired by https://www.lidr.co/academy/ (clean hero, centered layout, generous whitespace, soft shadows, rounded cards, bold headings, subtle muted text, and a primary CTA button style).

────────────────────────────
Design Requirements
────────────────────────────
- Keep it minimal, professional, and "Academy-like":
  - Centered container with a max-width
  - A hero header (title + short supporting text)
  - The input/result area presented inside a card
  - Button and input styles with consistent sizing, radius, and spacing
  - Subtle background (very light) and a high-contrast text palette
  - Soft shadow / border for cards
  - Responsive behavior for mobile widths

- Do not use external frameworks or libraries.
- Do not add external assets. Use a system font stack (or safe web fonts only if already available without additional files).
- Avoid overengineering: a small set of CSS variables is preferred.

Implementation hint:
- Implement styling via a <style> block in template/index.html (no new CSS files).
- Keep JS logic in template/script.js (as per project rules).

────────────────────────────
Functional Requirements (must remain correct)
────────────────────────────
- Preserve the current behavior (including any enhancements already implemented, e.g., real-time reverse and conditional button visibility if present).
- Ensure the UI remains accessible and keyboard-friendly (as enforced by project rules).

────────────────────────────
Constraints
────────────────────────────
- Do NOT create new files.
- Modify only:
  - template/index.html
  - template/script.js

────────────────────────────
Output Requirements
────────────────────────────
Return the FULL updated content of:
- template/index.html
- template/script.js
- template/prompts.md

Each file must be clearly separated using:
===== template/filename =====

The task is incomplete if any required file is missing.

---

### Prompt - 2026-02-28T16:00:00

You are an expert frontend developer working inside a project governed by strict Cursor Project Rules.

You MUST comply with all rules defined under `.cursor/rules/`.

Goal: Ensure unit test coverage is >= 90%. If current coverage is below 90%, add/extend test cases to exceed 90% without modifying production behavior.

────────────────────────────
What to do
────────────────────────────

1) Identify the current test runner and coverage tooling used by this repo:
   - Inspect package.json scripts (e.g., test, test:coverage)
   - Inspect existing config files if present (jest/vitest/c8/nyc)
   - If coverage is not configured, add the minimal configuration needed using the existing tooling already present in the repo (do not introduce new dependencies unless absolutely required and allowed by project rules).

2) Run tests WITH coverage and record the result:
   - Execute the appropriate command for coverage.
   - Capture current overall coverage percentages (lines/branches/functions/statements as available).

3) If overall coverage is < 90%:
   - Add new unit tests and/or extend existing ones to raise coverage above 90%.
   - Prefer meaningful tests over trivial lines-coverage padding.
   - Target uncovered branches and edge cases (use the coverage report to locate gaps).
   - Keep tests isolated from production code; do not move tests into script.js.
   - Do not change production behavior; only adjust tests unless a bug is revealed (if a bug is revealed, fix it and add a regression test).

4) Re-run coverage until overall coverage is >= 90%.

────────────────────────────
Constraints
────────────────────────────
- Do not create unnecessary files.
- Modify only what is needed to reach >= 90% coverage.
- Keep code simple and aligned with project rules.

────────────────────────────
Output Requirements
────────────────────────────

Return:
1) The command used to run coverage and the final coverage summary (percentages).
2) The FULL updated content of any files changed (most likely template/script.test.js and possibly config/scripts if required).
3) The FULL updated content of template/prompts.md.

Each file must be clearly separated using:
===== path/to/file =====

The task is incomplete if coverage is not >= 90% or if required files are missing.
