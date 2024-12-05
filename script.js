function openModal(category) {
    // Populate the breed list based on the category
    const breeds = {
        dog: ['Labrador', 'Poodle', 'Bulldog'],
        cat: ['Persian', 'Siamese', 'Maine Coon'],
        bird: ['Parrot', 'Canary', 'Finch'],
        reptile: ['Iguana', 'Gecko', 'Snake'],
        fish: ['Goldfish', 'Betta', 'Guppy']
    };

    const breedList = document.getElementById('breed-list');
    breedList.innerHTML = '';
    breeds[category].forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        li.onclick = () => showBreedDetails(breed);
        breedList.appendChild(li);
    });

    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function showBreedDetails(breed) {
    // Update the breed details based on the selected breed
    const breedDetails = {
        Labrador: {
            image: 'path/to/labrador.jpg',
            description: 'Labradors are friendly and outgoing dogs.'
        },
        Poodle: {
            image: 'path/to/poodle.jpg',
            description: 'Poodles are intelligent and active dogs.'
        },
        // Add more breed details here
    };

    document.getElementById('breed-image').src = breedDetails[breed].image;
    document.getElementById('breed-description').textContent = breedDetails[breed].description;
}