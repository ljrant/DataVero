async function loadIncludes() {
  const elements = document.querySelectorAll("[data-include]");

  for (const element of elements) {
    const file = element.getAttribute("data-include");

    try {
      const response = await fetch(file);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      element.outerHTML = await response.text();
    } catch (error) {
      console.error(`Osion lataaminen epäonnistui: ${file}`, error);

      element.innerHTML = `
        <div class="wrap include-error">
          Osion lataaminen epäonnistui: ${file}
        </div>
      `;
    }
  }
}

loadIncludes();
