'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

const students = require('./students.json')

//Testing: Worked!// console.log(students)

function fullNames() {
    students.forEach((student) =>
    {
        console.log(`Hello ` + student.firstName + ' ' + student.lastName)
    })
}
fullNames()

function filtered() {
    const dStudents = students.filter(student => Number(student.lastName.startsWith("D")));
    console.log(('Count of last names starting with D is ' + dStudents.length))
}
filtered()
