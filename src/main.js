// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const loader = document.getElementById("loader");
const gallery = document.getElementById("gallery");
const lightbox = new SimpleLightbox();

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchTerm = searchInput.value.trim();

  if (searchTerm !== "") {
    showLoader();
    clearGallery();

    fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`)
      .then(response => response.json())
      .then(data => {
        hideLoader();

        if (data.hits.length > 0) {
          displayImages(data.hits);
        } else {
          showNoResultsMessage();
        }
      })
      .catch(error => {
        hideLoader();
        showErrorToast("Error fetching images. Please try again.");
        console.error("Error fetching images:", error);
      });
  }
});

function showLoader() {
  loader.style.display = "block";
}

function hideLoader() {
  loader.style.display = "none";
}

function clearGallery() {
  gallery.innerHTML = "";
  lightbox.refresh();
}

function displayImages(images) {
  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });

  lightbox.refresh();
}

function createImageCard(image) {
  const card = document.createElement("div");
  card.classList.add("image-card");

  const thumbnail = document.createElement("img");
  thumbnail.src = image.webformatURL;
  thumbnail.alt = image.tags;
  thumbnail.addEventListener("click", () => {
    lightbox.open({ items: [{ src: image.largeImageURL, title: image.tags }] });
  });

  const likes = document.createElement("span");
  likes.innerText = `Likes: ${image.likes}`;

  const views = document.createElement("span");
  views.innerText = `Views: ${image.views}`;

  card.appendChild(thumbnail);
  card.appendChild(likes);
  card.appendChild(views);

  return card;
}

function showNoResultsMessage() {
  iziToast.info({
    title: "Sorry",
    message: "There are no images matching your search query. Please try again.",
    position: "topCenter",
  });
}

function showErrorToast(message) {
  iziToast.error({
    title: "Error",
    message: message,
    position: "topCenter",
  });
}