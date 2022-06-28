let socket = new WebSocket('ws://192.168.232.218:9000');

let name = '';
/* 접속 되었을 때 실행 */

socket.onopen = (event) => {
  document.getElementById('chat').innerHTML += `</br>소켓이 연결되었습니다.`;
};

socket.onerror = (event) => {
  document.getElementById('chat').innerHTML += `</br>소켓이 에러되었습니다.`;
};
socket.onclose = (event) => {
  document.getElementById('chat').innerHTML += `</br>소켓이 끊겼습니다.`;
};
/*
socket.onmessage = (event) => {
  // message 받았을 때 처리하는 내용 작성
  console.log(event.data);
};*/

/* 메시지 전송 함수 */
function send() {
  console.log("check");
  // 입력되어있는 데이터 가져오기
  var message = document.getElementById('test').value;
  
  // 가져왔으니 데이터를 빈칸으로 변경
  document.getElementById('test').value = '';

  // 내가 전송할 메시지 클라이언트에게 표시
  document.getElementById('chat').innerHTML += `</br>[Send]: ${message}`;

  // 서버로 message 이벤트 전달 + 데이터와 함께
  socket.send(JSON.stringify({type: 'message', text: message}));
}
