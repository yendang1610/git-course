import { expect, test } from '@playwright/test';
test("Add Personal notes", async ({ page }) => {
    await test.step("Navigate to Homepage", async () => {
        await page.goto("https://material.playwrightvn.com/");
    })

    // Declare 10 notes from Vnexpress
    const notes = [
        { title: "Người yêu thiên văn có thể quan sát trăng máu ngày mai", desc: "Vào ngày 7/9, gần 6 tỷ người ở nhiều nước trong đó có Việt Nam có thể chiêm ngưỡng Mặt Trăng chuyển sang màu đỏ đồng trong hiện tượng nguyệt thực kéo dài 82 phút." },
        { title: "Bão nhiệt đới mạnh nhất từng ghi nhận", desc: "Bão Tip là cơn bão nhiệt đới lớn và mạnh nhất từng được ghi nhận khi tàn phá vùng tây Thái Bình Dương vào tháng 10/1979 với khối lượng gió và hơi nước gần bằng 1/2 diện tích nước Mỹ." },
        { title: "Màu của iPhone 17 Pro hé lộ qua linh kiện", desc: "Ảnh linh kiện và thông tin rò rỉ cho thấy những thay đổi đáng chú ý trên iPhone 17 Pro, từ Dynamic Island nhỏ gọn hơn đến tùy chọn màu mới." },
        { title: "Google bị phạt 3,45 tỷ USD", desc: "Ủy ban châu Âu (EC) yêu cầu Google nộp phạt 2,95 tỷ euro (3,45 tỷ USD) vì hành vi độc quyền trên thị trường công nghệ quảng cáo" },
        { title: "Robot hình người Tesla bị chê vì chậm chạp", desc: "Robot hình người Optimus hiện được trang bị trợ lý AI Grok, nhưng có vẻ nó vẫn chưa thể trở thành sản phẩm chủ lực của Tesla." },
        { title: "Siêu máy tính AI của Tesla sụp đổ thế nào?", desc: "Dojo, siêu máy tính dùng chip do Tesla tự thiết kế, bị khai tử khi hãng chuyển sang phát triển siêu máy tính khác hoạt động bằng GPU của Nvidia." },
        { title: "Galaxy S25 FE cải tiến thiết kế, nâng cấp AI", desc: "Galaxy S25 FE, phiên bản giá tốt của dòng S25, được làm mỏng nhẹ hơn trước, tích hợp Galaxy AI thế hệ mới nhiều tính năng hơn." },
        { title: "Galaxy S26 Edge 'có thiết kế camera giống iPhone 17 Pro'", desc: "Các mô hình của dòng Galaxy S26 cho thấy thay đổi lớn về thiết kế cụm camera, nhất là trên mẫu siêu mỏng Edge." },
        { title: "Giải pháp máy chủ ảo cho chuyển đổi số của HostingViet", desc: "Công ty Cổ phần công nghệ số Thiên Quang (HostingViet) cung cấp các dịch vụ VPS, Cloud Server, Hosting, thiết kế website, tên miền hỗ trợ doanh nghiệp chuyển đổi số." },
        { title: "Mỹ thử nghiệm máy bay 'Ngày tận thế' mới", desc: "Tập đoàn Sierra Nevada đang thử nghiệm thế hệ máy bay Ngày tận thế mới hiện đại và an toàn hơn, có thể giúp Mỹ duy trì chỉ huy và điều khiển hạt nhân từ trên không" },
    ];

    // Click vao Bai hoc 4: Personal notes
    await test.step("Open Bai hoc 4: Personal notes", async () => {
        await page.locator("//a[@href = '04-xpath-personal-notes.html']").click();
    })

    // Add 10 notes
    await test.step("Add 10 notes", async () => {
        for (let i = 0; i < notes.length; i++) {
            const note = notes[i];
            //console.log(`Adding note ${i + 1}: ${note.title}`);
            await page.fill("//input[@id='note-title']", note.title);
            await page.fill("//textarea[@id='note-content']", note.desc);
            await page.locator("//button[@id='add-note']").click();
        }
        const totalnote = page.locator("//div[@id='note-count']");
        await expect(totalnote).toContainText('10');
    })

    // Search by title
    await test.step("Search by title", async () => {
        for (let i = 0; i < notes.length; i++) {
            const search = notes[i];
            await page.fill("//input[@id ='search']", search.title);
            const searchResult = page.locator("//ul[@id='notes-list']/li/div/strong");
            await expect(searchResult).toContainText(`${search.title}`);
        }
    })

})