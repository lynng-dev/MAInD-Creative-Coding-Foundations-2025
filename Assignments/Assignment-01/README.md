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
```mermaid
graph TD
    A[index.html] --> B(Body);
    
    Fraph Header & Controls
        B --> C(<header>);
        C --> C2(<form id="add-meal-form">);
        C --> C3(<div id="view-toggle-container">);
        
        C2 --> C2a[Input: Name];
        C2 --> C2b[Input: Image: type="file"];
        C2 --> C2c[Select: Tag];
        C2 --> C2d[Button: Add meal];
        
        C3 --> C3a[Button: List View];
        C3 --> C3b[Button: Grid View];
    end

   Graph Main Content
        B --> D(<main>);
        D --> D1(<ul id="meal-container">);
        D1 --> D1a(<li class="meal-card">);
        D1a --> D1a1[Image];
        D1a --> D1a2[Details];
        D1a --> D1a3[Button: .remove-btn];
    end

   Graph Logic Flow (JavaScript)
        C2d -->|FileReader + Append| D1;
        C3a & C3b -->|Toggle CSS Class| D1;
        D1a3 -->|Remove Card| D1;
    end

## Function
- name of function
- arguments
- description
- what it returns

## Content & data sources

  
