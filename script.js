function openModal(category) {
    document.getElementById('library').style.display = 'none';
    document.getElementById('breed-cards').style.display = 'block';
    document.getElementById('category-nav').style.display = 'block';
    populateBreedCards(category);
}

function returnToCategories() {
    document.getElementById('breed-cards').style.display = 'none';
    document.getElementById('library').style.display = 'block';
    document.getElementById('category-nav').style.display = 'none';
}

function populateBreedCards(category) {
    const breedCardContainer = document.getElementById('breed-card-container');
    breedCardContainer.innerHTML = '';

    const breeds = {
        dog: ['Husky', 'Rottweiler', 'Golden Retriever', 'Shih Tzu'],
        cat: ['British Shorthair', 'Siamese', 'Maine Coon', 'Ragdoll'],
        bird: ['Parrot', 'Falcon', 'Owl', 'Eagle'],
        all: []
    };

    let breedList = [];
    if (category === 'all') {
        breedList = [...breeds.dog, ...breeds.cat, ...breeds.bird, ...breeds.all];
    } else {
        breedList = breeds[category];
    }

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
            description:`
<pre><strong>Species: </strong>Canis lupus familiaris (Domestic Dog)
<strong>Appearance: </strong>
    Size: Medium-sized, typically weighing 35–60 pounds (16–27 kg) and standing 20–24 inches (51–61 cm) tall at the shoulder.
    Coat: Dense, double-layered fur. The undercoat is soft and insulating, while the outer coat is straight and weather-resistant.
    Color: Comes in a variety of colors, including black, white, gray, red, or a mix, often with striking patterns or markings.
    Eyes: Almond-shaped eyes, often in striking blue, brown, or bi-colored combinations (heterochromia).
    Ears: Upright, triangular ears with a slightly rounded tip.
    Tail: A bushy, fox-like tail that curls over the back when alert.
<strong>Traits: </strong> Canis lupus familiaris (Domestic Dog)
    Athletic: Built for endurance, with a lean and muscular frame ideal for pulling sleds over long distances.
    Adaptable: Thrives in cold climates but can adapt to milder environments with proper care.
    Energetic: High energy levels make them excellent for active households or as working dogs.
    Intelligent: Highly intelligent and capable of learning quickly, though they can also be independent and willful.
<strong>Behavior: </strong> Canis lupus familiaris (Domestic Dog)
    Friendly: Generally very social and good with families, including children.
    Pack-Oriented: Enjoys the company of other dogs and thrives on teamwork.
    Playful: Loves engaging in outdoor activities, games, and exercise.
    Curious: Tends to explore, making a secure yard or leash essential.
    Independent: While loyal, they are known for being stubborn and may require consistent training.
    Vocal: Communicates through howling, whining, and "talking" rather than barking.
</pre>
            `
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
    document.getElementById('breed-description').innerHTML = breedDetails[breed].description;

    document.getElementById('breed-modal').style.display = 'block';
}

function closeBreedModal() {
    document.getElementById('breed-modal').style.display = 'none';
}

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

    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
    
});
