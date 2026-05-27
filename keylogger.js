const typingArea = document.getElementById("typingArea");
  const logsDiv = document.getElementById("logs");

  const totalKeys = document.getElementById("totalKeys");
  const lastKey = document.getElementById("lastKey");

  let logs = JSON.parse(localStorage.getItem("logs")) || [];

  function renderLogs(){

    logsDiv.innerHTML = "";

    logs.forEach(log => {

      const div = document.createElement("div");

      div.classList.add("log");

      div.innerHTML = `
        <strong>${log.key}</strong>
        <br>
        <small>${log.time}</small>
      `;

      logsDiv.appendChild(div);

    });

    totalKeys.innerText = logs.length;

    if(logs.length > 0){
      lastKey.innerText = logs[logs.length - 1].key;
    }

    logsDiv.scrollTop = logsDiv.scrollHeight;
  }

  renderLogs();

  typingArea.addEventListener("keydown", function(event){

    const data = {
      key: event.key,
      time: new Date().toLocaleString()
    };

    logs.push(data);

    localStorage.setItem("logs", JSON.stringify(logs));

    renderLogs();

  });

  function clearLogs(){

    logs = [];

    localStorage.removeItem("logs");

    renderLogs();

  }

  function downloadLogs(){

    const text = logs.map(
      log => `[${log.time}] ${log.key}`
    ).join("\\n");

    const blob = new Blob([text], {
      type:"text/plain"
    });

    const a = document.createElement("a");

    a.href = URL.createObjectURL(blob);

    a.download = "keyboard_logs.txt";

    a.click();

  }
