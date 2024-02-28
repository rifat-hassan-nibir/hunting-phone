const loadPhones = async () => {
  const response = await fetch("https://openapi.programming-hero.com/api/phones?search=iphone");
  const data = await response.json();
  const phones = data.data;
  displayPhones(phones);
};

const displayPhones = (phones) => {
  phones.forEach((phone) => {
    console.log(phone);
  });
};

loadPhones();
