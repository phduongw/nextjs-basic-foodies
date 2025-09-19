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
- 