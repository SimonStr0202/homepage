class TopBanner extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
      <div class="header-bar">
			<div class="vstack">
				<div class="hstack">
					<button class="plain-button" id="dropdownButton">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M3 6h18M3 12h18M3 18h18" />
						</svg>
					</button>
					<a class="plain-button" href=/home/ width="100%" height="100%">SimonStr</label>
				</div>
				<div id="dropdownMenu" class="vstack">
					<a href="/products/" class="dropdown-button">Produkte</a>
				</div>
			</div>
		</div>
    `;
		var menu = document.getElementById("dropdownMenu");
		var dropdownButton = document.getElementById("dropdownButton");

		menu.style.display = "none";
		dropdownButton.addEventListener("click", () => {
			if (menu.style.display == "none") {
				menu.style.display = "";
			} else {
				menu.style.display = "none";
			}
		});
	}
}
customElements.define("top-banner", TopBanner);
