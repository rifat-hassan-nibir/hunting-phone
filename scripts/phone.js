const loadPhones = async (searchText, isShowAll) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await response.json();
  const phones = data.data;
  displayPhones(phones, isShowAll);
};

// show all button
const showAllButton = document.getElementById("show-all-button");

const displayPhones = (phones, isShowAll) => {
  const phonesContainer = document.getElementById("phones-container");

  // clearing container before appending phones
  phonesContainer.innerHTML = ``;

  // Show all phones
  if (isShowAll) {
    showAllButton.classList.add("hidden");
  } else if (!isShowAll && phones.length > 9) {
    showAllButton.classList.remove("hidden");
    phones = phones.slice(0, 9);
  }

  // Showing the phones on ui
  phones.forEach((phone) => {
    showPhoneOnUi(phone);

    // Loader
    loader(false);
  });
};

// Show all phones
const showAllFunc = () => {
  handleSearch(true);
};

// Search Fuctionality
const handleSearch = (isShowAll) => {
  const searchText = document.getElementById("search-field").value;
  loadPhones(searchText, isShowAll);
  loader(true);
};

// load single phone details funcitonality
const loadSinglePhoneDetails = async (id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await response.json();
  const phoneDetails = data.data;
  showSinglePhoneDetails(phoneDetails);
};

// show single phone details
const showSinglePhoneDetails = (phoneDetails) => {
  console.log(phoneDetails);
  const modalContainer = document.getElementById("my_modal_5");
  const modalDiv = document.createElement("div");
  modalDiv.classList.add("modal-box");
  modalDiv.innerHTML = `
          <h3 class="font-bold text-lg lg:mb-5 mb-3">${
            phoneDetails.name ? phoneDetails.name : "Not found"
          }</h3>
          <div class="flex justify-center lg:pb-5 pb-3">
            <img src="${phoneDetails.image ? phoneDetails.image : "Not found"}" alt="" />
          </div>
          <h4 class="mb-2"><span class="font-semibold">Release Date:</span> ${
            phoneDetails.releaseDate ? phoneDetails.releaseDate : "Not found"
          }</h4>
          <h4 class="mb-2"><span class="font-semibold">Display Size:</span> ${
            phoneDetails.mainFeatures.displaySize ? phoneDetails.mainFeatures.displaySize : "Not found"
          }</h4>
          <h4 class="mb-2"><span class="font-semibold">Storage:</span> ${
            phoneDetails.mainFeatures.storage ? phoneDetails.mainFeatures.storage : "Not found"
          }</h4>
          <h4 class="mb-2"><span class="font-semibold">Memory:</span> ${
            phoneDetails.mainFeatures.memory ? phoneDetails.mainFeatures.memory : "Not found"
          }</h4>
          <h4 class="mb-2"><span class="font-semibold">Chipset:</span> ${
            phoneDetails.mainFeatures.chipSet ? phoneDetails.mainFeatures.chipSet : "Not found"
          }</h4>
          <div class="modal-action">
            <form method="dialog">
              <!-- if there is a button in form, it will close the modal -->
              <button class="btn bg-theme-color text-white font-bold">Close</button>
            </form>
          </div>
  `;
  modalContainer.appendChild(modalDiv);
  my_modal_5.showModal();
};
