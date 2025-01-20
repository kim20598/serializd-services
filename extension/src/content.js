/**
 * @typedef {Object} ServiceData
 * @property {string} name - The service's name.
 * @property {string} url - The service's search URL.
 * @property {string} icon - The service's icon URL.
 */

/**
 * Parse the page URL and extract the last number as IMDb and TMDb ID
 *
 * @returns {string|null} Extracted ID or null if not found
 */
const getImdbID = () => {
  const url = window.location.href;
  const id = url.split("-").pop(); // Grabs the number after the last hyphen
  return id && /^\d+$/.test(id) ? id : null;
};

/**
 * Parse the page URL and extract the last number as IMDb and TMDb ID
 *
 * @returns {string|null} Extracted ID or null if not found
 */
const getTmdbID = () => {
  const url = window.location.href;
  const id = url.split("-").pop(); // Grabs the number after the last hyphen
  return id && /^\d+$/.test(id) ? id : null;
};

/**
 * Fetch the TMDb ID for a given film name using the TMDb API
 *
 * @param {string} filmName - The name (slug) of the film
 * @returns {Promise<string|null>} The TMDb ID or null if not found
 */
const fetchTmdbIdFromLetterboxd = async (filmName) => {
  const apiKey = ''; // Replace with your TMDb API key
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(filmName)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.results && data.results.length > 0) {
      // Return the TMDb ID of the first result
      return data.results[0].id;
    } else {
      console.error('Movie not found on TMDb');
      return null;
    }
  } catch (error) {
    console.error('Error fetching TMDb data:', error);
    return null;
  }
};

/**
 * Enhance the "Where to Watch" section
 *
 * @param {HTMLElement} container - The container of the "Where to Watch" section
 */
const enhanceWhereToWatchSection = (container) => {
  console.log("Enhancing the 'Where to Watch' section...");

  const query = document.querySelector("h1")?.textContent.trim().replace(/\s+/g, "-") || "";
  const imdbId = getImdbID();
  const tmdbId = null; // Placeholder for TMDb ID logic

  // Fetch the custom services from the global `getServices` function
  const customServices = globalThis.getServices?.(query, imdbId, tmdbId) || [];

  customServices.forEach((service) => {
    const serviceLink = document.createElement("a");
    serviceLink.href = service.url;
    serviceLink.target = "_blank";
    serviceLink.style.marginRight = "8px";

    const serviceIcon = document.createElement("img");
    serviceIcon.src = service.icon;
    serviceIcon.alt = `Icon for ${service.name}`;
    serviceIcon.width = 40;
    serviceIcon.height = 40;
    serviceIcon.style.borderRadius = "8px";
    serviceIcon.style.border = "1px solid";

    serviceLink.appendChild(serviceIcon);

    container.appendChild(serviceLink);
  });

  console.log("Enhancement complete!");
};

/**
 * Wait for the "Where to Watch" section to appear
 *
 * @returns {Promise<HTMLElement>} Resolves with the "Where to Watch" container once it appears
 */
const waitForWhereToWatchSection = () => {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutations, observer) => {
      const container = document.querySelector(".where-to-watch-container");
      if (container) {
        observer.disconnect();
        resolve(container);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Check if the element already exists
    const container = document.querySelector(".where-to-watch-container");
    if (container) {
      observer.disconnect();
      resolve(container);
    }
  });
};

/**
 * Initialize the enhancement process
 */
const initEnhancement = async () => {
  const container = await waitForWhereToWatchSection();
  enhanceWhereToWatchSection(container);
};

window.onload = async () => {
  initEnhancement();

  const query = getQuery();
  const imdbId = getImdbID();
  const tmdbId = getTmdbID();

  let fetchedTmdbId = tmdbId;

  // If we don't find TMDb ID on the page, try to fetch it from Letterboxd
  if (!fetchedTmdbId) {
    const filmName = getLetterboxdFilmName();
    if (filmName) {
      fetchedTmdbId = await fetchTmdbIdFromLetterboxd(filmName);
    }
  }

  if (!query || (!imdbId && !fetchedTmdbId)) {
    console.error("Failed to retrieve query, IMDb ID, or TMDb ID.");
    return;
  }

  const services = globalThis.getServices?.(query, imdbId, fetchedTmdbId) || [];
  for (const service of services) {
    addService(service);
  }
};
