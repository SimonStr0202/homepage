function truncateString(str, maxLength) {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + "...";
}

async function loadNews() {
  try {
    console.log("Fetching news...");
    const response = await fetch("/data/news.json");
    console.log("Parsing JSON...");
    const obj = await response.json();

    console.log("Getting articles...");
    const news = obj.articles;

    document.getElementById("news-loader").style.display = "none";
    console.log("Success!", news);
    const container = document.getElementById("news-container");

    news.forEach((singleNews) => {
      const clone = document
        .getElementById("news-template")
        .content.cloneNode(true);
      clone.querySelector(".news-header").textContent = singleNews.title;
      console.log("loaded title")
      clone.querySelector(".news-content").textContent = truncateString(singleNews.content, 100);
      
      container.appendChild(clone);
    });
    
  } catch (error) {
    console.error("AHHH ABORT ABORT", error);
  }
}

loadNews();
