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

// FIXME: Implement HTTP Requests to get, post, put, and delete users
document.getElementById("usersButton").onclick = function () {
    axios.get("http://localhost:4000/api/user/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
};
document.getElementById("deleteButton").onclick = function () {
    axios.delete("http://localhost:4000/api/user/:id")
        .then(function (response) {
            const data = response.data;
            alert(data);
        })
}