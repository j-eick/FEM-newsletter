**Newsletter**

Basic newsletter example.

**Tech**

- Vite, React, TS
- React Router
- Basic Input validation via _Regex_

**Code**

- Input-Validation:

  - Currently validation happens on button-click, which is everything but optimal.
    Further improvement in the next iteration. (_[https://github.com/j-eick/FEM-newsletter/blob/main/src/components/input/Input.tsx][link]_)

  ```typescript
  const checkInput = /^[a-zA-Z0-9.]{1,25}@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,5}$/;

  if (checkInput.test(input)) {
    setIsEmailInvalid(false);
  } else {
    setIsEmailInvalid(true);
  }

  if (inputRef.current) {
    inputRef.current.focus();
  }
  ```

[def]: https://github.com/j-eick/FEM-newsletter/blob/main/src/components/input/Input.tsx
