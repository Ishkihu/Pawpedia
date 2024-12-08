function openModal(category) {
    // Hide the category cards
    document.getElementById('library').style.display = 'none';
    
    // Show the breed cards section
    document.getElementById('breed-cards').style.display = 'block';
    
    // Show the navigation bar
    document.getElementById('category-nav').style.display = 'block';
    
    // Populate the breed cards based on the selected category
    populateBreedCards(category);
}

function returnToCategories() {
    // Hide the breed cards section
    document.getElementById('breed-cards').style.display = 'none';
    
    // Show the category cards
    document.getElementById('library').style.display = 'block';
    
    // Hide the navigation bar
    document.getElementById('category-nav').style.display = 'none';
}

function populateBreedCards(category) {
    const breedCardContainer = document.getElementById('breed-card-container');
    breedCardContainer.innerHTML = ''; // Clear existing cards

    const breeds = {
        dog: ['Labrador', 'Poodle', 'Bulldog', 'Corgi'],
        cat: ['Persian', 'Siamese', 'Maine Coon', 'Pusang Kalye'],
        bird: ['Parrot', 'Canary', 'Finch', 'Eagle'],
        all: ['jack sparrow', 'malupiton', 'hambre']
    };

    let breedList = [];

    if (category === 'all') {
        // Combine all breeds into one array and sort alphabetically
        breedList = [...breeds.dog, ...breeds.cat, ...breeds.bird, ...breeds.all].sort((a, b) => a.localeCompare(b));
    } else {
        breedList = breeds[category];
    }

    breedList.forEach(breed => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="./Assets/${breed.toLowerCase().replace(' ', '')}.jpg" alt="${breed}" class="card-img-main">
            <div class="background">
                <p>${breed}</p>
            </div>
        `;
        card.onclick = () => showBreedDetails(breed);
        breedCardContainer.appendChild(card);
    });
}

function closeModal() {
    // Hide the breed cards section
    document.getElementById('breed-cards').style.display = 'none';
    
    // Show the category cards
    document.getElementById('library').style.display = 'block';
}

function showBreedDetails(breed) {
    const breedDetails = {
        Labrador: {
            image: 'Assets/dog22.jpg',
            description: 'Labradors are friendly and outgoing dogs.'
        },
        Poodle: {
            image: 'Assets/poodle.jpg',
            description: 'Poodles are intelligent and active dogs.'
        },
        Bulldog: {
            image: 'Assets/bulldog.jpg',
            description: 'Bulldogs are calm and serene dogs.'
        },
        Persian: {
            image: 'Assets/persian.jpg',
            description: 'Persian cats are quiet and sweet.'
        },
        Siamese: {
            image: 'Assets/siamese.jpg',
            description: 'Siamese cats are social and vocal.'
        },
        'Maine Coon': {
            image: 'Assets/mainecoon.jpg',
            description: 'Maine Coon cats are large and friendly.'
        },
        Parrot: {
            image: 'Assets/parrot.jpg',
            description: 'Parrots are intelligent and colorful birds.'
        },
        Canary: {
            image: 'Assets/canary.jpg',
            description: 'Canaries are small and melodious birds.'
        },
        Finch: {
            image: 'Assets/finch.jpg',
            description: 'Finches are lively and social birds.'
        },
        'jack sparrow': {
            image: 'Assets/jacksparrow.jpg',
            description: 'Jack Sparrows are adventurous and brave.'
        },
        malupiton: {
            image: 'Assets/malupiton.jpg',
            description: 'Malupitons are rare and mysterious.'
        },
        hambre: {
            image: 'Assets/hambre.jpg',
            description: 'Hambres are fierce and strong.'
        }
    };

    document.getElementById('breed-image').src = breedDetails[breed].image;
    document.getElementById('breed-name').textContent = breed;
    document.getElementById('breed-description').textContent = breedDetails[breed].description;

    // Show the breed modal
    document.getElementById('breed-modal').style.display = 'block';
}

function closeBreedModal() {
    // Hide the breed modal
    document.getElementById('breed-modal').style.display = 'none';
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('breed-modal');
    if (event.target == modal) {
        closeBreedModal();
    }
};


function openContactForm() {
    document.getElementById("contact-modal").style.display = "block";
}

function closeContactForm() {
    document.getElementById("contact-modal").style.display = "none";
}

window.onclick = function (event) {
    const modal = document.getElementById("contact-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

