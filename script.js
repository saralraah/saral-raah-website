(() => {
  const WHATSAPP_NUMBER = "917047977177";
  const translations = document.querySelectorAll("[data-en]");
  let currentLanguage = "en";

  function setLanguage(language) {
    currentLanguage = language;
    document.documentElement.lang = language;
    translations.forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.textContent = value;
    });
    document.querySelectorAll("[data-en-html]").forEach((element) => {
      element.innerHTML = element.dataset[language === "en" ? "enHtml" : "hiHtml"];
    });
    document.querySelectorAll("[placeholder]").forEach((element) => {
      if (!element.dataset.enPlaceholder) element.dataset.enPlaceholder = element.placeholder;
      if (!element.dataset.hiPlaceholder) {
        const map = {
          "e.g. Hotel, electrician, construction, job...": "जैसे होटल, इलेक्ट्रीशियन, निर्माण, नौकरी...",
          "Your name": "आपका नाम",
          "+91": "+91",
          "Area / City": "क्षेत्र / शहर",
          "Tell us a little more...": "अपनी ज़रूरत के बारे में थोड़ा और बताएँ..."
        };
        element.dataset.hiPlaceholder = map[element.dataset.enPlaceholder] || element.dataset.enPlaceholder;
      }
      element.placeholder = language === "hi" ? element.dataset.hiPlaceholder : element.dataset.enPlaceholder;
    });
    const button = document.getElementById("langSwitch");
    button.textContent = language === "en" ? "हिंदी" : "English";
    try { localStorage.setItem("sr-language", language); } catch (_) {}
  }

  document.getElementById("langSwitch").addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "hi" : "en");
  });

  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  menuToggle.addEventListener("click", () => mobileNav.classList.toggle("open"));
  mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => mobileNav.classList.remove("open")));

  const toast = document.getElementById("toast");
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 3200);
  }

  function sendToWhatsApp(message) {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  document.getElementById("requirementForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Saral Raah, I have a requirement.",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("phone")}`,
      `Category: ${data.get("category")}`,
      `Location: ${data.get("location")}`,
      `Details: ${data.get("details") || "Not provided"}`,
      "Please guide me with suitable next steps."
    ].join("\n");
    sendToWhatsApp(message);
  });

  document.getElementById("networkForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hello Saral Raah, I am interested in joining your network.",
      `Name / Business: ${data.get("name")}`,
      `Mobile: ${data.get("phone")}`,
      `Joining as: ${data.get("role")}`,
      `City / Area: ${data.get("location")}`,
      "Please share the next steps."
    ].join("\n");
    sendToWhatsApp(message);
  });

  document.getElementById("searchForm").addEventListener("submit", event => {
    event.preventDefault();
    const query = document.getElementById("serviceSearch").value.trim();
    if (!query) {
      showToast(currentLanguage === "hi" ? "कृपया अपनी ज़रूरत लिखें।" : "Please enter what you are looking for.");
      return;
    }
    document.getElementById("requirementCategory").value = "";
    document.querySelector("#requirementForm textarea").value = query;
    document.getElementById("requirement").scrollIntoView({behavior:"smooth"});
    showToast(currentLanguage === "hi" ? "कृपया नीचे अपनी जानकारी भरें।" : "Please complete the form below.");
  });

  document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
      document.getElementById("requirementCategory").value = card.dataset.category;
    });
  });

  document.getElementById("year").textContent = new Date().getFullYear();
  try {
    const saved = localStorage.getItem("sr-language");
    if (saved === "hi") setLanguage("hi");
  } catch (_) {}
})();
