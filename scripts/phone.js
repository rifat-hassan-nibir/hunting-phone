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
