// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const quote = document.getElementById("quote");
    const cite = document.getElementById("author");

    async function updateQuote() {
      // Fetch a random quote from the Quotable API
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      if (response.ok) {
        // Update DOM elements
        quote.textContent = data.content;
        cite.textContent = "~" + data.author;
      } else {
        quote.textContent = "An error occured";
        console.log(data);
      }
    }
    // call updateQuote once when page loads
    updateQuote();
  });
