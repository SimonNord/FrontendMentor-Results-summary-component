const getjson = async () => {
  try {
    const response = await fetch("./data.json");
    return response.json();
  } catch (error) {}
};

const createItems = (summaryItems) => {
  const summarySectionEl = document.querySelector(".summary");

  summaryItems.forEach((item) => {
    const summaryItemEl = document.createElement("div");
    summaryItemEl.classList.add("summary-item");
    summaryItemEl.classList.add(item.category.toLowerCase());

    const summaryItemTitleEl = document.createElement("div");
    summaryItemTitleEl.classList.add("summary-item-title");

    const imageEl = document.createElement("img");

    imageEl.src = item.icon;
    const spanEl = document.createElement("span");
    spanEl.textContent = item.category;

    summaryItemTitleEl.appendChild(imageEl);
    summaryItemTitleEl.appendChild(spanEl);

    const summaryItemScoreEl = document.createElement("div");
    summaryItemScoreEl.classList.add("summary-item-score");
    summaryItemScoreEl.innerHTML = `<span class="score"><strong>${item.score}</strong></span> / <span>100</span>`;

    summaryItemEl.appendChild(summaryItemTitleEl);
    summaryItemEl.appendChild(summaryItemScoreEl);
    summarySectionEl.appendChild(summaryItemEl);
  });
  summarySectionEl.innerHTML += `
   <button>Continue</button>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by <a href="https://github.com/SimonNord">Simon Nordström</a>.
    </div>`;
};

const summaryItems = await getjson();

createItems(summaryItems);
