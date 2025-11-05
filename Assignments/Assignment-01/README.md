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
    A[index.html (The Page)] --> B(<body>);
    
    Graph Header and Controls
        B --> C(<header>);
        C --> C1(<h1>My Food Journal</h1>);
        C --> C2(<form id="add-meal-form">);
        C --> C3(<div id="view-toggle-container">);
        
        C2 --> C2a[Input: Meal name];
        C2 --> C2b[Input: Meal image - type="file"];
        C2 --> C2c[Select: Meal tag];
        C2 --> C2d[Button: #add-btn];
        
        C3 --> C3a[Button: #list-btn];
        C3 --> C3b[Button: #grid-btn];
        
        style C2 fill:#ffcccc,stroke:#900
        style C3 fill:#ccccff,stroke:#009
    end

    Graph Main content
        B --> D(<main>);
        D --> D1(<ul id="meal-container" class="grid-view/list-view">);
        
        D1 --> D1a(<li class="meal-card" (Example/Dynamic)>);
        D1a --> D1a1[Image];
        D1a --> D1a2[Meal Content (Title/Tag)];
        D1a --> D1a3[Button: .remove-btn];
        
        style D1 fill:#ccffcc,stroke:#090
    end

   Graph JavaScript interaction Flow
        C2d -->|Reads data, uses FileReader| D1;
        C3a & C3b -->|Toggles class| D1;
        D1a3 -->|Event Delegation| D1;
    end

## Function
- name of function
- arguments
- description
- what it returns

## Content & data sources

  
