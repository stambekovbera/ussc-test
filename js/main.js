window.addEventListener("DOMContentLoaded", () => {
  const tabs = (tabSelector, contentSelector, activeClass) => {
    const tabsBtn = document.querySelectorAll(tabSelector),
      contents = document.querySelectorAll(contentSelector);

    tabsBtn.forEach((item) => {
      item.addEventListener("click", () => {
        let contentId = item.getAttribute("data-tab");
        let content = document.querySelector(contentId);

        if (!item.classList.contains(activeClass)) {
          tabsBtn.forEach((item) => {
            item.classList.remove(activeClass);
          });
          contents.forEach((item) => {
            item.classList.remove(activeClass);
          });

          item.classList.add(activeClass);
          content.classList.add(activeClass);
        }
      });
    });
    document.querySelector(tabSelector).click();
  };
  tabs(".menu__nav-link", ".content__text", "active");
});
