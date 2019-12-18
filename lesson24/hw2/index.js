// export function studentsBirthDays(students) {
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

//     let final = {};

//     let [...studentsArray] = students;
    
//     studentsArray
//         .sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))

//         .forEach(student => {
//         let studentMonth = new Date(student.birthDate).getMonth();
//         let numbOfMonth = months[studentMonth];

//         if (final.hasOwnProperty(numbOfMonth)) {
//             final[numbOfMonth].push(student.name);
//         } else {
//             final[numbOfMonth] = [student.name];
//         }  
//     });

//     return final;
// }

function studentsBirthDays(students) {

    let [...studentsArray] = students;
    console.log(studentsArray);
    studentsArray
        .sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))

        .reduce((acc, student) => {
            let stBday = new Date(student.birthDate).toLocaleString('en', {month: 'short'});
            console.log(stBday);
            acc[stBday] = [student.name];
            return;
        }, {});

    return studentsArray;
}

let students = [
    { name: 'Tom', birthDate: '01/15/2010' },
    { name: 'Kom', birthDate: '01/16/2010' },
    { name: 'Jom', birthDate: '02/17/2010' },
    { name: 'Wom', birthDate: '01/11/2010' },
    { name: 'Qom', birthDate: '02/19/2010' },
    { name: 'Rom', birthDate: '01/09/2010' },
    { name: 'Som', birthDate: '03/21/2010' },
    { name: 'Dom', birthDate: '04/22/2010' },
]

console.log(studentsBirthDays(students));
// studentsBirthDays(students);