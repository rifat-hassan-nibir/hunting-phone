const loadPhones = async (searchText) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await response.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  const phonesContainer = document.getElementById("phones-container");

  // show all button
  const showAllButton = document.getElementById("show-all-button");

  // clearing container before appending phones
  phonesContainer.innerHTML = ``;

  if (phones.length > 10) {
    phones = phones.slice(0, 10);
    showAllButton.classList.remove("hidden");

    // Showing the phones on ui
    phones.forEach((phone) => {
      showPhoneOnUi(phone);
    });
  } else {
    showAllButton.classList.add("hidden");
  }
};

// Search Fuctionality

const handleSearch = () => {
  const searchText = document.getElementById("search-field").value;
  loadPhones(searchText);
};
