const initialCards = [
    { name: "Val Thorens",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg" },
    { name: "Restaurant terrace",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg" },
    { name: "An outdoor cafe",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg" },
    { name: "A very long bridge, over the forest and through the trees",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg" },
    { name: "Tunnel with morning light",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg" },
    { name: "Mountain house",link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg" },

]

console.log(initialCards);

const editProfileButton = document.querySelector(".profile__edit");

const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(".modal__close-button");

editProfileButton.addEventListener("click", function () {
    editProfileModal.classList.add("modal__is-opened");
});

editProfileCloseButton.addEventListener("click", function () {
    editProfileModal.classList.remove("modal__is-opened");
});

const newPostButton = document.querySelector(".profile__new-post");

const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");

newPostButton.addEventListener("click", function() {
    newPostModal.classList.add("modal__is-opened");
});

newPostCloseButton.addEventListener("click", function () {
    newPostModal.classList.remove("modal__is-opened");
}); 