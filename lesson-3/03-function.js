//Viết hàm multiply nhận 2 tham số a và b, in ra kết quả nhân của chúng. Gọi hàm với 2 cặp giá trị khác nhau.

function multiply(a, b) {
    return a * b;
}

const result1 = multiply(11, 11);
console.log("Value is ", result1);

let result2 = multiply(123, 456);
console.log("Value is " + result2);

// Viết hàm findMin nhận 3 tham số a, b, c, trả về giá trị nhỏ nhất. Gọi hàm và in kết quả với 2 bộ số khác nhau.

function findMin(a, b, c) {
    let min = a;
    if (b < min) {
        min = b;
    }
    if (c < min) {
        min = c;
    }
    return min;
}

const group1 = findMin(999, 546, 344);
console.log("min value is ", group1);

const group2 = findMin(343.223, 123.987, 542, 9485);
console.log("min value is " + group2);

// Viết hàm getTopStudents nhận 2 tham số:
// ● students: mảng các object, mỗi object chứa name (tên) và score (điểm).
// ● threshold: ngưỡng điểm để được coi là "top" (số).
// Hàm trả về mảng mới chứa tên của những học sinh có điểm >= threshold.
// Gọi hàm với danh sách thực tế và in kết quả.

function getTopStudents(students, threshold) {
    let result = [];
    let index = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            result[index] = students[i].name;
            index++;
        }
    }
    return result;
}

const students = [
    { "name": "Yen", "score": 100 },
    { "name": "Vinh", "score": 99 },
    { "name": "Ha", "score": 98 },
    { "name": "Nhung", "score": 50 },
    { "name": "Dat", "score": 88 },
    { "name": "Oanh", "score": 75 },
    { "name": "Anh", "score": 100 },
    { "name": "Duyen", "score": 60 },
    { "name": "Trang", "score": 65 },
    { "name": "Binh", "score": 80 },
]

console.log("Top Students are: ", getTopStudents(students, 100));
console.log("2nd Top Students are: ", getTopStudents(students, 80));

// Viết hàm calculateInterest nhận 3 tham số:
// ● principal: số tiền gửi ban đầu (số).
// ● rate: lãi suất hàng năm (phần trăm, ví dụ 5 nghĩa là 5%).
// ● years: số năm gửi.
// Hàm tính và trả về tổng số tiền (gốc + lãi) sau years năm, sử dụng công thức lãi
// đơn: total = principal + principal * rate * years / 100. Gọi hàm với ví dụ thực tế và
// in kết quả.

function calculateInterest(principal, rate, years) {
    let total = principal + principal * rate * years / 100;
    return total;
}

let total1 = calculateInterest(100000000, 5, 1);
console.log("Tổng tiền gốc và lãi là: ", total1);

let total2 = calculateInterest(1000000, 5, 3);
console.log("Tổng tiền gốc và lãi là: " + total2);

