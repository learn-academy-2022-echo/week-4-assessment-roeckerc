// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


describe('shuffleParty', () => {
    it('takes an array, removes the first element and shuffles the remaining contents', () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(shuffleParty(colors1)).toEqual(not.expect.arrayContaining(["purple"]));
        expect(shuffleParty(colors2)).toEqual(not.expect.arrayContaining(["chartreuse"]));
        expect(shuffleParty(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
        expect(shuffleParty(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
    })
})

// b) Create the function that makes the test pass.// 
// psuedocode
//  create function called shuffleParty that takes in an array
const shuffleParty = (array) => {
    // create an empty result array to be returned
        // use the slice method on the array param
        // assign resArray util the slice method
let resArr = array.slice(1)
        // Iterate through the resArray in revers using the Fischer-Yates Algo
    for(let i = resArr.length -1 ; i > 0; i--) {
             // creat random number with max value being the length + 1
        let randomNum = Math.floor(math.random() * i + 1)
                // create a temp variable that save the item int he array at the current iteration
        let temp = resArr[i]
                 // currentItem will be assigned to the item at the random number index in the array
        resArr [i] = resArr[randomNum]
                 // item at random number index will be assigned to the temp variable
        resArr[randomNum] = temp
                // goal is to swap positions in the array
    }
    // return resutl array
return array
}

// i got red when testing just the test. 
// i got a false positive when i made the 

//  GOOD FAIL:
// and good pass? i need to work on this



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.



// a) Create a test with expect statements for each of the variables provided.

// PSEUDO CODE
// create a function that takes an object of key/value vote: up or down
// return total votes


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

    const countingTheVotes = (obj) => {
        let voteTotal = (obj.upVotes - obj.downVotes)
        return voteTotal};

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

describe("noDuplicates", () => {
    it("Create a function that takes in two arrays as arguments and returns one array with no duplicate values", () => {
        expect(noDuplicates(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"]);
    })
})

// GOOD FAIL
// noDuplicates › Create a function that takes in 2 arrays as arguments and returns one array with no duplicate values
// ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.

const noDuplicates = (arr1, arr2) => {
    let zeroDubbles = [];
    arr1.map((value) => {
       if (zeroDubbles.includes(value) === false) {
        zeroDubbles.push(value)
       } 
    })
    arr2.map((value) => {
        if (zeroDubbles.includes(value) === false) {
            zeroDubbles.push(value)
        } 
     })
    return noDuplicates
}