// CODE here for your Lambda Classes
class Person {
    constructor(attr) {
        this.name = attr.name;
        this.age = attr.age;
        this.location = attr.location;
        this.gender = attr.gender;
    }
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person {
    constructor(instAttr) {
        super(instAttr);
        this.specialty = instAttr.specialty;
        this.favLanguage = instAttr.favLanguage;
        this.catchPhrase = instAttr.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    } 
    assignGrade(student) {
        if (Math.random() > 0.5) {
            student.grade += (Math.floor(Math.random() * 10));
            return `${this.name} raised ${student.name}'s grade to ${student.grade}!`;
        } else {
            student.grade -= (Math.floor(Math.random() * 10));
            return `${this.name} lowered ${student.name}'s grade to ${student.grade}`;
        }
    }
}

class Student extends Person {
    constructor(stuAttr) {
        super(stuAttr);
        this.previousBackground = stuAttr.previousBackground;
        this.className = stuAttr.className;
        this.favSubjects = stuAttr.favSubjects;
        this.grade = stuAttr.grade;
    }
    listsSubjects() {
        return this.favSubjects;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}

class ProjectManagers extends Instructor {
    constructor(PRAttr) {
        super(PRAttr);
        this.gradClassName = PRAttr.gradClassName;
        this.favInstructor = PRAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

const tom = new Instructor({
    name: 'Tom',
    age: 29,
    location: 'Tempe, AZ',
    gender: 'male',
    specialty: 'redux',
    favLanguage: 'Python',
    catchPhrase: 'Tempe pride!'
})

const clarissa = new Instructor({
    name: 'Clarissa',
    age: 34,
    location: 'Boston, MA',
    gender: 'female',
    specialty: 'karate',
    favLanguage: 'Java',
    catchPhrase: `ya can't get there from here`
})

const lemme = new Student({
    name: 'Lemme',
    age: 21,
    location: 'Miami, FL',
    gender: 'male',
    previousBackground: 'latex salesman',
    className: 'WEB22',
    favSubjects: ['CSS', 'Javascript', 'HTML'],
    grade: 79,
})

const daria = new Student({
    name: 'Daria',
    age: 19,
    location: 'Lawndale, USA',
    gender: 'NA',
    previousBackground: 'High school student',
    className: 'CS145',
    favSubjects: ['CSS', 'Web Design', 'Photoshop'],
    grade: 92,
})

const roberta = new ProjectManagers({
    name: 'Roberta',
    age: 52,
    location: 'San Antonio, TX',
    gender: 'female',
    specialty: 'iOS',
    favLanguage: 'Swift',
    catchPhrase: 'Howdy Partners',
    gradClassName: 'IOS12',
    favInstructor: 'Stephan'
})

const terry = new ProjectManagers({
    name: 'Terry',
    age: 39,
    location: 'Chicago, IL',
    gender: 'male',
    specialty: 'CS',
    favLanguage: 'C++',
    catchPhrase: 'Go Cubbies!',
    gradClassName: 'CS11',
    favInstructor: 'Clarissa'
})


console.log(tom.demo('Javascript'));
console.log(clarissa.grade(daria, 'Web Design'));
console.log(lemme.listsSubjects());
console.log(daria.PRAssignment('Advanced CSS'));
console.log(lemme.sprintChallenge('Javascipt'));
console.log(terry.standUp('CS14_Terry'));
console.log(roberta.debugsCode(lemme, 'HTML'));
console.log(terry.assignGrade(daria));
console.log(tom.assignGrade(lemme));
console.log(roberta.assignGrade(daria));
console.log(clarissa.assignGrade(lemme));
console.log(terry.assignGrade(daria));
console.log(tom.assignGrade(lemme));
console.log(tom.assignGrade(lemme));