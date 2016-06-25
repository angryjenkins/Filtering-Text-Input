# testing Word Search, ....

I have used some RegEx tests to isolate words. The search function hides words that do not pass the test.

So far the text field can:
- grab the contents of all elements with the class "wordTarget"
- compare these words to the content of the textfield on each keyup
- .remove() elements after the word is typed.

Things to do;
- add text highlight to match typed characters with characters in the Target Word.
- add a "fire" button OR disable the [ENTER] key.