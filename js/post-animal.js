// post-animal.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('postAnimalForm');
    const categoryOptions = document.querySelectorAll('.category-option');
    
    // Handle category selection
    categoryOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove active class from all options
            categoryOptions.forEach(opt => opt.classList.remove('active'));
            // Add active class to selected option
            this.classList.add('active');
        });
    });

    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const formData = {
            title: document.getElementById('title').value,
            category: document.querySelector('.category-option.active')?.dataset.category,
            price: document.getElementById('price').value,
            weight: document.getElementById('weight').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            description: document.getElementById('description').value,
            tags: document.getElementById('tags').value,
            date: new Date().toISOString(),
            location: 'Lahore, Punjab', 
            images: ['img/default-animal.jpg'] 
        };

        // Save to localStorage
        let listings = JSON.parse(localStorage.getItem('animalListings') || '[]');
        listings.unshift(formData);
        localStorage.setItem('animalListings', JSON.stringify(listings));
        localStorage.setItem('lastPostedListing', JSON.stringify(formData)); 

        alert('Animal posted successfully!');
        window.location.href = 'home.html';
    });
});
