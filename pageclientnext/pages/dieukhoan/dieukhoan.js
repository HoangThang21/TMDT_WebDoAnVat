import Headerdieukhoan from "@/components/Headerdieukhoan";

import { useTranslation } from "react-i18next";
import "@/i18n/i18n.js";

import React from "react";
import Footer from "@/components/Footer";
import Center from "@/components/Center";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
`;
const Titlelsv2 = styled.h2`
  font-size: 18px;
`;
const Titlelsv3 = styled.h3`
  font-size: 16px;
  padding-left: 10px;
`;
const Text = styled.div`
  padding-left: 20px;
  padding-right: 50px;
  padding-bottom: 10px;
  text-align: justify;
  font-size: 16px;
`;
export default function Dieukhoanpage() {
  const { t } = useTranslation();
  return (
    <div>
      <Center>
        <Title>ĐIỀU KHOẢN DỊCH VỤ</Title>
        <Titlelsv2>1. GIỚI THIỆU</Titlelsv2>
        <Text>
          1.1. Chào mừng bạn đến với nền tảng Techfood. Chúng tôi nghiêm túc
          thực hiện trách nhiệm của mình liên quan đến bảo mật thông tin theo
          các quy định về bảo vệ bí mật thông tin cá nhân của pháp luật việt nam
          (“luật riêng tư”) và cam kết tôn trọng quyền riêng tư và sự quan tâm
          của tất cả người dùng đối với website và ứng dụng di động của chúng
          tôi (“nền tảng”) (chúng tôi gọi chung các nền tảng và các dịch vụ
          chúng tôi cung cấp như được mô tả trong nền tảng của chúng tôi là "các
          dịch vụ"). Người dùng có nghĩa là người đăng ký tài khoản với chúng
          tôi để sử dụng các dịch vụ, bao gồm cả người mua và người bán (gọi
          chung và gọi riêng là “các người dùng”, “bạn” hoặc “của bạn”). Chúng
          tôi nhận biết tầm quan trọng của dữ liệu cá nhân mà bạn đã tin tưởng
          giao cho chúng tôi và tin rằng chúng tôi có trách nhiệm quản lý, bảo
          vệ và xử lý dữ liệu cá nhân của bạn một cách thích hợp. Chính sách bảo
          mật này ("chính sách bảo mật" hay "chính sách") được thiết kế để giúp
          bạn hiểu được cách thức chúng tôi thu thập, sử dụng, tiết lộ và/hoặc
          xử lý dữ liệu cá nhân mà bạn đã cung cấp cho chúng tôi và/hoặc lưu giữ
          về bạn, cho dù là hiện nay hoặc trong tương lai, cũng như để giúp bạn
          đưa ra quyết định sáng suốt trước khi cung cấp cho chúng tôi bất kỳ dữ
          liệu cá nhân nào của bạn. 1.2. "Dữ liệu cá nhân" hay "dữ liệu cá nhân"
          có nghĩa là dữ liệu, dù đúng hay không, về một cá nhân mà thông qua đó
          có thể được xác định được danh tính, hoặc từ dữ liệu đó và thông tin
          khác mà một tổ chức có hoặc có khả năng tiếp cận. Các ví dụ thường gặp
          về dữ liệu cá nhân có thể gồm có tên, số chứng minh nhân dân và thông
          tin liên hệ.
        </Text>
        <Text></Text>
        <Text>
          1.3. Bằng việc sử dụng các dịch vụ, đăng ký một tài khoản với chúng
          tôi hoặc truy cập nền tảng, bạn xác nhận và đồng ý rằng bạn chấp nhận
          các phương pháp, yêu cầu, và/hoặc chính sách được mô tả trong chính
          sách bảo mật này, và theo đây bạn xác nhận bạn đã biết rõ và đồng ý
          toàn bộ cho phép chúng tôi thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ
          liệu cá nhân của bạn như mô tả trong đây. Nếu bạn không đồng ý cho
          phép xử lý dữ liệu cá nhân của bạn như mô tả trong chính sách này, vui
          lòng không sử dụng các dịch vụ của chúng tôi hay truy cập nền tảng
          hoặc trang web của chúng tôi. Nếu chúng tôi thay đổi chính sách bảo
          mật của mình, chúng tôi sẽ thông báo cho bạn bao gồm cả thông qua việc
          đăng tải những thay đổi đó hoặc chính sách bảo mật sửa đổi trên nền
          tảng của chúng tôi. Trong phạm vi pháp luật cho phép, việc tiếp tục sử
          dụng các dịch vụ hoặc nền tảng, bao gồm giao dịch của bạn, được xem là
          bạn đã công nhận và đồng ý với các thay đổi trong chính sách bảo mật
          này.
        </Text>
        <Text>
          1.4. Chính sách này áp dụng cùng với các thông báo, điều khoản hợp
          đồng, điều khoản chấp thuận khác áp dụng liên quan đến việc chúng tôi
          thu thập, lưu trữ, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của
          bạn và không nhằm ghi đè những thông báo hoặc các điều khoản đó trừ
          khi chúng tôi có tuyên bố ràng khác.
        </Text>
        <Text>
          1.5. Chính sách này được áp dụng cho cả người bán và người mua đang sử
          dụng dịch vụ trừ khi có tuyên bố rõ ràng ngược lại.
        </Text>
        <Titlelsv2>2. KHI NÀO TECHFOOD SẼ THU THẬP DỮ LIỆU CÁ NHÂN?</Titlelsv2>
        <Text>
          2.1. Chúng tôi sẽ/có thể thu thập dữ liệu cá nhân về bạn: Khi bạn đăng
          ký và/hoặc sử dụng các dịch vụ hoặc nền tảng của chúng tôi, hoặc mở
          một tài khoản với chúng tôi; Khi bạn gửi bất kỳ biểu mẫu nào, bao gồm
          đơn đăng ký hoặc các mẫu đơn khác liên quan đến bất kỳ sản phẩm và
          dịch vụ nào của chúng tôi, bằng hình thức trực tuyến hay dưới hình
          thức khác; Khi bạn ký kết bất kỳ thỏa thuận nào hoặc cung cấp các tài
          liệu hoặc thông tin khác liên quan đến tương tác giữa bạn với chúng
          tôi, hoặc khi bạn sử dụng các sản phẩm và dịch vụ của chúng tôi; Khi
          bạn tương tác với chúng tôi, chẳng hạn như thông qua các cuộc gọi điện
          thoại (có thể được ghi âm lại), thư từ, fax, gặp gỡ trực tiếp, các nền
          ứng dụng truyền thông xã hội và email; Khi bạn sử dụng các dịch vụ
          điện tử của chúng tôi, hoặc tương tác với chúng tôi qua nền tảng hoặc
          trang web hoặc các dịch vụ của chúng tôi. Trường hợp này bao gồm thông
          qua tập tin cookie mà chúng tôi có thể triển khai khi bạn tương tác
          với các nền tảng hoặc trang web của chúng tôi; Khi bạn cấp quyền trên
          thiết bị của bạn để chia sẻ thông tin với ứng dụng hoặc nền tảng của
          chúng tôi Khi bạn liên kết tài khoản Techfood với tài khoản mạng xã
          hội của bạn hoặc các tài khoản bên ngoài khác hoặc sử dụng các tính
          năng mạng xã hội khác, phù hợp với các chính sách của nhà cung cấp;
          Khi bạn thực hiện các giao dịch thông qua dịch vụ của chúng tôi chẳng
          hạn như mỗi khi bạn đặt mua hàng hoặc chấp nhận đơn đặt hàng của người
          mua; Khi bạn cung cấp ý kiến phản hồi hoặc gửi khiếu nại cho chúng
          tôi; Khi bạn gửi dữ liệu cá nhân của bạn cho chúng tôi vì bất kỳ lý do
          gì; và/hoặc Khi bạn thực hiện các hoạt động khác trên nền tảng của
          chúng tôi. Các trường hợp trên không nhằm mục đích liệt kê đầy đủ các
          trường hợp và chỉ đưa ra một số trường hợp phổ biến về thời điểm dữ
          liệu cá nhân của bạn có thể bị thu thập.
        </Text>
        <Text>
          2.2. Chúng tôi có thể thu thập thông tin của bạn từ bạn, các công ty
          liên kết, các bên thứ ba và từ các nguồn khác, bao gồm nhưng không
          giới hạn ở đối tác kinh doanh (ví dụ như đơn vị cung ứng dịch vụ vận
          chuyển, thanh toán), cơ quan đánh giá tín dụng, các đơn vị, đối tác
          cung cấp dịch vụ marketing, giới thiệu, các chương trình khách hàng
          thân thiết, những người dùng khác sử dụng các dịch vụ của chúng tôi
          hoặc các nguồn dữ liệu công khai có sẵn hay các nguồn dữ liệu của nhà
          nước.
        </Text>
        <Text>
          2.3. Trong một số trường hợp, bạn có thể cung cấp dữ liệu cá nhân của
          các cá nhân khác cho chúng tôi (ví dụ như thành viên gia đình, bạn bè
          hoặc những người trong danh sách liên hệ của bạn). Nếu bạn cung cấp
          cho chúng tôi dữ liệu cá nhân của họ, bạn tuyên bố và đảm bảo rằng bạn
          đã nhận được sự đồng ý của họ để xử lý dữ liệu cá nhân của họ theo
          chính sách này.
        </Text>
        <Titlelsv2>3. Techfood sẽ thu thập những dữ liệu gì?</Titlelsv2>
        <Text>
          3.1. Trừ trường hợp được quy định khác đi trong chính sách này, dữ
          liệu cá nhân mà Techfood có thể thu thập bao gồm dữ liệu cá nhân cơ
          bản và dữ liệu cá nhân nhạy cảm (theo quy định của luật riêng tư) như
          được liệt kê dưới đây: Họ tên; Địa chỉ email; Ngày sinh; Địa chỉ thanh
          toán và/hoặc giao nhận hàng hóa; Tài khoản ngân hàng và thông tin
          thanh toán Số điện thoại; Giới tính; Thông tin được gửi bởi hoặc liên
          quan đến (các) thiết bị được sử dụng để truy cập vào các dịch vụ hoặc
          nền tảng của chúng tôi; Thông tin về mạng của bạn, bao gồm danh sách
          liên hệ của bạn khi đồng ý chia sẻ trên thiết bị của bạn, và những
          người và tài khoản mà bạn có tương tác; Hình ảnh hoặc âm thanh hoặc
          video; Thông tin về nhân thân được cấp bởi chính phủ hoặc các thông
          tin khác phục vụ cho các mục đích đánh giá pháp lý, nhận biết khách
          hàng, xác minh thông tin và/hoặc phòng chống gian lận của chúng tôi;
          Dữ liệu truyền thông hoặc liên lạc, ví dụ như các tùy chọn nhận thông
          tin quảng cáo từ chúng tôi hoặc các bên thứ ba của bạn, tùy chọn
          phương tiện liên lạc và lịch sử thông tin liên lạc với chúng tôi, các
          nhà cung cấp dịch vụ của chúng tôi, và các bên thứ ba khác; Thông tin
          sử dụng và giao dịch, bao gồm chi tiết về lịch sử tìm kiếm, giao dịch,
          quảng cáo và nội dung hiển thị mà tương tác với nền tảng, cũng như các
          sản phẩm và dịch vụ có liên quan của bạn; Dữ liệu về địa điểm; Bất kỳ
          thông tin nào khác về người dùng khi người dùng đăng nhập để sử dụng
          các dịch vụ hoặc nền tảng của chúng tôi, và khi người dùng sử dụng các
          dịch vụ hoặc nền tảng, cũng như thông tin về việc người dùng sử dụng
          các dịch vụ hoặc nền tảng của chúng tôi như thế nào; và Dữ liệu tổng
          hợp về nội dung người dùng sử dụng.
        </Text>
        <Text>
          3.2. Bạn đồng ý không cung cấp cho chúng tôi bất cứ thông tin nào
          không chính xác hoặc gây hiểu nhầm và bạn đồng ý sẽ thông báo cho
          chúng tôi về bất cứ thông tin nào không chính xác hoặc khi có sự thay
          đổi thông tin. Chúng tôi bảo lưu quyền theo quyết định riêng của chúng
          tôi được yêu cầu các tài liệu cần thiết khác để xác minh bất cứ thông
          tin nào được bạn cung cấp.
        </Text>
        <Text>
          3.3. Nếu bạn không muốn chúng tôi thu thập thông tin/dữ liệu cá nhân
          nói trên, bạn có thể chọn không tham gia vào bất kỳ lúc nào bằng cách
          thông báo bằng văn bản đến chuyên viên bảo vệ dữ liệu cá nhân của
          chúng tôi. Có thể tìm thấy thêm thông tin về nội dung trong mục "bạn
          có thể rút lại sự đồng ý, yêu cầu xóa, hạn chế xử lý, phản đối xử lý,
          yêu cầu cung cấp dữ liệu cá nhân, truy cập hoặc điều chỉnh thông tin
          bạn đã cung cấp cho chúng tôi bằng cách nào?" dưới đây. Tuy nhiên, lưu
          ý rằng việc từ chối hoặc hủy bỏ cho phép chúng tôi thu thập, sử dụng
          hoặc xử lý dữ liệu cá nhân của bạn có thể ảnh hưởng đến việc bạn sử
          dụng các dịch vụ và nền tảng. Ví dụ như dịch vụ xác định vị trí sẽ
          không hoạt động nếu bạn không cho phép ứng dụng truy cập vị trí của
          bạn.
        </Text>
        <Titlelsv2>4. Thu thập các dữ liệu khác</Titlelsv2>
        <Text>
          4.1 như với hầu hết các trang web và các ứng dụng di động khác, thiết
          bị của bạn gửi thông tin có thể gồm có dữ liệu về bạn, được một máy
          chủ web ghi lại khi bạn sử dụng nền tảng của chúng tôi. Thông tin này
          thông thường bao gồm nhưng không giới hạn địa chỉ ip, hệ điều hành của
          máy tính/thiết bị di động, loại trình duyệt, loại thiết bị di động,
          các đặc điểm của thiết bị di động, mã định danh thiết bị thống nhất
          (udid) hoặc mã định danh thiết bị di động (meid) của thiết bị di động
          của bạn, địa chỉ tham chiếu của trang web (nếu có), các trang mà bạn
          đã truy cập đến trên trang web hoặc ứng dụng di động của chúng tôi và
          thời gian truy cập và đôi khi là "cookie" (có thể vô hiệu hóa bằng
          cách sử dụng tùy chọn trình duyệt của bạn) để giúp trang web ghi nhớ
          lần truy cập cuối cùng của bạn. Nếu bạn đăng nhập, thông tin này được
          liên kết với tài khoản cá nhân của bạn. Thông tin này cũng được đưa
          vào các số liệu thống kê ẩn danh để giúp chúng tôi hiểu được khách
          truy cập sử dụng trang web của chúng tôi như thế nào.
        </Text>
        <Text>
          4.2 các ứng dụng di động của chúng tôi có thể thu thập thông tin chính
          xác về địa chỉ của thiết bị di động của bạn sử dụng các công nghệ như
          gps, wi-fi,…. Chúng tôi thu thập, sử dụng, công bố và/hoặc xử lý các
          thông tin này cho một hoặc nhiều mục đích bao gồm nhưng không giới hạn
          các dịch vụ được cung cấp dựa trên vị trí mà bạn yêu cầu hoặc chuyển
          các nội dung có liên quan đến bạn dựa trên vị trí của bạn hoặc cho
          phép bạn chia sẻ vị trí của bạn cho các người sử dụng khác như là một
          phần của các dịch vụ được cung cấp bởi các ứng dụng di động của chúng
          tôi. Đối với phần lớn các thiết bị di động, bạn có thể rút lại sự cho
          phép để chúng tôi được thu thập các thông tin này dựa trên vị trí của
          bạn thông qua các cài đặt trên thiết bị. Nếu bạn có câu hỏi nào về
          cách thức vô hiệu hóa các dịch vụ vị trí trên thiết bị di động của
          bạn, vui lòng liên hệ với các nhà cung cấp dịch vụ thiết bị di động
          hoặc nhà sản xuất thiết bị của bạn.
        </Text>
        <Text>
          4.3. Như khi bạn xem các trang trên trang web hoặc ứng dụng di động
          của chúng tôi, khi bạn xem các nội dung và quảng cáo và truy cập vào
          phần mềm khác trên nền tảng của chúng tôi hoặc thông qua dịch vụ, các
          thông tin có thể được gửi đến cho chúng tôi (bao gồm nhưng không giới
          hạn, địa chỉ ip, hệ điều hành, v.v..); nhưng, thay vì các số lượt xem
          trang, thiết bị của bạn gửi đến chúng tôi các thông tin về nội dung,
          quảng cáo được xem và/hoặc phần mềm được cài đặt bởi các dịch vụ và
          nền tảng và thời điểm.
        </Text>
        <Titlelsv2>5. Cookies</Titlelsv2>
        <Text>
          5.1. Đôi khi chúng tôi hoặc các nhà cung cấp dịch vụ được cho phép và
          các đối tác quảng cáo của chúng tôi có thể sử dụng "cookie" hoặc các
          tính năng khác để cho phép chúng tôi hoặc các bên thứ ba thu thập hoặc
          chia sẻ thông tin liên quan đến việc sử dụng của bạn đối với dịch vụ
          hoặc nền tảng của chúng tôi. Các tính năng này sẽ giúp chúng tôi cải
          thiện nền tảng và các dịch vụ chúng tôi cung cấp, giúp chúng tôi đề
          xuất các dịch vụ và tính năng mới, và/hoặc cho phép chúng tôi và các
          đối tác quảng cáo của chúng tôi cung cấp các nội dung có liên quan hơn
          đến bạn. "cookie" là các mã danh định được lưu trữ trên máy tính hoặc
          thiết bị di động của bạn lưu trữ các dữ liệu về máy tính hoặc thiết
          bị, bằng cách nào và khi nào các dịch vụ hoặc nền tảng được sử dụng
          hay truy cập, bởi bao nhiêu người và để theo dõi những hoạt động trong
          các nền tảng của chúng tôi. Chúng tôi có thể liên kết thông tin cookie
          với dữ liệu cá nhân. Cookie cũng liên kết với thông tin về những nội
          dung bạn đã chọn để mua sắm và các trang web mà bạn đã xem. Thông tin
          này được sử dụng để theo dõi giỏ hàng, để chuyển tải nội dung phù hợp
          với sở thích của bạn, để cho phép các đối tác cung cấp dịch vụ quảng
          cáo cung cấp dịch vụ quảng cáo trên các trang thông qua mạng internet
          và để thực hiện phân tích dữ liệu và hoặc theo dõi việc sử dụng dịch
          vụ
        </Text>
        <Text>
          5.2. Bạn có thể từ chối sử dụng cookie bằng cách chọn các thiết lập
          thích hợp trên trình duyệt hoặc thiết bị của bạn. Tuy nhiên, vui lòng
          lưu ý rằng nếu bạn thực hiện thao tác này bạn có thể không sử dụng
          được các chức năng đầy đủ của nền tảng hoặc các dịch vụ của chúng tôi.
        </Text>
        <Titlelsv2>
          6. Chúng tôi sử dụng thông tin bạn cung cấp cho chúng tôi như thế nào?
        </Titlelsv2>
        <Text>
          6.1. Chúng tôi có thể thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu
          cá nhân của bạn cho các mục đích sau đây: Để xem xét và/hoặc xử lý đơn
          đăng ký/giao dịch của bạn với chúng tôi hoặc giao dịch hay thư từ của
          bạn với các bên thứ ba qua các dịch vụ; Để quản lý, điều hành, cung
          cấp và/hoặc quản lý việc bạn sử dụng và/hoặc truy cập các dịch vụ và
          các nền tảng của chúng tôi (bao gồm các sở thích của bạn), cũng như
          quan hệ và tài khoản người dùng của bạn với chúng tôi; Để đáp ứng, xử
          lý, giải quyết hoặc hoàn tất một giao dịch và/hoặc đáp ứng các yêu cầu
          của bạn đối với các sản phẩm và dịch vụ nhất định và thông báo cho bạn
          về các vấn đề dịch vụ và các hoạt động tài khoản bất thường; Để thực
          thi các điều khoản dịch vụ của chúng tôi hoặc bất kỳ thỏa thuận giấy
          phép người dùng cuối nào áp dụng; Để bảo vệ sự an toàn cá nhân và các
          quyền, tài sản hoặc sự an toàn của người khác; Để phục vụ mục đích
          nhận dạng, xác minh, đánh giá pháp lý hoặc để nhận biết khách hàng; Để
          đánh giá và đưa ra các quyết định liên quan đến hồ sơ tín dụng và rủi
          ro của bạn và tính đủ điều kiện để cho vay, trả sau hoặc cho các sản
          phẩm tín dụng, nếu có; Để duy trì và quản lý bất kỳ bản cập nhật phần
          mềm nào và/hoặc các bản cập nhật khác và sự hỗ trợ có thể được yêu cầu
          tùy lúc nhằm đảm bảo các dịch vụ của chúng tôi hoạt động suôn sẻ; Để
          giải quyết hoặc tạo điều kiện thuận lợi cho dịch vụ khách hàng, thực
          hiện các chỉ thị của bạn, giải quyết hoặc trả lời bất kỳ thắc mắc nào
          được gửi bởi (hoặc nhằm được gửi bởi) bạn hoặc thay mặt bạn; Để liên
          hệ với bạn hoặc liên lạc với bạn qua điện thoại, tin nhắn văn bản
          và/hoặc tin nhắn fax, email và/hoặc thư hoặc cách khác nhằm mục đích
          quản trị và/hoặc quản lý quan hệ của bạn với chúng tôi hoặc việc bạn
          sử dụng các dịch vụ của chúng tôi, chẳng hạn như ở việc truyền đạt
          thông tin hành chính cho bạn liên quan đến các dịch vụ của chúng tôi.
          Bạn xác nhận và đồng ý rằng sự liên lạc như thế của chúng tôi có thể
          là theo cách gửi thư qua đường bưu điện, tài liệu hoặc thông báo cho
          bạn, có thể gồm có tiết lộ dữ liệu cá nhân nhất định về bạn để cung
          cấp các tài liệu đó cũng như trên bao bì/phong bì; Để cho phép các
          người dùng khác tương tác hoặc liên lạc với bạn hoặc thấy một số hoạt
          động của bạn trên nền tảng, bao gồm để thông báo cho bạn khi một người
          dùng khác đã gửi cho bạn một tin nhắn riêng tư hoặc đăng nhận xét về
          bạn trên nền tảng hoặc để liên kết với việc bạn sử dụng các tính năng
          xã hội trên nền tảng; Để tiến hành các hoạt động nghiên cứu, phân tích
          và phát triển (bao gồm nhưng không giới hạn phân tích dữ liệu, khảo
          sát, phát triển và/hoặc lập đặc tính sản phẩm và dịch vụ), để phân
          tích cách thức bạn sử dụng các dịch vụ của chúng tôi, để giới thiệu
          sản phẩm và/hoặc dịch vụ theo sự quan tâm của bạn, để cải thiện các
          dịch vụ hoặc sản phẩm của chúng tôi và/hoặc để cải thiện trải nghiệm
          khách hàng của bạn; Để cho phép kiểm tra và khảo sát khác để, ngoài
          những hoạt động khác, xác thực quy mô và thành phần của đối tượng mục
          tiêu của chúng tôi, và hiểu được trải nghiệm của họ với các dịch vụ
          của Techfood; Vì mục đích tiếp thị và quảng cáo, trong trường hợp này,
          để gửi cho bạn qua các phương tiện và phương thức liên lạc khác nhau,
          thông tin và tài liệu tiếp thị và quảng bá liên quan đến các sản phẩm
          và/hoặc dịch vụ (bao gồm, nhưng không giới hạn các sản phẩm và/hoặc
          dịch vụ của các bên thứ ba mà Techfood có thể hợp tác hoặc liên kết)
          mà Techfood (và/hoặc các bên liên kết hoặc công ty có liên quan của
          nó) có thể bán, tiếp thị hoặc quảng bá, cho dù các sản phẩm hoặc dịch
          vụ đó tồn tại vào lúc này hoặc được tạo ra trong tương lai. Bạn có thể
          hủy đăng ký nhận các thông tin tiếp thị tại bất cứ thời điểm nào bằng
          cách sử dụng chức năng hủy đăng ký trong các tài liệu tiếp thị điện
          tử. Chúng tôi có thể sử dụng các thông tin liên hệ của bạn để gửi các
          bản tin và/hoặc tài liệu truyền thông từ chúng tôi hoặc từ các công ty
          có liên quan của chúng tôi; Để cung cấp các chương trình và ưu đãi
          khách hàng thường xuyên, đối tác và tiền thưởng, cũng như các chiến
          dịch marketing đồng thương hiệu khác, ví dụ như: chương trình khách
          hàng thân thiết của người bán, ưu đãi của người bán hoặc thẻ tín dụng
          đồng thương hiệu với sự hợp tác của các bên thứ ba; Để đáp ứng các thủ
          tục pháp lý hoặc để tuân thủ hoặc theo quy định của pháp luật hiện
          hành, và các yêu cầu của cơ quan nhà nước có thẩm quyền hoặc yêu cầu
          của bất cứ cơ quan tài phán nào hoặc khi chúng tôi thực sự tin tưởng
          rằng việc tiết lộ thông tin là cần thiết, bao gồm nhưng không giới
          hạn, đáp ứng các yêu cầu đáp ứng các yêu cầu công bố thông tin theo
          yêu cầu của bất kỳ luật ràng buộc nào đối với Techfood hoặc các công
          ty hoặc chi nhánh liên quan của Techfood (bao gồm, nếu có, việc hiển
          thị tên, chi tiết liên hệ và chi tiết công ty của bạn); Để lập số liệu
          thống kê và nghiên cứu đáp ứng yêu cầu báo cáo và/hoặc duy trì sổ sách
          nội bộ hoặc theo quy định; Để thực hiện quy trình tìm hiểu và xác minh
          hoặc các hoạt động sàng lọc khác (bao gồm nhưng không giới hạn kiểm
          tra lý lịch) tuân thủ các nghĩa vụ theo quy định pháp luật hoặc cơ
          quan nhà nước có thẩm quyền hoặc các thủ tục kiểm soát rủi ro của
          chúng tôi, có thể được pháp luật yêu cầu hoặc có thể đã được chúng tôi
          áp dụng; Để kiểm tra các dịch vụ của chúng tôi hoặc hoạt động của
          Techfood Để ngăn chặn hoặc điều tra bất kỳ hoạt động gian lận thực tế
          hoặc bị nghi ngờ nào đối với điều khoản dịch vụ của chúng tôi, gian
          lận, các hành vi phi pháp, thiếu sót hay hành vi sai trái nào, cho dù
          có liên quan đến việc bạn sử dụng các dịch vụ của chúng tôi hay không
          hay bất kỳ vấn đề nào phát sinh từ quan hệ của bạn với chúng tôi; Để
          đáp ứng bất cứ các mối đe dọa hoặc yêu cầu thực tế nào được khẳng định
          chống lại Techfood hoặc các yêu cầu khác liên quan đến các nội dung vi
          phạm quy định của các bên thứ ba; Để lưu trữ, lập máy chủ, sao lưu
          (cho dù là vì mục đích khôi phục sau thảm họa hoặc mục đích khác) đối
          với dữ liệu cá nhân của bạn; Để xử lý và/hoặc tạo thuận tiện cho một
          giao dịch tài sản kinh doanh hoặc một giao dịch tài sản kinh doanh
          tiềm năng, trường hợp giao dịch đó liên quan đến Techfood như một bên
          tham gia hoặc chỉ liên quan đến một công ty hay công ty liên kết của
          Techfood như một bên tham gia hoặc liên quan đến Techfood và/hoặc bất
          kỳ một hay nhiều công ty hoặc công ty liên kết của Techfood như (các)
          bên tham gia, và có thể có các tổ chức bên thứ ba khác tham gia giao
          dịch như thế. "giao dịch tài sản kinh doanh" là các giao dịch mua,
          bán, cho thuê, sáp nhập, hợp nhất hoặc bất kỳ hoạt động mua lại, thanh
          lý hay tài trợ nào của một tổ chức hoặc một phần của một tổ chức hoặc
          của bất kỳ hoạt động kinh doanh hay tài sản nào của một tổ chức;
          và/hoặc Bất kỳ mục đích nào mà chúng tôi thông báo cho bạn tại thời
          điểm xin sự cho phép của bạn.
        </Text>
        <Text>
          6.2. Bạn xác nhận, cho phép và đồng ý rằng chúng tôi có thể truy cập,
          lưu trữ, xử lý và tiết lộ thông tin tài khoản và nội dung của bạn nếu
          luật pháp yêu cầu làm như vậy hoặc theo lệnh của tòa án hoặc của bất
          kỳ cơ quan chính phủ hoặc cơ quan quản lý nào có thẩm quyền đối với
          Techfood hoặc các chi nhánh của Techfood hoặc với lý do chính đáng
          Techfood tin rằng việc truy cập, lưu giữ hoặc tiết lộ đó là cần thiết
          và chính đáng để: (a) tuân thủ quy trình pháp lý; (b) tuân thủ yêu cầu
          từ bất kỳ cơ quan chính phủ hoặc cơ quan quản lý nào có thẩm quyền đối
          với Techfood hoặc các chi nhánh có liên quan của Techfood; (c) thực
          thi điều khoản dịch vụ của chúng tôi hoặc chính sách bảo mật này; (d)
          phản hồi bất kỳ khiếu nại nào du cho là nguy cơ hoặc đang xảy ra trên
          thực tế để chống lại Techfood hoặc các chi nhánh có liên quan hoặc
          khiếu nại khác rằng bất kỳ nội dung nào vi phạm quyền của bên thứ ba;
          (e) đáp ứng các yêu cầu của bạn về dịch vụ khách hàng; hoặc (f) bảo vệ
          quyền, tài sản hoặc sự an toàn cá nhân của Techfood hoặc các chi nhánh
          có liên quan, người dùng và / hoặc công chúng.
        </Text>
        <Text>
          6.3. Vì các mục đích mà chúng tôi sẽ/có thể thu thập, sử dụng, tiết lộ
          hoặc xử lý dữ liệu cá nhân của bạn phụ thuộc vào hoàn cảnh hiện có,
          mục đích đó có thể không xuất hiện bên trên. Tuy nhiên, chúng tôi sẽ
          thông báo cho bạn biết mục đích khác đó tại thời điểm xin sự cho phép
          của bạn, trừ phi việc xử lý dữ liệu áp dụng mà không có sự đồng ý của
          bạn là được phép theo các quy định của pháp luật về bảo vệ bí mật
          thông tin cá nhân hoặc theo quy định pháp luật.
        </Text>
        <Titlelsv2>
          7. Techfood bảo vệ và lưu trữ thông tin khách hàng bằng cách nào
        </Titlelsv2>
        <Text>
          7.1. Chúng tôi thực hiện các biện pháp bảo mật khác nhau và luôn nỗ
          lực để đảm bảo sự an toàn của dữ liệu cá nhân của bạn trên các hệ
          thống của chúng tôi. Dữ liệu cá nhân của người dùng được lưu trữ đằng
          sau các mạng bảo mật và chỉ có thể được truy cập bởi một số nhân viên
          có quyền truy cập đặc biệt đến các hệ thống của chúng tôi. Tuy nhiên,
          chắc chắn không thể có sự đảm bảo an ninh tuyệt đối.
        </Text>
        <Text>
          7.2. Chúng tôi sẽ duy trì dữ liệu cá nhân tuân theo các quy định của
          pháp luật về bảo vệ bí mật thông tin cá nhân và/hoặc các điều luật
          hiện hành khác. Có nghĩa là, chúng tôi sẽ hủy hoặc xóa thông tin nhận
          dạng ra khỏi dữ liệu cá nhân của bạn khi chúng tôi nhận được yêu cầu
          của bạn phù hợp với các quy định của luật riêng tư hiện hành hoặc khi
          chúng tôi có lý do hợp lý để xác định rằng (i) việc lưu trữ dữ liệu cá
          nhân đó không còn phục vụ mục đích thu thập dữ liệu cá nhân đó nữa;
          (ii) việc lưu giữ không còn cần thiết cho bất kỳ mục đích hợp pháp hay
          mục đích kinh doanh nào và (iii) không còn các lợi ích hợp pháp nào
          khác để tiếp tục lưu giữ các dữ liệu cá nhân này. Nếu bạn ngưng sử
          dụng nền tảng của chúng tôi, hoặc quyền của bạn được sử dụng nền tảng
          và/hoặc các dịch vụ bị chấm dứt hoặc hủy bỏ, chúng tôi có thể tiếp tục
          lưu, sử dụng và/hoặc tiết lộ dữ liệu cá nhân của bạn tuân theo chính
          sách bảo mật này và các nghĩa vụ của chúng tôi theo các quy định của
          pháp luật về bảo vệ bí mật thông tin cá nhân. Tùy thuộc vào quy định
          của pháp luật, chúng tôi có thể tiêu hủy dữ liệu cá nhân của bạn một
          cách an toàn mà không cần thông báo trước cho bạn.
        </Text>
        <Text>
          7.3. Chúng tôi bảo lưu quyền từ chối xóa, tiêu hủy dữ liệu trong
          trường hợp yêu cầu của bạn không phù hợp với quy định của luật riêng
          tư hiện hành, hoặc mặc dù phù hợp nhưng thuộc trường hợp chúng tôi
          không được xóa, tiêu hủy theo quy định của luật riêng tư hiện hành.
        </Text>
        <Titlelsv2>
          8. Techfood có tiết lộ thông tin thu thập từ người truy cập hay không?
        </Titlelsv2>
        <Text>
          8.1 trong quá trình thực hiện hoạt động kinh doanh, chúng tôi sẽ/có
          thể cần phải sử dụng, xử lý, tiết lộ và/hoặc chuyển giao dữ liệu cá
          nhân của bạn cho các nhà cung cấp dịch vụ bên thứ ba, đại lý và/hoặc
          các công ty liên kết hoặc công ty liên quan của chúng tôi, và/hoặc các
          bên thứ ba khác có thể ở việt nam hoặc bên ngoài việt nam, vì một hay
          nhiều mục đích nói trên, và việc tiết lộ này sẽ được thực hiện theo
          đúng trình tự và quy định của pháp luật hiện hành. Các nhà cung cấp
          dịch vụ bên thứ ba, đại lý và/hoặc các công ty liên kết hoặc công ty
          liên quan và/hoặc các bên thứ ba khác như thế sẽ xử lý dữ liệu cá nhân
          của bạn hoặc thay mặt chúng tôi hoặc ngược lại, vì một hoặc nhiều mục
          đích nói trên. Chúng tôi cố gắng đảm bảo rằng các bên thứ ba và các
          công ty liên kết của chúng tôi giữ an toàn cho dữ liệu cá nhân của bạn
          khỏi bị truy cập, thu thập, sử dụng, tiết lộ, xử lý trái phép hoặc các
          rủi ro tương tự và chỉ lưu giữ dữ liệu cá nhân của bạn miễn là dữ liệu
          cá nhân của bạn vẫn còn cần thiết cho những việc nêu trên mục đích các
          bên thứ ba như thế bao gồm: Công ty mẹ, công ty con, công ty liên kết
          và công ty liên quan của chúng tôi; Người bán hoặc người mua mà bạn đã
          thực hiện giao dịch hoặc tương tác trên nền tảng hoặc liên quan đến
          việc bạn sử dụng dịch vụ cho các mục đích đã nêu ở trên; Những người
          sử dụng khác của nền tảng của chúng tôi cho một hoặc nhiều các mục
          đích đã nêu ở trên; Nhà thầu, đại lý, nhà cung cấp dịch vụ và các bên
          thứ ba khác mà chúng tôi thuê để hỗ trợ hoặc bổ sung cho hoạt động
          kinh doanh của chúng tôi. Những bên này bao gồm, nhưng không giới hạn
          ở những bên cung cấp các dịch vụ quản trị hoặc các dịch vụ khác cho
          chúng tôi chẳng hạn như công ty bưu chính, công ty viễn thông, đối tác
          quảng cáo và truyền thông, công ty công nghệ thông tin, các tổ chức
          hoạt động thương mại điện tử, và trung tâm dữ liệu; Các cơ quan chính
          phủ hoặc cơ quan quản lý có thẩm quyền đối với Techfood hoặc nếu được
          cho phép theo mục 6.2; Người mua hoặc người thừa nhiệm khác trong
          trường hợp sáp nhập, thoái vốn, tái cơ cấu, tái tổ chức, giải thể hoặc
          bán hay chuyển nhượng một phần hoặc tất cả tài sản của Techfood, cho
          dù là vấn đề đang diễn ra hay đang trong thủ tục phá sản, thanh lý
          hoặc thủ tục tương tự, trong đó dữ liệu cá nhân Techfood lưu giữ về
          người dùng của chúng tôi nằm trong các tài sản được chuyển nhượng;
          hoặc cho một bên đối tác trong một giao dịch tài sản kinh doanh mà
          Techfood hoặc bất kỳ công ty liên kết hay công ty liên quan nào của nó
          có tham gia giao dịch; và Bên thứ ba mà chúng tôi tiết lộ thông tin vì
          một trong các mục đích và các bên thứ ba đó ngược lại họ sẽ thu thập
          và xử lý dữ liệu cá nhân của bạn vì một hoặc nhiều mục đích.
        </Text>
        <Text>
          8.2. Chúng tôi có thể chia sẻ thông tin bao gồm thông tin thống kê và
          nhân khẩu học về người dùng cũng như thông tin về việc sử dụng các
          dịch vụ của người dùng với đối tác cung cấp dịch vụ quảng cáo và lập
          trình. Chúng tôi cũng sẽ chia sẻ thông tin thống kê và thông tin nhân
          khẩu học về người dùng của chúng tôi và việc họ sử dụng các dịch vụ
          với các đối tác quảng cáo và bên thứ ba cung cấp dịch vụ quảng cáo,
          tái quảng cáo, và/hoặc lập trình.
        </Text>
        <Text>
          8.3. Để tránh nghi ngờ, trong trường hợp các quy định của pháp luật về
          bảo vệ bí mật thông tin cá nhân hoặc các điều luật hiện hành khác cho
          phép một tổ chức chẳng hạn như chúng tôi thu thập, sử dụng hoặc tiết
          lộ dữ liệu cá nhân của bạn mà không cần sự đồng ý của bạn, sự cho phép
          như thế của pháp luật sẽ tiếp tục áp dụng. Phù hợp với các quy định
          nêu trên và theo các quy định của pháp luật hiện hành, chúng tôi có
          thể sử dụng dữ liệu cá nhân của bạn cho các cơ sở pháp lý đã được công
          nhận, bao gồm tuân thủ các nghĩa vụ pháp lý của chúng tôi, để thực
          hiện hợp đồng của chúng tôi với bạn, để đạt được lợi ích hợp pháp và
          lý do của chúng tôi để sử dụng dữ liệu đó cao hơn bất kỳ phương hại
          nào đến quyền bảo vệ dữ liệu của bạn hoặc khi cần thiết liên quan với
          một yêu cầu pháp lý.
        </Text>
        <Text>
          8.4. Các bên thứ ba có thể chặn hoặc truy cập trái phép dữ liệu cá
          nhân được gửi đến hoặc có trên trang web, các công nghệ có thể hoạt
          động không chính xác hoặc không hoạt động như dự kiến, hoặc có người
          có thể truy cập, lạm dụng hoặc sử dụng sai trái thông tin mà không
          phải lỗi của chúng tôi. Tuy nhiên chúng tôi sẽ triển khai các biện
          pháp bảo mật hợp lý để bảo vệ dữ liệu cá nhân của bạn theo quy định
          của các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân; tuy
          nhiên không thể đảm bảo sự bảo mật tuyệt đối chẳng hạn như trường hợp
          tiết lộ trái phép phát sinh từ hoạt động tin tặc vì ý đồ xấu hoặc hành
          vi tấn cung tinh vi bưởi kẻ xấu mà không phải lỗi của chúng tôi.
        </Text>
        <Text>
          8.5. Như được quy định trong điều khoản dịch vụ của Techfood, người
          dùng (bao gồm bất cứ người lao động, đại lý, người đại diện hoặc bất
          cứ bên nào khác hành động cho người dùng đó hoặc thay mặt người dùng
          đó) sở hữu dữ liệu cá nhân của người dùng khác thông qua việc sử dụng
          dịch vụ (“bên nhận dữ liệu”) tại đây đồng ý rằng, họ sẽ (i) tuân thủ
          với các quy định của pháp luật về bảo vệ dữ liệu cá nhân liên quan đến
          các dữ liệu này, bao gồm bất cứ hoạt động thu thập, xử lý, lưu giữ và
          chuyển giao các dữ liệu này; (ii) cho phép Techfood hoặc người dùng mà
          dữ liệu cá nhân của bên nhận được thu thập (“bên tiết lộ”) được xóa dữ
          liệu của anh hoặc cô ấy đã bị thu thập khỏi cơ sở dữ liệu của bên nhận
          dữ liệu; và (iii) cho phép Techfood hoặc bên tiết lộ dữ liệu được rà
          soát những nội dung đã bị thu thập liên quan đến họ bởi bên nhận dữ
          liệu, trong mỗi trường hợp (ii) và (iii) nêu trên, tuân thủ với và khi
          được yêu cầu bởi các quy định của pháp luật có liên quan.
        </Text>
        <Titlelsv2>9. Thông tin về trẻ em</Titlelsv2>
        <Text>
          Các dịch vụ này không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố
          tình thu thập hay lưu giữ bất kỳ dữ liệu cá nhân hay thông tin không
          nhận dạng cá nhân nào của bất kỳ ai dưới 13 tuổi, bất kỳ phần nào của
          nền tảng của chúng tôi hoặc các dịch vụ khác cũng không dành cho trẻ
          em dưới 13 tuổi. Bố/mẹ hoặc người giám hộ của trẻ em dưới 13 tuổi vui
          lòng giám sát và đảm bảo thông tin cá nhân của trẻ dưới 13 tuổi mà
          mình đang giám hộ không đăng tải thông tin cá nhân cho Techfood. Trong
          trường hợp thông tin cá nhân của của trẻ em dưới 13 tuổi do quý phụ
          huynh giám hộ được cung cấp cho Techfood, bố/mẹ hoặc người giám hộ
          theo đồng ý với việc xử lý thông tin của trẻ em dưới 13 tuổi có liên
          quan, và đồng ý chịu sự điều chỉnh của chính sách này thay mặt cho
          người được giám hộ. Chúng tôi sẽ khóa bất kỳ tài khoản nào chỉ được sử
          dụng bởi đối tượng trẻ em như vậy và sẽ gỡ và/hoặc xóa bất kỳ dữ liệu
          cá nhân nào mà chúng tôi cho là đã được gửi bởi bất kỳ trẻ em nào dưới
          13 tuổi.
        </Text>
        <Titlelsv2>10. Thông tin thu thập bởi các bên thứ ba</Titlelsv2>
        <Text>
          Chúng tôi, và các bên thứ ba, có thể trong từng thời điểm cung cấp các
          bản tải về ứng dụng phần mềm cho bạn sử dụng bởi nền tảng hoặc thông
          qua các dịch vụ. Những ứng dụng này có thể truy cập riêng, và cho phép
          một bên thứ ba xem, thông tin nhận dạng của bạn, chẳng hạn như tên, id
          người dùng của bạn, địa chỉ ip của thiết bị của bạn hoặc thông tin
          khác chẳng hạn như game bạn đang chơi trong bất kỳ phiên truy cập cụ
          thể nào, và bất kỳ cookie nào trước đây bạn có thể đã cài đặt hoặc đã
          được cài đặt cho bạn bởi một ứng dụng phần mềm hoặc trang web của bên
          thứ ba. Ngoài ra, các ứng dụng này có thể yêu cầu bạn cung cấp thêm
          thông tin trực tiếp cho các bên thứ ba. Các sản phẩm hoặc dịch vụ của
          bên thứ ba được cung cấp thông qua các ứng dụng này không thuộc sở hữu
          hay quyền kiểm soát của Techfood. Bạn nên đọc các điều khoản và các
          chính sách khác được công bố bởi các bên thứ ba đó trên trang web của
          họ hoặc nơi khác.
        </Text>
        <Titlelsv2>
          11. Loại trừ trách nhiệm về nghĩa vụ bảo mật và các trang web bên thứ
          ba
        </Titlelsv2>
        <Text>
          11.1. Chúng tôi không đảm bảo tính bảo mật đối với dữ liệu cá nhân
          và/hoặc thông tin khác mà bạn cung cấp trên các trang web của bên thứ
          ba. Chúng tôi thực hiện các biện pháp bảo mật khác nhau để duy trì sự
          an toàn của dữ liệu cá nhân của bạn mà chúng tôi lưu giữ hoặc kiểm
          soát. Dữ liệu cá nhân của bạn được lưu đằng sau các mạng bảo mật và
          chỉ có thể được truy cập bởi một số cá nhân giới hạn có quyền truy cập
          đặc biệt đến các hệ thống của chúng tôi, và đã được yêu cầu bảo mật dữ
          liệu cá nhân đó. Khi bạn đặt hàng hoặc truy cập dữ liệu cá nhân của
          bạn, chúng tôi đề nghị sử dụng một máy chủ bảo mật. Tất cả dữ liệu cá
          nhân hoặc thông tin cá nhân bạn cung cấp sẽ được mã hóa vào các cơ sở
          dữ liệu của chúng tôi để chỉ được truy cập như mô tả bên trên.
        </Text>
        <Text>
          11.2. Nhằm cung cấp cho bạn giá trị gia tăng, chúng tôi có thể chọn
          các trang web hoặc ứng dụng hoặc dịch vụ của bên thứ ba khác nhau để
          liên kết, và đóng khung bên trong nền tảng. Chúng tôi cũng có thể tham
          gia các quan hệ cùng tiếp thị và các quan hệ khác để cung cấp dịch vụ
          thương mại điện tử và các dịch vụ và tính năng khác cho khách truy
          cập. Những trang được liên kết này có các chính sách về quyền riêng tư
          cũng như các biện pháp bảo mật riêng và độc lập. Ngay cả khi bên thứ
          ba đó có liên kết với chúng tôi, chúng tôi cũng không kiểm soát các
          trang web/ứng dụng/dịch vụ được liên kết này, mỗi trang đó có các
          phương pháp bảo vệ quyền riêng tư và thu thập dữ liệu riêng biệt, độc
          lập với chúng tôi. Dữ liệu thu thập bởi các đối tác cùng tiếp thị của
          chúng tôi hoặc các trang web/ứng dụng/dịch vụ của bên thứ ba (ngay cả
          khi được cung cấp trên hoặc thông qua nền tảng của chúng tôi) có thể
          không được chúng tôi tiếp cận và/hoặc lưu giữ.
        </Text>
        <Text>
          11.3. Do đó chúng tôi không chịu trách nhiệm hay trách nhiệm pháp lý
          đối với nội dung, các biện pháp bảo mật (hoặc sự thiếu biện pháp bảo
          mật) và các hoạt động của các trang web/ứng dụng/dịch vụ được liên kết
          này. Những trang web/ứng dụng/dịch vụ được liên kết này chỉ vì sự
          thuận tiện cho bạn và do đó bạn tự chịu trách nhiệm khi truy cập
          chúng. Tuy nhiên, chúng tôi tìm cách bảo vệ tính toàn vẹn của nền tảng
          của chúng tôi và các liên kết được đặt trên từng trang web đó và do đó
          chúng tôi hoan nghênh ý kiến phản hồi về các trang web được liên kết
          này (bao gồm nếu một trang web cụ thể không hoạt động).
        </Text>
        <Titlelsv2>
          12. Techfood sẽ chuyển thông tin của bạn ra nước ngoài?
        </Titlelsv2>
        <Text>
          Thông tin và/hoặc dữ liệu cá nhân của bạn có thể được chuyển ra nước
          ngoài, lưu trữ hoặc xử lý bên ngoài quốc gia của bạn cho một hoặc
          nhiều mục đích. Techfood sẽ chỉ chuyển dữ liệu cá nhân của bạn ra nước
          ngoài khi phù hợp với các quy định của pháp luật về bảo vệ dữ liệu cá
          nhân.
        </Text>
        <Titlelsv2>
          13. Bạn có thể rút lại sự đồng ý, yêu cầu hạn chế xử lý, phản đối xử
          lý, yêu cầu cung cấp dữ liệu cá nhân, truy cập hoặc điều chỉnh thông
          tin bạn đã cung cấp cho chúng tôi bằng cách nào?
        </Titlelsv2>
        <Titlelsv3>
          13.1. Rút lại sự đồng ý, yêu cầu hạn chế, phản đối xử lý dữ liệu:
        </Titlelsv3>
        <Text>
          Bạn có thể rút lại sự đồng ý cho phép, yêu cầu hạn chế, phản đối trong
          việc thu thập, xử lý, sử dụng và/hoặc tiết lộ dữ liệu cá nhân của bạn
          mà chúng tôi đang lưu giữ hoặc kiểm soát bằng cách gửi email cho
          chuyên viên bảo vệ dữ liệu cá nhân của chúng tôi tại địa chỉ email
          &nbsp;<a href="dpo.vn@Techfood.com">dpo.vn@Techfood.com</a> và chúng
          tôi sẽ xử lý các yêu cầu này theo chính sách bảo mật cũng như quy định
          pháp luật có liên quan (Tuy nhiên, việc bạn rút lại sự cho phép, yêu
          cầu hạn chế, phản đối xử lý dữ liệu cá nhân của bạn có thể đồng nghĩa
          với việc chúng tôi sẽ không thể tiếp tục cung cấp các dịch vụ đến bạn
          và chúng tôi có thể cần phải chấm dứt mối quan hệ hiện tại giữa bạn
          và/hoặc hợp đồng mà bạn có với chúng tôi.)
        </Text>
        <Titlelsv3>13.2. Yêu cầu cung cấp dữ liệu cá nhân</Titlelsv3>
        <Text>
          13.2.1. Bạn có quyền yêu cầu chúng tôi cung cấp dữ liệu cá nhân của
          chính bản thân bạn cho bạn bằng cách gửi yêu cầu cho chuyên viên bảo
          vệ dữ liệu cá nhân của chúng tôi tại địa chỉ email &nbsp;
          <a href="dpo.vn@Techfood.com">dpo.vn@Techfood.com</a>. Bạn cũng có
          quyền yêu cầu chúng tôi cung cấp dữ liệu cá nhân của bạn cho các tổ
          chức, cá nhân khác hoặc của các tổ chức, cá nhân khác cho bạn với điều
          kiện bạn phải cung cấp được ủy quyền hợp lệ hoặc tài liệu khác chứng
          minh chấp thuận của chủ thể dữ liệu theo quy định của pháp luật.
        </Text>
        <Text>
          13.2.2. Yêu cầu của bạn chỉ được coi là hợp lệ và được chấp nhận xử lý
          khi có đầy đủ các thông tin cần thiết và sử dụng đúng biểu mẫu theo
          quy định của luật riêng tư hiện hành.
        </Text>
        <Text>
          13.2.3. Chúng tôi có thể tính một khoản phí hợp lý cho bạn để giải
          quyết và xử lý yêu cầu cung cấp dữ liệu cá nhân của bạn. Nếu chúng tôi
          có tính phí, chúng tôi sẽ cung cấp cho bạn ước tính lệ phí bằng văn
          bản tùy thuộc vào từng trường hợp cụ thể.
        </Text>
        <Text>
          13.2.4. Trong trường hợp yêu cầu của bạn là hợp lệ theo quy định của
          pháp luật và thuộc trường hợp chúng tôi được phép cung cấp dữ liệu,
          chúng tôi sẽ thông báo đến bạn thông qua các phương thức liên lạc phù
          hợp về thời gian, địa điểm, hình thức cung cấp dữ liệu cá nhân, chi
          phí (nếu có), phương thức, thời hạn thanh toán (nếu có) và chúng tôi
          sẽ cung cấp dữ liệu cá nhân theo đúng thông báo này và các thủ tục
          khác theo quy định của pháp luật.
        </Text>
        <Text>
          13.2.5. Vui lòng lưu ý rằng chúng tôi không buộc phải đáp ứng hay giải
          quyết yêu cầu cung cấp dữ liệu cá nhân của bạn trừ phi bạn đã đồng ý
          đóng phí theo thông báo được quy định tại điều 13.2.4 nêu trên.
        </Text>
        <Text>
          13.2.6. Chúng tôi bảo lưu quyền từ chối cung cấp dữ liệu cá nhân của
          bạn theo các quy định của pháp luật về bảo vệ bí mật thông tin cá
          nhân, trường hợp các điều luật đó yêu cầu và/hoặc cho phép một tổ chức
          từ chối cung cấp dữ liệu cá nhân trong các trường hợp như thế.
        </Text>
        <Titlelsv3>
          13.3. Yêu cầu truy cập đến hoặc sửa dữ liệu cá nhân
        </Titlelsv3>
        <Text>
          13.3.1. Nếu bạn đã đăng ký một tài khoản với chúng tôi, cá nhân bạn có
          thể truy cập và/hoặc sửa dữ liệu cá nhân của bạn mà chúng tôi đang lưu
          giữ hoặc kiểm soát thông qua trang thiết lập tài khoản trên nền tàng.
          Nếu bạn chưa đăng ký tài khoản với chúng tôi, cá nhân bạn có thể yêu
          cầu truy cập và/hoặc sửa dữ liệu cá nhân của bạn mà chúng tôi đang lưu
          giữ hoặc kiểm soát bằng cách gửi yêu cầu bằng văn bản cho chúng tôi.
          Chúng tôi sẽ cần có đủ thông tin từ bạn để xác định danh tính của bạn
          cũng như bản chất yêu cầu của bạn để có thể giải quyết yêu cầu của
          bạn. Do đó, vui lòng gửi yêu cầu bằng văn bản của bạn bằng cách gửi
          email cho chuyên viên bảo vệ dữ liệu cá nhân của chúng tôi tại địa chỉ
          email d&nbsp;
          <a href="dpo.vn@Techfood.com">dpo.vn@Techfood.com</a>.
        </Text>
        <Text>
          13.3.2 chúng tôi có thể tính một khoản phí hợp lý cho bạn để giải
          quyết và xử lý yêu cầu truy cập dữ liệu cá nhân của bạn. Nếu chúng tôi
          có tính phí, chúng tôi sẽ cung cấp cho bạn ước tính lệ phí bằng văn
          bản. Vui lòng lưu ý rằng chúng tôi không buộc phải đáp ứng hay giải
          quyết yêu cầu truy cập của bạn trừ phi bạn đã đồng ý đóng phí.
        </Text>
        <Text>
          13.3.3 chúng tôi bảo lưu quyền từ chối sửa dữ liệu cá nhân của bạn
          theo các quy định của pháp luật về bảo vệ bí mật thông tin cá nhân,
          trường hợp các điều luật đó yêu cầu và/hoặc cho phép một tổ chức từ
          chối sửa dữ liệu cá nhân trong các trường hợp như thế.
        </Text>
        <Titlelsv2>
          14. Thắc mắc, quan ngại hoặc khiếu nại? Liên hệ với chúng tôi
        </Titlelsv2>
        <Text>
          Nếu bạn có bất kỳ thắc mắc, yêu cầu bảo vệ hoặc khiếu nại nào về các
          phương pháp bảo vệ quyền riêng tư của chúng tôi vui lòng liên hệ với
          chúng tôi theo thông tin sau:
        </Text>
        <Text>Công ty tnhh Techfood</Text>
        <Text>Địa chỉ:</Text>
        <Text>Email:</Text>
        <Text>Bản cập nhật ngày 26/6/2023.</Text>
      </Center>

      <Footer t={t}></Footer>
    </div>
  );
}
