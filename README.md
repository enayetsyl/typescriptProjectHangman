## Typescript Project Word Guessing Game

### Introduction

The Hangman game is a classic word-guessing game where players attempt to guess a word by suggesting letters within a limited number of attempts. In this project, we've implemented a digital version of the Hangman game using React, a JavaScript library for building user interfaces.

### About The Project

The project consists of a single-page web application built with React. It includes components for the Hangman game interface, such as the Hangman drawing, the word to guess, and a virtual keyboard for input. The game logic handles checking for correct guesses, updating the game state, and determining whether the player has won or lost.

### Components

- HangmanDrawing

This component displays the Hangman drawing based on the number of incorrect guesses made by the player. It consists of various <div> elements representing the different parts of the Hangman figure.

- HangmanWord

The HangmanWord component displays the word to guess, with letters revealed as the player makes correct guesses. It also handles displaying incorrect guesses in a different color.

- Keyboard

The Keyboard component provides a virtual keyboard for the player to make letter guesses. It disables letters that have already been guessed and highlights correct guesses.

### Game Logic

The game logic tracks the word to guess, the letters guessed by the player, and whether the player has won or lost. It prevents the player from guessing the same letter multiple times and limits the number of incorrect guesses allowed.

### Details About TypeScript Skills

This project serves as a showcase of TypeScript skills, demonstrating type safety and enhanced developer experience.

- TypeScript Usage

- Type Annotations: TypeScript is used to define type annotations for function parameters, state variables, and component props throughout the project.

- Type Safety: TypeScript ensures type safety by detecting potential type errors during development, reducing the likelihood of runtime errors.

- Interface Definitions: Interfaces are used to define the structure of complex data types, enhancing code readability and maintainability.

### Word List

The project includes a JSON file containing a list of words to be used as potential guesses in the game. A random word is selected from this list each time a new game starts.

### Keyboard Input

The game allows players to input guesses via keyboard input. Pressing a letter key will register a guess, and pressing the Enter key will start a new game.

### Conclusion

In conclusion, this project demonstrates the implementation of the classic Hangman game using React and showcases the TypeScript skills of the developer. By playing the game, users can enjoy a fun and challenging word-guessing experience right in their web browser.