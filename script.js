function openModal(category) {
    const breeds = {
        dog: ['Labrador', 'Poodle', 'Bulldog'],
        cat: ['Persian', 'Siamese', 'Maine Coon'],
        bird: ['Parrot', 'Canary', 'Finch']
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
    const breedDetails = {
        Labrador: {
            image: 'path/to/labrador.jpg',
            description: 'Labradors are friendly and outgoing dogs.'
        },
        Poodle: {
            image: 'path/to/poodle.jpg',
            description: 'Poodles are intelligent and active dogs.'
        },
        Persian: {
            image: 'path/to/persian.jpg',
            description: 'Persian cats are known for their long hair and calm demeanor.'
        },
        Siamese: {
            image: 'path/to/siamese.jpg',
            description: 'Siamese cats are social and vocal.'
        },
        Parrot: {
            image: 'path/to/parrot.jpg',
            description: 'Parrots are colorful and intelligent birds.'
        },
        Canary: {
            image: 'path/to/canary.jpg',
            description: 'Canaries are small and known for their singing.'
        }
    };

    document.getElementById('breed-image').src = breedDetails[breed].image;
    document.getElementById('breed-description').textContent = breedDetails[breed].description;
}