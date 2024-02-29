// Showing phones on ui

const showPhoneOnUi = (phone) => {
  const phonesContainer = document.getElementById("phones-container");
  const phonesDiv = document.createElement("div");
  phonesDiv.classList = `text-center lg:space-y-[20px] space-y-[10px] border-2 border-[#CFCFCF] lg:p-[25px] p-[10px] rounded-lg`;
  phonesDiv.innerHTML = `
        <img class="mx-auto" src="${phone.image}" alt="" />
        <h3 class="lg:text-[25px] text-[16px] font-bold text-[#403F3F]">${phone.phone_name}</h3>
        <button onclick="loadSinglePhoneDetails('${phone.slug}')" class="lg:text-[20px] text-[14px] font-semibold inline-block bg-theme-color text-white py-[10px] px-[20px] rounded-lg"
        >Show Details</button>
      `;
  phonesContainer.appendChild(phonesDiv);
};

// loader
const loader = (isLoading) => {
  const loader = document.getElementById("loader");
  if (isLoading) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};
