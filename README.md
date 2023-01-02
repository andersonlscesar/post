# Post System 

At this application you are gonna post with images, comment and leave a like on it.
I'll follow the mvc standard and i'm just using the composer in order to load the classes, because it would be more complicated to load the classes if i try to create my own autoloader.

---

## How am i organizing this project?


### Controller

- app // All the constraints about the system
    - Controller 
    - Http // Routing managing
    - Utils // Classe that renders the content

- Includes // Main configuration

### Styling

- public
    - css
    - font
    - img
    - js
    - scss
    - ts

### View

- resources
    - view
        - layout