const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

// const gallery = document.querySelector(`.gallery`);

// const loadOptimization = document.createDocumentFragment();

// images.forEach(image => {
//   const li = document.createElement(`li`);

//   const img = document.createElement("img");

//   img.src = image.url;
//   img.alt = image.alt;
//   img.classList.add(`gallery-image`);

//   li.appendChild(img);

//   loadOptimization.appendChild(li);
// });

// gallery.appendChild(loadOptimization);

const gallery = document.querySelector(".gallery");

gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.gap = "48px";
gallery.style.columnGap = "24px";
gallery.style.listStyle = "none";
gallery.style.justifyContent = "center";
gallery.style.padding = "0";
gallery.style.maxWidth = "900px";

gallery.insertAdjacentHTML(
  "beforeend",
  images
    .map(
      ({ url, alt }) =>
        `<li style="flex: 1 1 calc(33.333% - 24px); max-width: 300px; display: flex; justify-content: center;">
          <img src="${url}" alt="${alt}" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);"></li>`
    )
    .join("")
);