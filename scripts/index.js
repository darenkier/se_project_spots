 const initialCards = [
    { name: "Golden Gate Bridge",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg" },
    { name: "Val Thorens",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
    { name: "Restaurant terrace",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
    { name: "An outdoor cafe",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg" },
    { name: "A very long bridge, over the forest and through the trees",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg" },
    { name: "Tunnel with morning light",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg" },
    { name: "Mountain house",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg" },

]

const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
    const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
   const cardElement = cardTemplate
   .cloneNode(true);
   const cardTitleElement = cardElement.querySelector(".card__title");
   const cardImageElement = cardElement.querySelector(".card__image");

   cardImageElement.src = data.link;
   cardImageElement.alt = data.name;
   cardTitleElement.textContent = data.name;
   
   const previewModal = document.querySelector("#preview-modal");
   const previewModalCloseButton = previewModal.querySelector(".modal__preview_close");
   const previewImageElement = previewModal.querySelector(".modal__image");
   const previewCaptionElement = previewModal.querySelector(".modal__caption");

   const cardLikeButtonElement = cardElement.querySelector(".card__like-button");

   cardLikeButtonElement.addEventListener("click", () => {
       cardLikeButtonElement.classList.toggle("card__like-button_active");
   });

   const cardDeleteButtonElement = cardElement.querySelector(".card__delete-button");

   cardDeleteButtonElement.addEventListener("click", () => {
       cardElement.remove();
       cardElement = null;
   });

   previewModalCloseButton.addEventListener("click", function () {
    closeModal(previewModal);
   });

   cardImageElement.addEventListener("click", () => {
       previewImageElement.src = data.link;
       previewImageElement.alt = data.name;
       previewCaptionElement.textContent = data.name;
       openModal(previewModal); 
   });

   return cardElement;
}

initialCards.forEach(function (item) {
   const cardElement = getCardElement(item);
   cardList.append(cardElement);
});

function openModal(modal) {
    modal.classList.add("modal__is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal__is-opened");
}

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
    openModal(editProfileModal);
});

editProfileCloseButton.addEventListener("click", function () {
    closeModal(editProfileModal);
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

const newPostButton = document.querySelector(".profile__new-post");
const newPostModal = document.querySelector("#new-post-modal");
const newPostAddForm = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

newPostButton.addEventListener("click", function () {
    openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
    closeModal(newPostModal);
});

function handleNewPostSubmit(evt) {
    evt.preventDefault();
    console.log(newPostLinkInput.value);
    console.log(newPostCaptionInput.value);
    closeModal(newPostModal);
    newPostAddForm.reset();
}

newPostAddForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const cardInputeValues = {
        name: newPostCaptionInput.value,
        link: newPostLinkInput.value,
    };
    const cardElement = getCardElement(cardInputeValues);
    cardList.prepend(cardElement);

});