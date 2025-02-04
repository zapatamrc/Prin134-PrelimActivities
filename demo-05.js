function calculateAverage(grades) {
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    return sum / grades.length;
}

function getLetterGrade(average) {
    if (average >= 90) return "A";
    if (average >= 80) return "B";
    if (average >= 70) return "C";
    if (average >= 60) return "D";
    return "F";
}

function gradeCalculator(grades) {
    let average = calculateAverage(grades);
    let letterGrade = getLetterGrade(average);
    let result = letterGrade !== "F" ? "You passed." : "You failed.";

    console.log(`Grades: ${grades.join(", ")}. Grade average: ${average.toFixed(1)}. Your rating: ${letterGrade}. ${result}`);
}

gradeCalculator([85, 93, 89, 89, 85, 92, 100, 90, 80, 100]);
gradeCalculator([80, 90, 77, 82, 68, 98, 79, 93, 100]);
gradeCalculator([70, 68, 77, 82, 68, 65, 89, 79, 93, 70]);
gradeCalculator([56, 50, 89, 92, 75, 50, 68, 34, 91, 19]);
gradeCalculator([10, 30, 70, 31, 90, 20, 89, 58, 67, 21]);
