export function studentsBirthDays(students) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    let final = {};

    let [...studentsArray] = students
        .sort((a, b) => a.birthDate.split('/')[1] - b.birthDate.split('/')[1])

        .forEach(student => {
        let studentMonth = new Date(student.birthDate).getMonth();
        let numbOfMonth = months[studentMonth];

        if (final.hasOwnProperty(numbOfMonth)) {
            final[numbOfMonth].push(student.name);
        } else {
            final[numbOfMonth] = [student.name];
        }  
    });

    return final;
}

// let students = [
//     { name: 'Tom', birthDate: '01/15/2010' },
//     { name: 'Kom', birthDate: '01/16/2010' },
//     { name: 'Jom', birthDate: '02/17/2010' },
//     { name: 'Wom', birthDate: '01/11/2010' },
//     { name: 'Qom', birthDate: '02/19/2010' },
//     { name: 'Rom', birthDate: '01/09/2010' },
//     { name: 'Som', birthDate: '03/21/2010' },
//     { name: 'Dom', birthDate: '04/22/2010' },
// ]