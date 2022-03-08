

// Note: Interface is a better version of type 

interface Player {
    name: string,
    age: number,
    isMarried: boolean,
    wife?: string,
    club?: string,
    previousClubs?: string[]
}

const sakib: Player = {
    name: 'shakib al hasan',
    age: 32,
    isMarried: true,
    wife: 'shishir'
}
const tamim: Player = {
    name: 'tamim iqbal',
    age: 34,
    isMarried: true,
    club: 'Abahoni'
}


// Note: Use extends like Constructor and Super in class 

interface Employee {
    name: string,
    role?: string,
    salary: number,
    company?: string
}


// Case 1

/*
interface Developer {
    section: string,
    codeEditor: string,
    position: string
}

const simon: Developer = {
    section: 'App Dev',
    codeEditor: 'Vs Code',
    position: 'Senior App dev'
}
*/


// Case 2 

interface Developer extends Employee {
    section: string,
    codeEditor: string,
    position: string
}

const simon: Developer = {
    name: 'Simone Cowell',
    salary: 50000,
    section: 'App Dev',
    codeEditor: 'Vs Code',
    position: 'Senior App dev'
}
