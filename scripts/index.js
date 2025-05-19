//Accessing initialCards array in cards.js
import {initialCards} from "./cards.js";

//Card Template
const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");

//Card List
const cardList = document.querySelector(".cards__list");

function renderCard(item, method = "prepend") {
    const cardElement = getCardElement(item);
    cardList[method](cardElement);

}

initialCards.forEach((item) => renderCard(item, 'append'));

// Edit Profile
const editProfileButton = document.querySelector(".profile__edit");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileName = document.querySelector(".profile__name");
const editProfileDescription = document.querySelector(".profile__description");
const editProfileNameInput =editProfileModal.querySelector("#profile-name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile-description-input"); 


const editProfileForm = document.forms["edit-profile-form"]; //editProfileModal.querySelector(".modal__form");

//New Post
const newPostButton = document.querySelector(".profile__new-post");
const newPostModal = document.querySelector("#new-post-modal");
const newPostAddForm = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

//Preview Modal
const previewModal = document.querySelector("#preview-modal");
const previewImageElement = previewModal.querySelector(".modal__image");
const previewCaptionElement = previewModal.querySelector(".modal__caption");

//Opening and Closing Modal Functions
function openModal(modal) {
    modal.classList.add("modal__is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal__is-opened");
}

const closeButtons = document.querySelectorAll('.modal__close-button');

closeButtons.forEach((button) => {
    const modal = button.closest('.modal');

    button.addEventListener('click', () => closeModal(modal));
})

// Edit Profile Section
editProfileButton.addEventListener("click", function () {
    editProfileNameInput.value = editProfileName.textContent;
    editProfileDescriptionInput.value = editProfileDescription.textContent;
    openModal(editProfileModal);
});


function handleEditProfileSubmit(evt) {
    evt.preventDefault();
    editProfileName.textContent = editProfileNameInput.value;
    editProfileDescription.textContent = editProfileDescriptionInput.value;
    closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    handleEditProfileSubmit(evt);
});

//New Post Section
newPostButton.addEventListener("click", function () {
    openModal(newPostModal);
});

newPostAddForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const nameInput = newPostCaptionInput.value;
    const linkInput = newPostLinkInput.value;

    const newCard = {
        name: nameInput,
        link: linkInput
    };

    renderCard(newCard);

    newPostAddForm.reset();

    closeModal(newPostModal);
});

//Cards Section
function getCardElement(data) {
   let cardElement = cardTemplate
   .cloneNode(true);
   const cardTitleElement = cardElement.querySelector(".card__title");
   const cardImageElement = cardElement.querySelector(".card__image");

   cardImageElement.src = data.link;
   cardImageElement.alt = data.name;
   cardTitleElement.textContent = data.name;
   
   const cardLikeButtonElement = cardElement.querySelector(".card__like-button");

   cardLikeButtonElement.addEventListener("click", () => {
       cardLikeButtonElement.classList.toggle("card__like-button_active");
   });

   const cardDeleteButtonElement = cardElement.querySelector(".card__delete-button");

   cardDeleteButtonElement.addEventListener("click", () => {
       cardElement.remove();
   });

   cardImageElement.addEventListener("click", () => {
       previewImageElement.src = data.link;
       previewImageElement.alt = data.name;
       previewCaptionElement.textContent = data.name;
       openModal(previewModal); 
   });

   return cardElement;
}