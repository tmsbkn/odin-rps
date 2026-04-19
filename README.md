# Rock Paper Scissors on the Command Line

This is the first JavaScript project I am building from scratch. Following the advice of the Problem Solving lesson from [The Odin Project](https://www.theodinproject.com/lessons/foundations-problem-solving)

## Understanding the Problem

*Rock Paper Scissors* is a game where you face off against an opponent to see you will win a game of comparison.

The Rules are simple.

**Rock** beats Scissors  
**Paper** beats Rock  
**Scissors** beat Paper

Since this game will be played in the terminal environment, the opponent will be the computer. 

## Planning

### What we will need

 - A way to get the users choice
 - A way to get the computers choice
 - A way to see who wins in the round
 - A way to log the rounds score
 - A way to see the winner of 5 rounds

## Pseudocode

**ASSIGN** each option a number value

- Rock equals 1
- Paper equals 2
- Scissors equals 3

**GET** computer input using a random number generator between 1 and 3

**GET** User input through a prompt

**CHECK** User input is valid

    IF User input == 1 RETURN 'Rock'
    IF User input == 2 RETURN 'Paper'
    IF User input == 3 RETURN 'Scissors'
    ELSE RETURN 'Please pick either 1, 2, or 3!'

COMPARE computer input (*compInput*) to user input (*usrInput*) and see who wins

    IF compInput == usrInput RETURN 'Tie'

    IF compInput == 'Rock' AND usrInput == 'Paper' RETURN 'User Wins'

    IF compInput == 'Rock' AND usrInput == 'Scissors' RETURN 'User Loses'

    etc..

RETURN winner of the round

ADD point to winner

IF either player score or computer score equals 5 game is complete.


