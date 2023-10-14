const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventID");
console.log(eventId);

const generateSingleCard = function (singleData) {
  const singleRow = document.getElementById("single-row");

  const newCol2 = document.createElement("div");
  newCol2.classList.add("col");

  newCol2.innerHTML = `<div class="card mb-3 pb-2 pb-md-0">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${singleData.imageUrl}" class="img-fluid rounded-start" alt="${singleData.name}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${singleData.name}</h5>
        <p class="card-text"> ${singleData.description}</p>
        <p class="card-text">${singleData.brand}</p>
      </div>
      <div class="col ms-2">
      <a class="btn btn-warning" href="backoffice.html?eventID=${singleData._id}">EDIT</a>

      </div>
    </div>
  </div>
</div>
  `;
  singleRow.appendChild(newCol2);
};

const getAlbumDetail = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWVjZTEzOWM0MzAwMTg4MTQ1NjMiLCJpYXQiOjE2OTcxODEzOTAsImV4cCI6MTY5ODM5MDk5MH0.RouTDZKX6S5Ea8VjQbXjcXtMB270qXvcxGuth0KLFTI",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("error");
      }
    })

    .then((singleData) => {
      generateSingleCard(singleData);
    })

    .catch((err) => {
      console - log(err);
    });
};

getAlbumDetail();
