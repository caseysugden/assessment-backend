document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
document.getElementById("continentButton").onclick = function () {
    axios.get("http://localhost:4000/api/continent/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
document.getElementById("animalButton").onclick = function () {
    axios.get("http://localhost:4000/api/animal/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
document.getElementById("zodiacButton").onclick = function () {
    axios.get("http://localhost:4000/api/zodiac/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};