# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: in object-oriented programming, everything is an object. Ruby uses object oriented programming, but JavaScript uses functional programming

Researched answer:
<!-- Object oriented programming is type of programming that uses classes of objects and functions (or methods) that work on them. The classes are the blueprint used to create specific objects. Functional programming is different in that Object oriented programming stores data in objects, which is not possible with functional programming. Functional programming takes data and transforms it by making functions. Essentially, the methods for storing and manipulating the data are different.

Object-oriented programming is centered around objects. Objects are typically instances of a class, and functions of a class are called methods. These methods pertain only to the class and the objects created by them, so the encapsulation allows for the scope of the code to be contained. This allows for more manipulation of data with changing state and methods. Therefore if there is any error or bug in code, it should not affect other classes or areas of code. With functional programming, functions are the focus point of the language. We write functions to manipulate data without changing states. The data being manipulated is typically immutable. As the functions are written for immutable data, it should be able to be invoked and reused whenever. -->

2. What is the difference between a Float and an Integer in Ruby?

Your answer: 
Float is a number that needs more numbers after a decimal where as an integer is like a whole number. a rounded off number with no decimal.

Researched answer: 
Float is a number that needs more numbers after a decimal(2.333) where as an integer is like a whole number(2), a rounded off number with no decimal. 
Ruby will auto round to the nearest integer if you give it a math problem that would normally return a float. (25/3) the result would be 8. If you want to access an answer that has a float, all you have to do is give it a decimal in the problem. (25.0/3) the result will be 8.33333333333334.

3. Ruby has an implicit return. What does that mean?

Your answer: Implicit return in ruby means that you dont have to type the actual word return. It will return whatever is the last line where the return would be. 


Researched answer:
Implicit return in ruby means that you dont have to type the actual word return. It will return whatever is the last line where the return would be. 
def example
    'I dont need a stupid return'
end
p example
=> 'I dont need a stupid return'
where as in Javascript, when using a function, you have to give a return so that the function will output something. I keep mixing these 2 up and even more so during my white boarding. When under pressure, i brain fart and mixup my codes but it is an easy quick fix and its one of the downfalls of knowing multiple languages. so instead of being mad at myself for it, i am proud of myself for be polilingual.

4. What is a block in Ruby?

Your answer: blocks in ruby contain a "do" and an "end". It is a function, that is passed to a method to determine what action should be performed

Researched answer:

In ruby, there is a thing called a block. It is defined by do/end and is an anonymous function. The do part of the block is letting ruby know its about to do something to whatever argument is passed. The end is just the last part of that block and it closes it off. just like a pair of () or []. the block will take the argument and return something back to you. which is defined with an implicit return as stated in the previous question. 

5. What is an instance variable in Ruby?

Your answer: I see it as a scoped variable within a class. As in it is scoped to only inside that one class that it is created in, just like in JS if you create a variable inside a function, it is scoped to that function. 

Researched answer:
An instance variable in Ruby is precurrsered with the @ symbol and then the variable name. It has a set scope of the class in which it was written. But... there is a way to acess the variable. it is not completely off limits. if you use a set and get methods and assign them to that variable we can use it elsewhere. the other option is to use the attr_accessor which does the same thing as declaring the methods of set and get. 

## Looking Ahead: Terms for Next Week

1. PostgreSQL:
    it is an open source database management system

2. Ruby on Rails:
    Is a program that communicates between ruby and a database. 
3. ORM: ORM object relational mapping allows a develeoper to work with a database as though it was .... need to do a way better answer explain SQL

4. Active Record: stores memeory in different kinds of tata bases. AR is an ORM we use to move tuby to databases.

5. Migrations: is a tool to modify the shape of your database, ie make a column after you already have columns made. 
