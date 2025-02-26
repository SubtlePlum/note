# 2. 데이터 링크 계층

### 데이터 링크 계층이란?

OSI 7계층 모델에서 두 번째에 위치하며, 물리 계층에서 전송되는 비트열을 논리적인 단위로 구분하여 데이터를 전송하고, 오류를 검출하고 수정하는 역할을 담당한다.

### 데이터 링크 계층의 역할

- 프레임(데이터)의 동기화 : 데이터를 전송하기 전에 동기화를 시켜주며, 이를 위해 스타트 비트와 스톱 비트를 사용한다.

- 물리 주소(MAC 주소)를 이용한 주소 지정 : 물리 주소를 사용해 노드를 식별하고, 물리적인 매체에서 데이터를 전송한다.

- 오류 제어 : 전송된 데이터에 오류가 있는지 검사하고, 오류를 검출하면 재전송을 요청한다.

- 흐름 제어 : 데이터 링크 계층은 송신자와 수신자 간의 데이터 전송 속도 차이를 해결하기 위한 흐름 제어 기능을 수행한다.

### 관련 장비

- 브릿지(Bridge) : 브릿지는 물리 계층에서 전송되는 프레임을 수신하여 목적지 맥 주소를 기준으로 판단해 다른 세그먼트로 전달하는 역할을 한다.

- 스위치(Switch) : 스위치는 브릿지와 비슷한 역할을 수행하지만, 프레임을 전달할 포트를 자동으로 학습하고, 포트 단위로 분할하여 처리하는 것이 특징이다.

- 네트워크 인터페이스 카드(NIC): NIC는 컴퓨터와 물리 매체(유선 또는 무선)를 연결하는 인터페이스 장치로, 물리 계층과 데이터 링크 계층 사이에서 데이터를 전송한다.

- 모뎀(Modem): 모뎀은 디지털 신호를 아날로그 신호로 변환하여 물리 매체를 통해 데이터를 전송하거나, 아날로그 신호를 디지털 신호로 변환하여 데이터를 수신하는 역할을 한다.
