// Tính tổng từ 1 đến 100.

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("Total from 1 to 100 is ", sum);

// In bảng cửu chương từ 2 đến 9.

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i, " x ", j, " = ", i * j)
    }
}

// Tạo một mảng chứa các số lẻ từ 1 đến 99.

let oddNumber = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 != 0) {
        oddNumber.push(i);
    }

}
console.log("odd number for 1 to 99 is ", oddNumber);

// In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ:
// user1@example.com, user2@example.com, ..., user10@example.com).

let emailList = [];

for (let i = 1; i <= 10; i++) {
    console.log("user", i, "@example.com,")
}


// Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và
// in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau:
// {“month”: 2, “total”: 100}

let revenue = [
    { "month": 1, "total": 100 },
    { "month": 2, "total": 50 },
    { "month": 3, "total": 90 },
    { "month": 4, "total": 77 },
    { "month": 5, "total": 88 },
    { "month": 6, "total": 99 },
    { "month": 7, "total": 78 },
    { "month": 8, "total": 98 },
    { "month": 9, "total": 66 },
    { "month": 10, "total": 99 },
    { "month": 11, "total": 56 },
    { "month": 12, "total": 87 }
]

let totalRevenue = 0;
for (let i = 0; i < revenue.length; i++) {
    totalRevenue = totalRevenue + revenue[i].total;
}

console.log("Total revenue for all of the year is", totalRevenue);