 /* const initialCards = [
    { name: "Val Thorens",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
    { name: "Restaurant terrace",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
    { name: "An outdoor cafe",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg" },
    { name: "A very long bridge, over the forest and through the trees",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg" },
    { name: "Tunnel with morning light",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg" },
    { name: "Mountain house",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg" },

]

console.log(initialCards); */

const editProfileButton = document.querySelector(".profile__edit");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileName = document.querySelector(".profile__name");
const editProfileDescription = document.querySelector(".profile__description");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");
const editProfileNameInput =editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input");
const editProfileForm = editProfileModal.querySelector(".modal__form");

editProfileButton.addEventListener("click", function () {
    editProfileNameInput.value = editProfileName.textContent;
    editProfileDescriptionInput.value = editProfileDescription.textContent;
    editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
    editProfileModal.classList.remove("modal__is-opened");
});

function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    editProfileName.textContent = editProfileNameInput.value;
    editProfileDescription.textContent = editProfileDescriptionInput.value;
    editProfileModal.classList.remove("modal__is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

const newPostButton = document.querySelector(".profile__new-post");
const newPostModal = document.querySelector("#new-post-modal");
const newPostAddForm = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

newPostButton.addEventListener("click", function () {
    newPostModal.classList.add("modal__is-opened");
});

newPostCloseButton.addEventListener("click", function () {
    newPostModal.classList.remove("modal__is-opened");
});

function handleNewPostSubmit(evt) {
    evt.preventDefault();
    console.log(newPostLinkInput.value);
    console.log(newPostCaptionInput.value);
    newPostModal.classList.remove("modal__is-opened");
    newPostAddForm.reset();
}

newPostAddForm.addEventListener("submit", handleNewPostSubmit);