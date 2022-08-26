// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

    // PSUEDO CODE
    // create function that takes an array
    // removes first item from array
    // shuffles array
    // return new array
    // for the test, expect statement should be flexible on order of returened array in expected output

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe('rm_First_Element_Shuffle_Array', () => {
    it('takes an array, removes the first element and shuffles the remaining contents', () => {
        expect(rm_First_Element_Shuffle_Array(colors1)).not.toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
        expect(rm_First_Element_Shuffle_Array(colors2)).not.toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
    })
})

//  GOOD FAIL:
//  rm_first_element_shuffle_array › takes an array, removes the first element and shuffles the remaining contents
//  ReferenceError: rm_first_element_shuffle_array is not defined

// b) Create the function that makes the test pass.

const rm_First_Element_Shuffle_Array = (array) => {
    let rm_First_Element = array.pop()
    let shuffle = (arr) => {
        let currentIndex = arr.length, randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex !=0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }
        return arr
    }
    shuffle(rm_First_Element)
}


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// PSEUDO CODE
// create a function that takes an object of key/value vote: up or down
// return total votes

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe('voteCounter', () => {
    it('takes in an object that contains upvotes and downvotes and returns the net total of votes', () => {
        expect(voteCounter(votes1)).toEqual(11);
        expect(voteCounter(votes2)).toEqual(-31);
    })
})

// GOOD FAIL:
// vote_counter › takes in an object that contains upvotes and downvotes and returns the net total of votes
// ReferenceError: voteCounter is not defined

// b) Create the function that makes the test pass.

const voteCounter = (obj) => {
    let voteSum = (obj.upVotes - obj.downVotes)
    return voteSum};


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// PSEUDO CODE
// create a function that takes in two arrays
// iterate over each array
// if value doesn't exist in third array, add to third array
// push the value into a third array
// return the array with NO DUPLICATE VALUES
// STRETCH: No thanks.

// a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("twoArraysNoDuplicates", () => {
    it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(twoArraysNoDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
    })
})

// GOOD FAIL
// twoArraysNoDuplicates › Create a function that takes in two arrays as arguments and returns one array with no duplicate values
// ReferenceError: twoArraysNoDuplicates is not defined

// b) Create the function that makes the test pass.

const twoArraysNoDuplicates = (arr1, arr2) => {
    let noDuplicates = [];
    arr1.map((value) => {
       if (noDuplicates.includes(value) === false) {
        noDuplicates.push(value)
       } 
    })
    arr2.map((value) => {
        if (noDuplicates.includes(value) === false) {
         noDuplicates.push(value)
        } 
     })
    return noDuplicate