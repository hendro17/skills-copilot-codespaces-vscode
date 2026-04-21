function skillsMember(name, age, skills) {
    return {
        name,
        age,
        skills
    }
}

const member1 = skillsMember('John', 30, ['JavaScript', 'Python']);
console.log(member1);