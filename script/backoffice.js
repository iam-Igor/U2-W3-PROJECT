const addressBarContent = new URLSearchParams(location.search);
const eventId = addressBarContent.get("eventID");
console.log(eventId);

const deleteAlbums = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    method: "DELETE",

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWVjZTEzOWM0MzAwMTg4MTQ1NjMiLCJpYXQiOjE2OTcxODEzOTAsImV4cCI6MTY5ODM5MDk5MH0.RouTDZKX6S5Ea8VjQbXjcXtMB270qXvcxGuth0KLFTI",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Album eliminato");
      } else {
        throw new Error("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const editAlbums = function (editedProduct) {
  fetch("https://striveschool-api.herokuapp.com/api/product/" + eventId, {
    method: "PUT",
    body: JSON.stringify(editedProduct),

    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWVjZTEzOWM0MzAwMTg4MTQ1NjMiLCJpYXQiOjE2OTcxODEzOTAsImV4cCI6MTY5ODM5MDk5MH0.RouTDZKX6S5Ea8VjQbXjcXtMB270qXvcxGuth0KLFTI",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Album modificato");
      } else {
        throw new Error("error");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

if (eventId) {
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
        throw new Error();
      }
    })

    .then((detail) => {
      console.log(detail);

      const name = document.getElementById("name");
      const description = document.getElementById("description");
      const brand = document.getElementById("brand");
      const price = document.getElementById("price");
      const imgUrl = document.getElementById("img-url");

      name.value = detail.name;
      description.value = detail.description;
      brand.value = detail.brand;
      price.value = detail.price;
      imgUrl.value = detail.imageUrl;

      const btnContainer = document.getElementById("btn-container");
      btnContainer.classList.remove("hide");
      const editBtn = document.getElementById("edit-button");
      const deleteBtn = document.getElementById("delete-button");

      editBtn.addEventListener("click", function () {
        const editedProduct = {
          name: name.value,
          description: description.value,
          brand: brand.value,
          price: price.value,
          imageUrl: imgUrl.value,
        };
        editAlbums(editedProduct);
      });

      deleteBtn.addEventListener("click", function () {
        deleteAlbums();
      });
    })

    .catch((err) => {
      console.log(err);
    });
}

const form = document.getElementById("back-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const description = document.getElementById("description");
  const brand = document.getElementById("brand");
  const price = document.getElementById("price");
  const imgUrl = document.getElementById("img-url");

  const newAlbum = {
    name: name.value,
    description: description.value,
    price: price.value,
    brand: brand.value,
    imageUrl: imgUrl.value,
  };

  // FETCH POST

  fetch("https://striveschool-api.herokuapp.com/api/product", {
    method: "POST",
    body: JSON.stringify(newAlbum),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZWVjZTEzOWM0MzAwMTg4MTQ1NjMiLCJpYXQiOjE2OTcxODEzOTAsImV4cCI6MTY5ODM5MDk5MH0.RouTDZKX6S5Ea8VjQbXjcXtMB270qXvcxGuth0KLFTI",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        console.log("Oggetto salvato");
      } else {
        throw new Error("Errore durante la richiesta");
      }
    })
    .catch((err) => {
      console.error(err);
    });
});