# Warp Drive – A Text-Based Space Adventure

**Warp Drive** is a simple, browser-based space exploration game built with HTML and JavaScript. The game is structured around object-oriented programming principles and features randomized beacon events, resource management (fuel and hull), and a win/loss condition based on player choices.

Play it here: **[https://jdmcauley.github.io/warp-drive/](https://jdmcauley.github.io/warp-drive/)**

## Overview

Players jump between randomized beacons, each containing a unique event. Choices at each beacon affect the ship’s fuel and hull. Once all standard beacons have been visited, a final beacon is revealed to conclude the game. Each beacon is used only once per run, and events are fully text-based with minimal visuals.

## Features

- Object-oriented structure using JavaScript classes  
- Randomized beacon events  
- One-time beacon usage  
- Resource tracking (fuel and hull)  
- Final beacon appears after all others are visited

## Files

- `index.html` — main HTML structure  
- `script.js` — game logic and functionality

## How to Contribute

Contributions are welcome. Please keep things simple and readable.

- Use consistent code style  
- Avoid overcomplicating features  
- Submit a pull request with a short description

## Known Issues

- Spamming the **Jump** button can prematurely trigger a win  
- It's possible to interact with the game after a **Game Over**  
- Players can gain **fuel and hull** indefinitely through certain events