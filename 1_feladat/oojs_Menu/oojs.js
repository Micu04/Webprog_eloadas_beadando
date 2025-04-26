class ContentCard {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    createCard() {
        const card = document.createElement('section');
        card.className = 'content-card';

        const titleElement = document.createElement('h2');
        titleElement.textContent = this.title;

        const descElement = document.createElement('p');
        descElement.textContent = this.description;

        card.appendChild(titleElement);
        card.appendChild(descElement);

        return card;
    }

    render(parentSelector) {
        const parent = document.querySelector(parentSelector);
        parent.appendChild(this.createCard());
    }
}

class InteractiveCard extends ContentCard {
    constructor(title, description) {
        super(title, description);
    }
}

const titleInput = document.getElementById('titleInput');
const descInput = document.getElementById('descInput');
const createButton = document.getElementById('createButton');
const cardContainer = document.querySelector('.left-section');

function createNewCard() {
    const title = titleInput.value.trim();
    const description = descInput.value.trim();

    if (title && description) {
        const newCard = new InteractiveCard(title, description);

        cardContainer.appendChild(newCard.createCard());
        
        titleInput.value = '';
        descInput.value = '';
    } else {
        alert('Kérlek töltsd ki mindkét mezőt!');
    }
}

createButton.addEventListener('click', createNewCard);

titleInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        createNewCard();
    }
});

descInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        createNewCard();
    }
});
