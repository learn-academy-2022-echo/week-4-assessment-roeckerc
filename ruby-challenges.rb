# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
# pseudocode: use def and end for my method in ruby. give the method a name. give the method a parameter
# write an if statement that uses .even? to check and then print the even result else print the odd result
def is_it_even num
    if num.even? == true
        p "#{num} is even"
    else
        p "#{num} is odd"
    end
end
is_it_even num1
is_it_even num2
is_it_even num3


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'
p 'Abbey Road'.downcase.tr('aeiouy', '')
# pseudocode: use def and end for my method in ruby. Give the method a name disemvowler. give the method a paramter of string
# use BIM(built in method)  .tr with aeiouy which takes all of those letters and replaces them with nothing, but i could put something in the empty ''. I could also use p string.delete "aeiouAEIOU"... but i like this way. 

def disemvowler string
    p string.tr('aeiouAEIOU', '')
end
disemvowler beatles_album1
disemvowler beatles_album2
disemvowler beatles_album3

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'
# plesudocode: use def and end for my method in ruby. Give the method a name of palindome_testing_machine. give the method a parameter of string.
# make and if else statement that checks if the string in lowercase is == to string in lowercase reverse using .downcase and .reverse. return is or is not  respectively

def palindome_testing_machine string
    if string.downcase == string.downcase.reverse
        p "#{string} is a palindrome"
    else
        p "#{string} is not a palindrome"
    end
end
palindome_testing_machine palindrome_tester1
palindome_testing_machine palindrome_tester2
palindome_testing_machine palindrome_tester3