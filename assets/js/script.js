let userGrade = prompt('Indiquez une note');

if (userGrade <= 3) {
    alert('Nul');
} else if (userGrade >= 4 && userGrade < 6){
    alert('Moyen');
} else if (userGrade >= 6 && userGrade < 8){
    alert('Assez bien');
} else if (userGrade >= 8 && userGrade <= 9) {
    alert('Bien');
} else if (userGrade == 10) {
    alert('Excellent');
}