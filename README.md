- Với việc Server side rendering thì browser sẽ tải ít javascrupt code hơn giúp cho việc download mã ngườn được nhanh hơn
- Với Client Components thì sẽ được pre-rendered trên server nhưng cũng có thể render ở phía client
## Image Component:
### Props:
- [fill](): Property này sẽ nói với NextJS rằng ảnh sẽ chiếm trọn không gian của thẻ cha

## Error Page:
- Trong Error Component sẽ có 1 prop là error. Chứa thêm thông tin về error được throw
- Lý do Error Page cần được đánh dấu là Client Side là vì chúng ta phải đảm bảo rằng mình có thể bắt được những lỗi xảy ra ở phía browser.

## use server
- Nếu component/page được đánh dấu là 'use client' thì ta không thể hoàn toàn sử dụng 'use server' bên trong component/page

## useActionState
- Sẽ quản lí state của component sử dụng thẻ form cái mà sẽ được gửi lên với sự giúp đỡ của Server Actions.
- Khi khai báo, ta cần truyền vào 2 tham số.
  - Tham số đầu tiên sẽ là server action cái mà được trigger khi form được gửi (Tức là cần truyền hàm cái mà đang hoạt động ở phía server).
    - Khi này, useActionState sẽ truyền vào hàm 2 tham số
      - Tham số đầu tiên: sẽ là state trước đó.
      - Tham số thứ 2 vẫn sẽ là data lấy từ form.
  - Tham số thứ 2 sẽ là state khởi tạo của component đó
- Nó sẽ trả về 1 mảng với 2 phần tử
  - Phần tử đầu tiên sẽ là state hiện tại
  - Phần tử thứ 2 sẽ là 1 formAction để truyền vào thuộc tính action trong form (Cái này sẽ được thay thế cho hàm mà ta khai báo là server action).

## Build môi trường Production
- Để chuyển sang môi trường production, ta sẽ sử dụng câu lệnh npm run build.
- Sau đó, ta sẽ chạy lệnh npm start để chạy môi trường product.
- Khi chạy câu lệnh build, những web tĩnh sẽ được pre-render và cache lại bởi nextjs (như là file tin tức, list blog, ...). Vì thế sẽ xảy ra hiện tượng khi ta thêm mới 1 cái gì đó, trang đó sẽ không kéo được data mới về.
- Vì thế sau khi thêm mới 1 cái gì đó, thì ta sẽ sử dụng 1 hook là revalidatePath.
  - Hàm này sẽ nói cho NextJS biết là cần phải reload lại cache của 1 đường dẫn cụ thể
  - Tham số thứ 2 trong hàm này sẽ là scope sẽ được revalidate. Nó sẽ có các tham số như page hoặc layout. Nếu truyền là layout (tức là những page con nằm bên trong) cũng sẽ được revalidate.

## metadata
- Với page tĩnh thì ta có thể trực tiếp export biến có tên là metadata ở trong layout hoặc page để thiết lập title, description,...
- Với page động thì ta phải export 1 async funtion với tên là generateMetadata và return 1 object. Các đối số trong hàm này sẽ tương tự như là đối số mà component nhận. 