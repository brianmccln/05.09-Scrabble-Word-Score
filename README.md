# Scrabble Word Score
## This JS program works as follows:
### User enters a word in input box and hit enter
### enter event calls the calcScore() function,
### which gets the value of the input -- the word.
### function checks of word is in the 180K dictionary
### if so, it breaks word into array of letters and loops arr
### Each letter is used as dynamic key to loop up value in 
### letter values object of 26 A-Z letter key-value pairs
### score is incremented for each letter of word
### after score is complete, func ends by outputting score to DOM
### If word is not in dictionary, output msg says so.
