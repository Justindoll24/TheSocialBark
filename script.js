document.addEventListener("DOMContentLoaded", function () {
    const dogs = [
        {
            name: "Buddy",
            breed: "Labrador Retriever",
            age: "3 years",
            gender: "Male",
            description: "A friendly and playful Labrador looking for a loving home.",
            image: "https://source.unsplash.com/400x300/?labrador"
        },
        {
            name: "Luna",
            breed: "German Shepherd",
            age: "2 years",
            gender: "Female",
            description: "An intelligent and loyal companion, perfect for active families.",
            image: "https://source.unsplash.com/400x300/?german-shepherd"
        },
        {
            name: "Max",
            breed: "Beagle",
            age: "4 years",
            gender: "Male",
            description: "A curious and energetic Beagle who loves long walks.",
            image: "https://source.unsplash.com/400x300/?beagle"
        },
        {
            name: "Daisy",
            breed: "Golden Retriever",
            age: "2.5 years",
            gender: "Female",
            description: "Affectionate and gentle, Daisy is the perfect family dog.",
            image: "https://source.unsplash.com/400x300/?golden-retriever"
        },
        {
            name: "Charlie",
            breed: "Border Collie",
            age: "3 years",
            gender: "Male",
            description: "An active and highly intelligent dog, perfect for training.",
            image: "https://source.unsplash.com/400x300/?border-collie"
        },
        {
            name: "Bella",
            breed: "Boxer Mix",
            age: "1 year",
            gender: "Female",
            description: "A playful and affectionate dog ready to bring joy to your home.",
            image: "https://source.unsplash.com/400x300/?boxer-dog"
        }
    ];

    const dogsContainer = document.getElementById("dogs-list");

    if (dogsContainer) {
        dogs.forEach(dog => {
            const dogCard = document.createElement("div");
            dogCard.className = "dog-card";

            dogCard.innerHTML = `
                <img src="${dog.image}" alt="${dog.name}">
                <h3>${dog.name}</h3>
                <p><strong>Breed:</strong> ${dog.breed}</p>
                <p><strong>Age:</strong> ${dog.age}</p>
                <p><strong>Gender:</strong> ${dog.gender}</p>
                <p>${dog.description}</p>
                <a href="adoption.html" class="btn">Adopt ${dog.name}</a>
            `;

            dogsContainer.appendChild(dogCard);
        });
    }
});
