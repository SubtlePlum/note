# TCP/IP 4계층

TCP/IP는 인터넷 프로토콜 스택의 일종으로, 네트워크 통신을 위한 표준 프로토콜 모음이다. 이러한 프로토콜들이 계층으로 나눠져 있는 것을 TCP/IP 계층이라고 한다.

1. 네트워크 접속 계층 (Network Access Layer 또는 Link Layer)

   - 네트워크 통신을 위한 물리적인 접속 방식을 다루는 계층이다.
   - 이더넷, Wi-Fi, 블루투스 등의 프로토콜이 여기에 속한다.

2. 인터넷 계층 (Internet Layer)

   - IP(Internet Protocol) 프로토콜을 사용하여 라우팅 기능을 수행하는 계층이다.
   - 데이터의 송수신을 위한 최적의 경로를 찾아주는 역할을 한다.

3. 전송 계층 (Transport Layer)

   - TCP(Transmission Control Protocol)와 UDP(User Datagram Protocol) 프로토콜을 사용하여, 신뢰성 있는 데이터 전송을 담당하는 계층이다.
   - TCP는 연결 지향적인 통신을 하며, UDP는 비연결형 통신을 한다.

4. 응용 계층 (Application Layer)

   - 다양한 응용 프로그램에서 사용하는 프로토콜들을 다루는 계층이다.
   - HTTP, FTP, SMTP, POP3, SSH 등의 프로토콜이 여기에 속한다.

각 계층은 아래 계층과 통신을 하기 위한 프로토콜을 사용하며, 계층별로 역할이 구분되어 있어서 유지보수와 확장성이 높다. 이를 통해 데이터 전송이 원활하게 이루어질 수 있다.

<br><br>

---

<br><br>

# 서버와 클라이언트가 소통하는 방법 (feat. Tree-way Handshake)

TCP/IP 프로토콜은 인터넷에서 데이터를 교환하기 위해 사용되는 프로토콜로, TCP는 데이터 전송을 담당하고, IP는 데이터 패킷 라우팅을 담당한다.

브라우저가 올바른 IP 주소를 받게 되면 서버와 connection을 빌드하게 된다. 클라이언트와 서버간 데이터 패킷들이 오가려면 TCP connection이 되어야 한다.

TCP connection 이후 클라이언트는 GET 요청을 통해 웹 페이지 등 데이터들을 요청할 수 있다.

### TCP connection 빌드 과정

1. 클라이언트가 SYN 패킷을 서버에 보내고 connection을 요청한다.

2. 서버가 새로운 connection을 시작할 수 있는 포트가 있다면 SYN/ACK 패킷으로 응답한다.

3. 클라이언트는 SYN/ACK 패킷을 서버로부터 받으면 서버에게 ACK 패킷을 보낸다.

이 과정을 마치면 TCP connection이 완성된다.

### SYN/ACK 란?

- SYN (Synchronize) : 클라이언트가 서버에게 통신을 시작하겠다는 요청을 보내는 패킷으로, SYN 패킷에는 시퀀스 번호가 포함돼있다.

- ACK (Acknowledge) : 서버가 클라이언트에게 SYN 패킷을 받았다는 것을 알리는 패킷으로, ACK 패킷에는 시퀀스 번호와 ACK 번호가 포함돼있다.
