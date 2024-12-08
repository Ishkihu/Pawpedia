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
        dog: ['Husky', 'Rottweiler', 'Golden Retriever', 'Shih Tzu'],
        cat: ['British Shorthair', 'Siamese', 'Maine Coon', 'Ragdoll'],
        bird: ['Parrot', 'Falcon', 'Owl', 'Eagle'],
        all: []
    };

    let breedList = [];

    // Get the appropriate breed list based on the category
    if (category === 'all') {
        // Combine all categories and sort alphabetically
        breedList = [...breeds.dog, ...breeds.cat, ...breeds.bird, ...breeds.all];
    } else {
        breedList = breeds[category];
    }

    // Sort the breed list alphabetically (case-insensitive)
    breedList.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

    // Generate the cards
    breedList.forEach(breed => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="./Assets/${breed.toLowerCase().replace(/\s+/g, '')}1.jpg" alt="${breed}" class="card-img-main">
            <img src="./Assets/${breed.toLowerCase().replace(/\s+/g, '')}2.jpg" alt="${breed} Hover" class="card-img-hover">
            <div class="background">
                <p>${breed}</p>
            </div>
        `;
        card.onclick = () => showBreedDetails(breed);
        breedCardContainer.appendChild(card);
    });
}


function closeModal() {
    document.getElementById('breed-cards').style.display = 'none';
    document.getElementById('library').style.display = 'block';
}

function showBreedDetails(breed) {
    const breedDetails = {
        //========================DOGS================================
        Husky: {
            background: 'Assets/husky1.jpg',
            image: 'Assets/husky2.jpg',
            description: 'Labradors are friendly and outgoing dogs. Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.Labradors are friendly and outgoing dogs.'
        },
        Rottweiler: {
            background: 'Assets/rottweiler1.jpg',
            image: 'Assets/rottweiler2.jpg',
            description: 'Poodles are intelligent and active dogs.'
        },
        'Golden Retriever': {
            background: 'Assets/goldenretriever1.jpg',
            image: 'Assets/goldenretriever2.jpg',
            description: 'Bulldogs are calm and serene dogs.'
        },
        'Shih Tzu': {
            background: 'Assets/shihtzu1.jpg',
            image: 'Assets/shihtzu2.jpg',
            description: 'Bulldogs are calm and serene dogs.'
        },

        //========================CATS================================
        'British Shorthair': {
            background: 'Assets/britishshorthair1.jpg',
            image: 'Assets/britishshorthair2.jpg',
            description: 'Persian cats are quiet and sweet.'
        },
        Siamese: {
            background: 'Assets/siamese1.jpg',
            image: 'Assets/siamese2.jpg',
            description: 'Siamese cats are social and vocal.'
        },
        'Maine Coon': {
            background: 'Assets/mainecoon1.jpg',
            image: 'Assets/mainecoon2.jpg',
            description: 'Maine Coon cats are large and friendly.'
        },
        Ragdoll: {
            background: 'Assets/ragdoll1.jpg',
            image: 'Assets/ragdoll2.jpg',
            description: 'Maine Coon cats are large and friendly.'
        },

        //========================BIRDS================================
        Parrot: {
            background: 'Assets/parrot1.jpg',
            image: 'Assets/parrot2.jpg',
            description: 'Parrots are intelligent and colorful birds.'
        },
        Falcon: {
            background: 'Assets/falcon1.jpg',
            image: 'Assets/falcon2.jpg',
            description: 'Canaries are small and melodious birds.'
        },
        Owl: {
            background: 'Assets/owl1.jpg',
            image: 'Assets/owl2.jpg',
            description: 'Finches are lively and social birds.'
        },
        Eagle: {
            background: 'Assets/eagle1.jpg',
            image: 'Assets/eagle2.jpg',
            description: 'Finches are lively and social birds.'
        },
    };
    document.getElementById('background-image').src = breedDetails[breed].background;
    document.getElementById('breed-image').src = breedDetails[breed].image;
    document.getElementById('breed-name').textContent = breed;
    document.getElementById('breed-description').textContent = breedDetails[breed].description;

    document.getElementById('breed-modal').style.display = 'block';
}

function closeBreedModal() {
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


document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
