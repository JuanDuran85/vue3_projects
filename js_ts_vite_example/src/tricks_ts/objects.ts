

const person = {
    name: 'John',
    lastName: 'Doe',
    age: 30,
    location: {
        city: 'New York',
        state: 'NY'
    },
    address: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY'
    }
}

// structuredClone is a new feature in ES2020 to clone objects
const personCloneTwo = structuredClone(person);
console.log(personCloneTwo);
personCloneTwo.name = 'Jane';
console.log(person);
personCloneTwo.address.city = 'Los Angeles';
console.log(person);