const generateCards = function (element) {
  const mainRow = document.getElementById("main-row");

  element.forEach((el) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col");
    newCol.innerHTML = `
    <div class="col">
    <div class="card mt-5">
      <img src="${el.imageUrl}" class="card-img-top" alt="${el.name}" />
      <div class="card-body">
        <h5 class="card-title">${el.name}</h5>
        <p class="card-text">
         Artist: ${el.brand}
        </p>
        <p class="card-text">
         Price: ${el.price}$
        </p>
        <a href="details.html?eventID=${el._id}" class="btn btn-primary">Discover more</a>
      </div>
    </div>
  </div>
    `;
    mainRow.appendChild(newCol);
  });
};

// GET FETCH

fetch("https://striveschool-api.herokuapp.com/api/product", {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWVjZTEzOWM0MzAwMTg4MTQ1NjMiLCJpYXQiOjE2OTcxODEzOTAsImV4cCI6MTY5ODM5MDk5MH0.RouTDZKX6S5Ea8VjQbXjcXtMB270qXvcxGuth0KLFTI",
  },
})
  .then((res) => {
    if (res.ok) {
      console.log(res);
      return res.json();
    } else if (res.status >= 400) {
      alert("Problem with the request try again later.");
    } else if (res.status >= 500) {
      alert("Internal server error.");
    } else {
      throw new Error("Generic error.");
    }
  })

  .then((detail) => {
    console.log(detail);
    generateCards(detail);
  })

  .catch((err) => {
    console.log(err);
  });
