document.addEventListener("DOMContentLoaded", function () {
    const animals = [
        { name: "beetal goat", breed: "beetal", price: "12,000pkr",location: "Lahore", description: "Healthy Boer goat", image: "img/goat1.jpg",  type: "Goat" },
        { name: "High Quality", breed: "Kaghani", price: "20,000pkr",location: "Lahore", description: "Strong Kaghani goat", image: "img/gaot2.jpg", type: "Goat" },
        { name: "Heavy Bull", breed: "Angus", price: "35,000pkr",location: "Karachi", description: "Powerful Angus bull", image: "img/cow.jpg", type: "Bull" },
        { name: "Big Bull ", breed: "Brahman", price: "18,000pkr",location: "Karachi", description: "Large Brahman bull", image: "img/cow3.jpg", type: "Bull" },
        { name: "Red Camel", breed: "Dromedary", price: "25,000pkr",location: "Islamabad", description: "Desert Dromedary camel", image: "img/camel.jpg", type: "Camel" },
        { name: "Big Camel", breed: "Bactrian", price: "30,000pkr",location: "Islamabad",  description: "Strong Bactrian camel", image: "img/camel2.jpg",type: "Camel" },
        { name: "White Goat", breed: "Boer", price: "200,000pkr",location: "Lahore", description: "Healthy Boer goat", image: "img/goat.jpg", type: "Goat" },
        { name: "Mountain Goat", breed: "Kaghani", price: "250,000pkr",location: "Karachi", description: "Strong Kaghani goat", image: "img/gaot2.jpg", type: "Goat" },
        { name: "Red Bull", breed: "Angus", price: "1,500pkr",location: "Islamabad", description: "Powerful Angus bull", image: "img/cow2.jpg", type: "Bull" },
        { name: "Brown Bull", breed: "Brahman", price: "1,800pkr",location: "Karachi", description: "Large Brahman bull", image: "img/cow2.jpg", type: "Bull" },
        { name: "Best Camel", breed: "Dromedary", price: "2,500pkr",location: "Islamabad", description: "Desert Dromedary camel", image: "img/camel1.jpg", type: "Camel" },
        { name: "Camel in lahore", breed: "Bactrian", price: "3,000pkr",location: "Lahore", description: "Strong Bactrian camel", image: "img/camel.jpg", type: "Camel" },
        { name: "beetal bakra", breed: "Boer", price: "20,00pkr",location: "Lahore", description: "Healthy Boer goat", image: "img/goat1.jpg", type: "Goat" },
        { name: "brown bakra", breed: "Kaghani", price: "250,000pkr",location: "Karachi", description: "Strong Kaghani goat", image: "img/gaot2.jpg", type: "Goat" },
        { name: "qurbani cow", breed: "Angus", price: "15,000pkr",location: "Islamabad", description: "Powerful Angus bull", image: "img/cow1.jpg", type: "Bull" },
        { name: "good bull", breed: "Brahman", price: "18,000",location: "Lahore", description: "Large Brahman bull", image: "img/cow.jpg", type: "Bull" },
        { name: "Camel in white", breed: "Dromedary", price: "25,000pkr",location: "Islamabad", description: "Desert Dromedary camel", image: "img/camel1.jpg", type: "Camel" },
        { name: "Camel for sale", breed: "Bactrian", price: "30,000pkr",location: "Karachi", description: "Strong Bactrian camel", image: "img/camel.jpg", type: "Camel" }
    ];


 // Detect page type (Goat, Camel, Bull, or Home)
 const pageType = document.body.getAttribute("data-page-type");

 function displayAnimals(filteredAnimals = animals) {
     const container = document.getElementById("animal-list");
     if (!container) return;
     container.innerHTML = ""; // Clear previous content

     filteredAnimals.forEach(animal => {
         // If on a specific page, show only that type of animal
         if (!pageType || animal.type === pageType || pageType === "Home") {
             const card = document.createElement("div");
             card.classList.add("animal-card");
             card.innerHTML = `
                 <img src="${animal.image}" alt="${animal.name}">
                 <h3>${animal.name}</h3>
                 <p><strong>Breed:</strong> ${animal.breed}</p>
                 <p><strong>Price:</strong> ${animal.price}</p>
                 <p><strong>Location:</strong> ${animal.location}</p>
                 <p>${animal.description}</p>
             `;
             container.appendChild(card);
         }
     });
 }

 // Function to filter by location
 function filterByLocation() {
     const selectedLocation = document.getElementById("location").value;

     let filteredAnimals;
     if (selectedLocation === "all") {
         filteredAnimals = animals; // Show all animals
     } else {
         // Filter by location and type (except on home page)
         filteredAnimals = animals.filter(animal => 
             (pageType === "Home" || animal.type === pageType) && 
             animal.location === selectedLocation
         );
     }

     displayAnimals(filteredAnimals);
 }

 // Attach event listener to filter button
 document.getElementById("filterBtn").addEventListener("click", filterByLocation);

 // Initial display of animals
 displayAnimals();
});



