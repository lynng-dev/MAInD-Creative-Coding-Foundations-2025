# Assignment 02 - Doodle Jump Game

## Brief

Choose a “mini-game” to rebuild with HTML, CSS and JavaScript. The requirements are:

- The webpage should be responsive
- Choose an avatar at the beginning of the game
- Keep track of the score of the player
- Use the keyboard to control the game (indicate what are the controls in the page). You can also use buttons (mouse), but also keyboard.
- Use some multimedia files (audio, video, …)
- Implement an “automatic restart” in the game (that is not done via the refresh of the page)

## Final result
![Mobile-List-view](https://github.com/lynng-dev/MAInD-Creative-Coding-Foundations-2025/blob/main/Assignments/Assignment-01/assets/doc/Mobile-List-view.png)

![Mobile-Card-view](https://github.com/lynng-dev/MAInD-Creative-Coding-Foundations-2025/blob/main/Assignments/Assignment-01/assets/doc/Mobile-Card-view.png)

![Desktop-List-view](https://github.com/lynng-dev/MAInD-Creative-Coding-Foundations-2025/blob/main/Assignments/Assignment-01/assets/doc/Desktop-List-view.png)

![Desktop-Card-view](https://github.com/lynng-dev/MAInD-Creative-Coding-Foundations-2025/blob/main/Assignments/Assignment-01/assets/doc/Desktop-Card-view.png)

## Project description
"Doodle" is a mobile app game.

## Block diagram

```mermaid
    gflowchart TD
    A[Start Page] --> B[Select Character: Doodler / Doodlette]
    B --> C[Click Start Button]
    C --> D[Game Canvas Displayed]
    D --> E[Initialize Game Variables]
    E --> F[Place Initial Platforms (11 total, first platform fixed)]
    F --> G[Game Loop: update()]

    G --> H[Clear Canvas]
    H --> I[Move Doodler]
    I --> J[Apply Gravity & Velocity]
    J --> K[Check Horizontal Wrap]
    K --> L[Draw Doodler]
    L --> M[Draw Platforms with Base.png]
    
    M --> N{Collision?}
    N -->|Yes| O[Reset velocityY to jump value, play jump sound]
    N -->|No| P[Continue falling]
    
    P --> Q[Update Score]
    Q --> R[Check for Game Over]
    R -->|Yes| S[Display "Game Over" message, press Space to restart, play fall sound]
    R -->|No| T[Generate New Platforms if needed]
    
    S --> C[Press Space: Restart Game]
    T --> G[Next Frame]

    %% Additional Interactions
    B -->|Character selected| D
    C -->|Start Game| G

        
```
## Function

##### listButton.clickHandler
- Argument: none
- Description: toggles the display mode of the #meal-container to list-view. It removes the grid-view class, adds the list-view & updates the active state of the toggle buttons.
- Returns: none

##### gridButton.clickHandler
- Argument: none
- Description: toggles the display mode of the #meal-container to grid-view. It removes the list-view class, adds the grid-view & updates the active state of the toggle buttons.
- Returns: none

##### addForm.submitHandler
- Argument: event
- Description: handles the form submission. It calls event.preventDefault() to stop the page from reloading and then executes the addMeal() function.
- Returns: none
  
##### mealContainer.clickHandler
- Argument: event
- Description: It listens for any click within the meal container. If the clicked element is a .remove-btn, it finds the closest parent <li> (the meal card) and removes it from the DOM.
- Returns: none
- 
##### add.Meal
- Argument: none
- Description: The main function for creating and adding a new meal card. It reads form data, checks for a file input, and uses the FileReader API to convert the local image file into a Data URL for immediate display in the <img> tag. Finally, it resets the form.
- Returns: return (--> exits the function) if the imgInput does not contain a file, after showing an alert.

## Content & data sources
none
  
