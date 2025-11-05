# Assignment 01

## Brief

Starting from the concept of a pinboard, implement a web page that:

- is responsive (properly layout for smartphone, tablet, and desktop)
- allows the user to add and remove elements
- allows the user to customize elements (i.e. colors, size)
- allows the switch between two views (at least)

## Final result
![first screenshot] (DOC/)
![second screenshot] (DOC/)
![third screenshot] (DOC/)
![fourth screenshot] (DOC/)

## Project description


## Block diagram
graph TD
    A[index.html (Webpage)] --> B(<body>);
    B --> C( <header> );
    B --> D( <main> );
    
    C --> C1( <h1>My Food Journal</h1> );
    C --> C2( <form id="add-meal-form"> );
    C --> C3( <div id="view-toggle-container"> );
    
    C2 --> C2a(Input: Meal name);
    C2 --> C2b(Input: Meal image - type="file");
    C2 --> C2c(Select: Meal tag);
    C2 --> C2d(Button: #add-btn - Add meal);
    
    C3 --> C3a(Button: #list-btn);
    C3 --> C3b(Button: #grid-btn);
    
    D --> D1( <ul id="meal-container" class="grid-view / list-view"> );
    
    D1 --> D1a( <li class="meal-card"> );
    D1a --> D1a1(Image);
    D1a --> D1a2(Meal Content - Title/Tag);
    D1a --> D1a3(Button: .remove-btn);
    
    style D1 fill:#f9f,stroke:#333
    style C2 fill:#fcc,stroke:#333
    style C3 fill:#ddf,stroke:#333
    
    subgraph JavaScript Interaction
        C2d --> D1;
        C3a & C3b --> D1;
        D1a3 --> D1;
    end

## Function
- name of function
- arguments
- description
- what it returns

## Content & data sources

  
