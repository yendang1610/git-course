// Tạo một object car với thuộc tính make=”Toyota”, model=”Corolla”, và
// year=2021. Sau đó in ra năm sản xuất của xe.

let car = { "make": "Toyota", "model": "Corolla", "year": 2021 };
console.log(" Year of manufacture is: ", car.year);

// Tạo một object person có thuộc tính name, address (là một object lồng với các thuộc
// tính street, city, country). In ra tên đường của người này.

let person = {
    "name": "Yen",
    "address": {
        "street": "Pham Van Dong",
        "city": "Hanoi",
        "country": "Vietnam"
    }
}
console.log(person.name, " lives in ", person.address.street, "street");

// Tạo một object student và truy cập đến điểm môn toán (math) sử dụng ngoặc vuông.
// Biết object student bao gồm 2 thuộc tính: name và grades. Trong đó grades là một
// object với 2 thuộc tính kiểu number: math và english

let student = {
    "name": "Yen",
    "grades": {
        "math": 10,
        "english": 10
    }
};
console.log("Student ", student["name"], " has", student["grades"]["math"], " grade for math");

// Tạo một object settings để quản lý cài đặt của ứng dụng với các thuộc tính như
// volume, brightness. Thay đổi volume và in ra object mới.

let settings = {
    "volume": 10,
    "brightness": 50
};

settings.volume = 20;
console.log("New volume is ", settings.volume);

// Tạo một object bike và sau đó thêm thuộc tính color vào object đó

let bike = {
    "color": "yellow"
}
console.log("Color of bike is ", bike["color"]);

// Tạo một object employee với các thuộc tính: name, age và xóa thuộc tính age khỏi object này

let employee = {
    "name": "Yen",
    "age": 40
};
console.log("employee is", employee);
delete employee.age;
console.log("updated employee is ", employee);

// Một trường học có các lớp học và học sinh như sau:
// ○ classA: An, Bình, Châu
// ○ classB: Đào, Hương, Giang
// Hãy viết code để đáp ứng yêu cầu sau:
// - Khai báo tên biến: school
// - Tên class là tên thuộc tính, giá trị của các thuộc tính này là một mảng chứa
// tên các học sinh

let school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};
console.log("list of students in classA is ", school.classA);
console.log("list of students in classB is ", school.classB);

