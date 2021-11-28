/**
 * Overwrites click behaviour on anchor tags to scroll to href ID
 */
export const navigationHandler = (event) => {
  event.preventDefault();

  document
    .querySelector(event.target.closest("a").getAttribute("href"))
    .scrollIntoView({ behavior: "smooth" });
};
