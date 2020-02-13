# notes
Home Task 1:
Create a console application NoteBook. The application should be able to do the following:
1) Create notes, that consist of a title and a note body. (command example: create -t “<noteTitle>” -b “<noteBody>”).
2) Find a note by its title and print out its body text. (command example: read -t “<noteTitle>”).
3) Print all stored notes in console. (command example: list)
4) Edit a note. Search for note to edit is done by title. (command example: edit -t “<noteTitle>” -b “<newBody>”)
5) Delete a note by title. (command example: delete -t <noteTitle>)
All notes should be stored in a json file.

Useful links:
1)	Yargs - A package for creating console applications. Good for creating commands and for parsing arguments.
2)	fs.readFileSync , fs.writeFileSync – for reading and writing files.
3)	JSON.parse – for parsing json to object from string.
4)	JSON.stringify – for converting an object to string.
5)	Array.push , Array.find , Array.splice , Array.forEach, Array.findIndex – methods for working with arrays that might help you.