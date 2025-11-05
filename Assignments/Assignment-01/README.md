# Assignment 01 - My Food Journal

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
    A[index.html] --> B(Body);
    
    B --> C(Header);
    B --> D(Main Content);
    
    subgraph User Input & Controls
        C --> C1(Form: #add-meal-form);
        C --> C2(Div: #view-toggle-container);
        
        C1 --> C1a[Input: Name];
        C1 --> C1b[Input: Image File];
        C1 --> C1c[Select: Tag];
        C1 --> C1d[Button: Add meal];
        
        C2 --> C2a[Button: List View];
        C2 --> C2b[Button: Grid View];
    end
    
    subgraph Meal Display Area
        D --> D1(UL: #meal-container);
        D1 --> D1a(<li class="meal-card">);
        
        D1a --> D1a1[Image];
        D1a --> D1a2[Details: Title/Tag];
        D1a --> D1a3[Button: .remove-btn];
    end
    
    subgraph JavaScript Logic Flow
        C1d -.->|FileReader + Append| D1;
        C2a & C2b -.->|Toggle Class| D1;
        D1a3 -.->|Event Delegation| D1;
    end
## Function
- name of function
- arguments
- description
- what it returns

## Content & data sources

  
