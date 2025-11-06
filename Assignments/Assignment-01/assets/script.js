//main container --> meal container
const mealContainer = document.getElementById('meal-container');

//butttons
const listButton = document.getElementById('list-btn');
const gridButton = document.getElementById('grid-btn');

//elements
const addForm = document.getElementById('add-meal-form');
const nameInput = document.getElementById('meal-name');
const imgInput = document.getElementById('meal-img');
const tagInput = document.getElementById('meal-tag');

//meal container

//event listeners
//list toggle
listButton.addEventListener('click', () => {
        mealContainer.classList.remove('grid-view');
        mealContainer.classList.add('list-view');
        
        //toggle active state
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });

//grid toggle
gridButton.addEventListener('click', () => {
        mealContainer.classList.remove('list-view');
        mealContainer.classList.add('grid-view');
        
        //toggle active state
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });

// add new meal card after click "add"
addForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop the page from reloading
        addMeal();
    });

//remove meal
mealContainer.addEventListener('click', (event) => {
        // Check if the specific thing we clicked was a remove button
        if (event.target.classList.contains('remove-btn')) {
            // Find the parent 'li' (the .meal-card) and remove it
            const cardToRemove = event.target.closest('li.meal-card');
            if (cardToRemove) {
                cardToRemove.remove();
            }
        }
    });


//create & add new meal card with img
function addMeal() {
        const name = nameInput.value;
        const tagValue = tagInput.value; 
        const tagText = tagInput.options[tagInput.selectedIndex].text;

        const file = imgInput.files[0];

        if (!file) {
        alert("Please select an image file.");
        return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            const imageUrl = e.target.result;

            const mealCard = document.createElement('li');
            mealCard.classList.add('meal-card');

            mealCard.innerHTML = `
                <img src="${imageUrl}" alt="${name}">
                <div class="meal-content">
                    <h3>${name}</h3>
                    <span class="tag tag-${tagValue}">${tagText}</span>
                </div>
                <button class="remove-btn">x</button>
            `;

            mealContainer.appendChild(mealCard);

            addForm.reset();
            };

            reader.readAsDataURL(file);
        }
