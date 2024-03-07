let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // ajax.jsonからデータを取得する処理を記述
  $.ajax("ajax.json", {
    type: "GET",
    success: function(datos){
      data = datos
    },
    error: function(){
      alert("Hubo un problema con la carga de datos...")
    }
  })
}

function changeVideo() {
  // ボタンがクリックされた際の処理を記述
  // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
  if(data.length == 0){
    console.log("cargando datos...")
  getData()
    console. log("cambio de datos")
  }
  button.addEventListener("click", function(){
  console.log ("cambio de datos")
  titleArea.innerHTML = data [number].title 
  contentArea.innerHTML = data [number].content
  videoArea.setAttribute("src", data[number].url)
  number == 2? number = 0: number++

  })
}


window.onload = changeVideo;