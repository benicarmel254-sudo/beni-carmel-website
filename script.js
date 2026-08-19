document.addEventListener("DOMContentLoaded", () => {

  /* =========================================
     VARIABLES
  ========================================= */

  let bag = [];
  let wishlist = [];


  /* =========================================
     ELEMENTS
  ========================================= */

  const bagButton = document.getElementById("bagButton");
  const bagOverlay = document.getElementById("bagOverlay");
  const closeBag = document.getElementById("closeBag");

  const bagCount = document.getElementById("bagCount");
  const bagItems = document.getElementById("bagItems");
  const bagTotal = document.getElementById("bagTotal");

  const searchButton = document.getElementById("searchButton");
  const searchOverlay = document.getElementById("searchOverlay");
  const closeSearch = document.getElementById("closeSearch");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");

  const menuButton = document.getElementById("menuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  const newsletterForm =
    document.getElementById("newsletterForm");

  const filters =
    document.querySelectorAll(".filter");

  const products =
    document.querySelectorAll(".product");

  const sortProducts =
    document.getElementById("sortProducts");

  const wishlistButtons =
    document.querySelectorAll(".wishlist");


  /* =========================================
     SHOPPING BAG
  ========================================= */

  window.addToBag = function(productName, price) {

    const existingProduct = bag.find(
      item => item.name === productName
    );

    if (existingProduct) {

      existingProduct.quantity++;

    } else {

      bag.push({
        name: productName,
        price: price,
        quantity: 1
      });

    }

    updateBag();

    openBag();

  };


  function updateBag() {

    let totalItems = 0;
    let totalPrice = 0;

    bag.forEach(item => {

      totalItems += item.quantity;

      totalPrice +=
        item.price * item.quantity;

    });


    bagCount.textContent = totalItems;

    bagTotal.textContent =
      `KES ${totalPrice.toLocaleString()}`;


    if (bag.length === 0) {

      bagItems.innerHTML = `
        <p class="empty-bag">
          YOUR BAG IS EMPTY.
        </p>
      `;

      return;

    }


    bagItems.innerHTML = "";


    bag.forEach((item, index) => {

      const bagItem =
        document.createElement("div");

      bagItem.className = "bag-item";


      bagItem.innerHTML = `

        <div class="bag-item-info">

          <strong>
            ${item.name}
          </strong>

          <span>
            KES ${item.price.toLocaleString()}
          </span>

        </div>


        <div class="bag-item-controls">

          <button
            onclick="changeQuantity(${index}, -1)"
          >
            −
          </button>

          <span>
            ${item.quantity}
          </span>

          <button
            onclick="changeQuantity(${index}, 1)"
          >
            +
          </button>

          <button
            class="remove-item"
            onclick="removeFromBag(${index})"
          >
            REMOVE
          </button>

        </div>

      `;


      bagItems.appendChild(bagItem);

    });

  }


  window.changeQuantity =
    function(index, change) {

      bag[index].quantity += change;


      if (bag[index].quantity <= 0) {

        bag.splice(index, 1);

      }


      updateBag();

    };


  window.removeFromBag =
    function(index) {

      bag.splice(index, 1);

      updateBag();

    };


  function openBag() {

    bagOverlay.classList.add("open");

    document.body.classList.add("no-scroll");

  }


  function closeBagMenu() {

    bagOverlay.classList.remove("open");

    document.body.classList.remove("no-scroll");

  }


  bagButton.addEventListener(
    "click",
    openBag
  );

  closeBag.addEventListener(
    "click",
    closeBagMenu
  );


  bagOverlay.addEventListener(
    "click",
    event => {

      if (event.target === bagOverlay) {

        closeBagMenu();

      }

    }
  );


  /* =========================================
     WISHLIST
  ========================================= */

  wishlistButtons.forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.preventDefault();

        const product =
          button.closest(".product");

        const productName =
          product.dataset.name;


        button.classList.toggle("active");


        if (
          wishlist.includes(productName)
        ) {

          wishlist =
            wishlist.filter(
              item => item !== productName
            );

        } else {

          wishlist.push(productName);

        }

      }
    );

  });


  /* =========================================
     FILTERS
  ========================================= */

  filters.forEach(filter => {

    filter.addEventListener(
      "click",
      () => {

        filters.forEach(
          item => item.classList.remove("active")
        );

        filter.classList.add("active");


        const category =
          filter.dataset.category;


        products.forEach(product => {

          if (
            category === "all" ||
            product.dataset.category === category
          ) {

            product.style.display = "";

          } else {

            product.style.display = "none";

          }

        });

      }
    );

  });


  /* =========================================
     SORTING
  ========================================= */

  sortProducts.addEventListener(
    "change",
    () => {

      const container =
        document.getElementById("shop");

      const productArray =
        Array.from(products);


      const sortType =
        sortProducts.value;


      if (sortType === "price-low") {

        productArray.sort(
          (a, b) =>
            Number(a.dataset.price) -
            Number(b.dataset.price)
        );

      }


      if (sortType === "price-high") {

        productArray.sort(
          (a, b) =>
            Number(b.dataset.price) -
            Number(a.dataset.price)
        );

      }


      if (sortType === "name") {

        productArray.sort(
          (a, b) =>
            a.dataset.name.localeCompare(
              b.dataset.name
            )
        );

      }


      productArray.forEach(product => {

        container.appendChild(product);

      });

    }
  );


  /* =========================================
     SEARCH
  ========================================= */

  searchButton.addEventListener(
    "click",
    () => {

      searchOverlay.classList.add("open");

      document.body.classList.add("no-scroll");

      searchInput.focus();

    }
  );


  closeSearch.addEventListener(
    "click",
    () => {

      searchOverlay.classList.remove("open");

      document.body.classList.remove("no-scroll");

    }
  );


  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .toLowerCase()
          .trim();


      if (!query) {

        searchResults.innerHTML = "";

        return;

      }


      const matches =
        Array.from(products).filter(
          product =>
            product.dataset.name
              .toLowerCase()
              .includes(query)
        );


      if (matches.length === 0) {

        searchResults.innerHTML = `
          <p>
            NO PRODUCTS FOUND.
          </p>
        `;

        return;

      }


      searchResults.innerHTML =
        matches.map(product => {

          return `
            <p>
              ${product.dataset.name}
              — KES ${Number(
                product.dataset.price
              ).toLocaleString()}
            </p>
          `;

        }).join("");

    }
  );


  /* =========================================
     MOBILE MENU
  ========================================= */

  menuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.add("open");

      document.body.classList.add("no-scroll");

    }
  );


  closeMenu.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove("open");

      document.body.classList.remove("no-scroll");

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove("open");

          document.body.classList.remove("no-scroll");

        }
      );

    });


  /* =========================================
     NEWSLETTER
  ========================================= */

  newsletterForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const email =
        newsletterForm
          .querySelector("input")
          .value;


      if (!email) return;


      alert(
        "Welcome to the Béni Carmel Collective."
      );


      newsletterForm.reset();

    }
  );


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") return;


      bagOverlay.classList.remove("open");

      searchOverlay.classList.remove("open");

      mobileMenu.classList.remove("open");

      document.body.classList.remove("no-scroll");

    }
  );


  /* =========================================
     INITIAL BAG
  ========================================= */

  updateBag();

});
