function openModal(category) {
    const breeds = {
        dog: ['Labrador', 'Poodle', 'Bulldog'],
        cat: ['Persian', 'Siamese', 'Maine Coon'],
        bird: ['Parrot', 'Canary', 'Finch'],
    };

    const breedList = document.getElementById('breed-list');
    breedList.innerHTML = '';
    breeds[category].forEach(breed => {
        const li = document.createElement('li');
        li.textContent = breed;
        li.onclick = () => showBreedDetails(breed);
        breedList.appendChild(li);
    });

    document.getElementById('library-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('library-modal').style.display = 'none';
}

function showBreedDetails(breed) {
    const breedDetails = {
        Labrador: {
            image: 'Assets/labrador.jpg',
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
        // Add more breed details as needed
    };

    document.getElementById('breed-image').src = breedDetails[breed].image;
    document.getElementById('breed-description').textContent = breedDetails[breed].description;
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById('library-modal');
    if (event.target == modal) {
        closeModal();
    }
}