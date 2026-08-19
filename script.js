document.addEventListener("DOMContentLoaded", () => {

  /* =====================================================
     BÉNI CARMEL COLLECTIVES
     PREMIUM FAITH-INSPIRED COLLECTION
  ===================================================== */


  /* =====================================================
     STATE
  ===================================================== */

  let bag =
    JSON.parse(
      localStorage.getItem("beniCarmelBag")
    ) || [];

  let wishlist =
    JSON.parse(
      localStorage.getItem("beniCarmelWishlist")
    ) || [];

  let currentProduct = null;

  let selectedColour = "";

  let selectedSize = "";

  let productQuantity = 1;


  /* =====================================================
     ELEMENTS
  ===================================================== */

  const bagButton =
    document.getElementById("bagButton");

  const bagOverlay =
    document.getElementById("bagOverlay");

  const closeBag =
    document.getElementById("closeBag");

  const bagCount =
    document.getElementById("bagCount");

  const bagItems =
    document.getElementById("bagItems");

  const bagSubtotal =
    document.getElementById("bagSubtotal");

  const bagShipping =
    document.getElementById("bagShipping");

  const bagTotal =
    document.getElementById("bagTotal");

  const shippingMessage =
    document.getElementById("shippingMessage");

  const checkoutButton =
    document.getElementById("checkoutButton");


  /* SEARCH */

  const searchButton =
    document.getElementById("searchButton");

  const searchOverlay =
    document.getElementById("searchOverlay");

  const closeSearch =
    document.getElementById("closeSearch");

  const searchInput =
    document.getElementById("searchInput");

  const searchResults =
    document.getElementById("searchResults");


  /* MOBILE */

  const menuButton =
    document.getElementById("menuButton");

  const mobileMenu =
    document.getElementById("mobileMenu");

  const closeMenu =
    document.getElementById("closeMenu");


  /* SHOP */

  const filters =
    document.querySelectorAll(".filter");

  const products =
    document.querySelectorAll(".product");

  const sortProducts =
    document.getElementById("sortProducts");


  /* NEWSLETTER */

  const newsletterForm =
    document.getElementById("newsletterForm");


  /* PRODUCT DETAIL */

  const productDetailOverlay =
    document.getElementById(
      "productDetailOverlay"
    );

  const closeProductDetail =
    document.getElementById(
      "closeProductDetail"
    );

  const detailProductImage =
    document.getElementById(
      "detailProductImage"
    );

  const detailProductName =
    document.getElementById(
      "detailProductName"
    );

  const detailProductPrice =
    document.getElementById(
      "detailProductPrice"
    );

  const detailProductCategory =
    document.getElementById(
      "detailProductCategory"
    );

  const detailProductDescription =
    document.getElementById(
      "detailProductDescription"
    );

  const colourOptions =
    document.getElementById(
      "colourOptions"
    );

  const colourSection =
    document.getElementById(
      "productColourSection"
    );

  const sizeOptions =
    document.getElementById(
      "sizeOptions"
    );

  const sizeSection =
    document.getElementById(
      "productSizeSection"
    );

  const detailQuantity =
    document.getElementById(
      "detailQuantity"
    );

  const quantityMinus =
    document.getElementById(
      "quantityMinus"
    );

  const quantityPlus =
    document.getElementById(
      "quantityPlus"
    );

  const detailAddButton =
    document.getElementById(
      "detailAddButton"
    );


  /* =====================================================
     DESCRIPTIONS
  ===================================================== */

  const productDescriptions = {

    "Faith Hoodie":
      "A bold faith-inspired hoodie designed for everyday wear and created to carry your beliefs wherever you go.",

    "Covenant Hoodie":
      "A statement hoodie inspired by covenant, faith and the promises we choose to live by.",

    "Faith T-Shirt":
      "A clean everyday T-shirt designed to make faith part of your everyday expression.",

    "Glory T-Shirt":
      "Minimal design, meaningful message and effortless everyday styling.",

    "Covenant T-Shirt":
      "A faith-inspired essential designed for those who carry their beliefs boldly.",

    "College Jacket":
      "A statement varsity-inspired jacket bringing Béni Carmel identity into an everyday streetwear silhouette.",

    "Classic Denim Jacket":
      "A timeless denim layer designed to work effortlessly with the Béni Carmel collection.",

    "Washed Denim Jacket":
      "A relaxed washed-denim essential with a vintage-inspired feel.",

    "Wide Leg Jeans":
      "Relaxed wide-leg denim designed for effortless everyday styling.",

    "Sky Blue Jorts":
      "Relaxed denim shorts designed for effortless everyday styling.",

    "Dark Blue Jorts":
      "A classic dark denim jort designed for comfortable everyday wear.",

    "Grey Sweatpants":
      "Relaxed everyday sweatpants designed for comfort and effortless styling.",

    "Black Sweatpants":
      "A versatile black sweatpant essential made for everyday movement.",

    "Cream Sweatpants":
      "A clean cream-toned sweatpant designed for relaxed everyday looks.",

    "Burgundy Sweatpants":
      "A statement burgundy sweatpant combining comfort with bold everyday style.",

    "White Cap":
      "A clean white cap featuring the Béni Carmel identity.",

    "Black Beanie":
      "A simple black beanie designed to finish everyday looks with a subtle Béni Carmel touch.",

    "Cream Beanie":
      "A soft cream-toned beanie designed for effortless everyday styling.",

    "Burgundy Beanie":
      "A bold burgundy beanie designed to add colour and character to everyday looks.",

    "Black Bucket Hat":
      "A classic black bucket hat designed for relaxed everyday styling.",

    "Burgundy Bucket Hat":
      "A statement burgundy bucket hat made for bold everyday looks.",

    "White Bucket Hat":
      "A clean white bucket hat designed to complement everyday outfits.",

    "Beige Bucket Hat":
      "A neutral beige bucket hat designed for effortless everyday wear.",

    "Black Shoulder Bag":
      "A practical black shoulder bag designed to carry your everyday essentials.",

    "Brown Shoulder Bag":
      "A warm brown shoulder bag designed for everyday styling.",

    "Pink Shoulder Bag":
      "A playful pink shoulder bag designed to add personality to everyday outfits.",

    "Orange Shoulder Bag":
      "A bold orange shoulder bag created for confident everyday styling.",

    "Black Cross Shoulder Bag":
      "A practical cross-shoulder bag designed for everyday movement and convenience.",

    "Silver Cross Necklace":
      "A meaningful silver cross necklace inspired by faith and designed as an everyday statement.",

    "Black Socks":
      "Everyday black socks designed to complement the Béni Carmel collection.",

    "White Socks":
      "Clean everyday white socks designed for comfort and easy styling."

  };


  /* =====================================================
     SAVE
  ===================================================== */

  function saveBag() {

    localStorage.setItem(
      "beniCarmelBag",
      JSON.stringify(bag)
    );

  }


  function saveWishlist() {

    localStorage.setItem(
      "beniCarmelWishlist",
      JSON.stringify(wishlist)
    );

  }


  /* =====================================================
     BAG
  ===================================================== */

  function updateBag() {

    let itemCount = 0;

    let subtotal = 0;


    bag.forEach(item => {

      itemCount += item.quantity;

      subtotal +=
        item.price *
        item.quantity;

    });


    bagCount.textContent =
      itemCount;


    if (bag.length === 0) {

      bagItems.innerHTML = `

        <div class="empty-bag">

          <p>
            YOUR BAG IS EMPTY.
          </p>

          <a
            href="#shop"
            id="emptyBagShop"
          >
            CONTINUE SHOPPING →
          </a>

        </div>

      `;

    } else {

      renderBagItems();

    }


    let shipping = 0;


    if (
      subtotal > 0 &&
      subtotal < 10000
    ) {

      shipping = 500;

    }


    const total =
      subtotal + shipping;


    bagSubtotal.textContent =
      `KES ${subtotal.toLocaleString()}`;


    bagShipping.textContent =
      subtotal >= 10000
        ? "FREE"
        : `KES ${shipping.toLocaleString()}`;


    bagTotal.textContent =
      `KES ${total.toLocaleString()}`;


    if (subtotal === 0) {

      shippingMessage.textContent =
        "ADD KES 10,000 TO YOUR BAG FOR FREE SHIPPING.";

    }

    else if (subtotal >= 10000) {

      shippingMessage.textContent =
        "🎉 YOU QUALIFY FOR FREE SHIPPING!";

    }

    else {

      const remaining =
        10000 - subtotal;

      shippingMessage.textContent =
        `ADD KES ${remaining.toLocaleString()} MORE FOR FREE SHIPPING.`;

    }


    checkoutButton.disabled =
      bag.length === 0;


    checkoutButton.textContent =
      bag.length === 0
        ? "YOUR BAG IS EMPTY"
        : "PROCEED TO CHECKOUT";


    setupEmptyBagLink();

  }


  /* =====================================================
     RENDER BAG
  ===================================================== */

  function renderBagItems() {

    bagItems.innerHTML = "";


    bag.forEach(
      (item, index) => {

        const productElement =
          document.createElement("div");


        productElement.className =
          "bag-product";


        const image =
          item.image ||
          "images/logo.png";


        const colourText =
          item.colour
            ? `COLOUR: ${item.colour}`
            : "";


        const sizeText =
          item.size
            ? `SIZE: ${item.size}`
            : "";


        productElement.innerHTML = `

          <div class="bag-product-image">

            <img
              src="${image}"
              alt="${item.name}"
            >

          </div>


          <div class="bag-product-details">

            <div class="bag-product-top">

              <div>

                <h3>
                  ${item.name}
                </h3>

                ${
                  colourText
                    ? `<p>${colourText}</p>`
                    : ""
                }

                ${
                  sizeText
                    ? `<p>${sizeText}</p>`
                    : ""
                }

              </div>


              <strong>
                KES ${(
                  item.price *
                  item.quantity
                ).toLocaleString()}
              </strong>

            </div>


            <div class="bag-product-bottom">

              <div class="bag-quantity">

                <button
                  type="button"
                  onclick="changeBagQuantity(${index}, -1)"
                >
                  −
                </button>

                <span>
                  ${item.quantity}
                </span>

                <button
                  type="button"
                  onclick="changeBagQuantity(${index}, 1)"
                >
                  +
                </button>

              </div>


              <button
                type="button"
                class="bag-remove"
                onclick="removeBagItem(${index})"
              >
                REMOVE
              </button>

            </div>

          </div>

        `;


        bagItems.appendChild(
          productElement
        );

      }
    );

  }


  /* =====================================================
     CHANGE QUANTITY
  ===================================================== */

  window.changeBagQuantity =
    function(index, change) {

      if (!bag[index]) return;


      bag[index].quantity +=
        change;


      if (
        bag[index].quantity <= 0
      ) {

        bag.splice(index, 1);

      }


      saveBag();

      updateBag();

    };


  /* =====================================================
     REMOVE
  ===================================================== */

  window.removeBagItem =
    function(index) {

      if (!bag[index]) return;


      bag.splice(index, 1);

      saveBag();

      updateBag();

    };


  /* =====================================================
     OPEN / CLOSE BAG
  ===================================================== */

  function openBag() {

    bagOverlay.classList.add(
      "open"
    );

    document.body.classList.add(
      "no-scroll"
    );

  }


  function closeBagMenu() {

    bagOverlay.classList.remove(
      "open"
    );

    document.body.classList.remove(
      "no-scroll"
    );

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

      if (
        event.target ===
        bagOverlay
      ) {

        closeBagMenu();

      }

    }
  );


  /* =====================================================
     EMPTY BAG LINK
  ===================================================== */

  function setupEmptyBagLink() {

    const link =
      document.getElementById(
        "emptyBagShop"
      );


    if (!link) return;


    link.onclick = () => {

      closeBagMenu();

    };

  }


  /* =====================================================
     CHECKOUT
  ===================================================== */

  checkoutButton.addEventListener(
    "click",
    () => {

      if (
        bag.length === 0
      ) {

        return;

      }


      window.location.href =
        "checkout.html";

    }
  );


  /* =====================================================
     WISHLIST
  ===================================================== */

  document
    .querySelectorAll(".wishlist")
    .forEach(button => {

      const product =
        button.closest(".product");


      if (!product) return;


      const name =
        product.dataset.name;


      if (
        wishlist.includes(name)
      ) {

        button.classList.add(
          "active"
        );

      }


      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          event.stopPropagation();


          button.classList.toggle(
            "active"
          );


          if (
            wishlist.includes(name)
          ) {

            wishlist =
              wishlist.filter(
                item =>
                  item !== name
              );

          } else {

            wishlist.push(name);

          }


          saveWishlist();

        }
      );

    });


  /* =====================================================
     FILTERS
  ===================================================== */

  filters.forEach(
    filter => {

      filter.addEventListener(
        "click",
        () => {

          filters.forEach(
            item =>
              item.classList.remove(
                "active"
              )
          );


          filter.classList.add(
            "active"
          );


          const category =
            filter.dataset.category;


          products.forEach(
            product => {

              product.style.display =
                category === "all" ||
                product.dataset.category ===
                  category
                  ? ""
                  : "none";

            }
          );

        }
      );

    }
  );


  /* =====================================================
     SORT
  ===================================================== */

  sortProducts.addEventListener(
    "change",
    () => {

      const container =
        document.getElementById(
          "products"
        );


      const productArray =
        Array.from(products);


      switch (
        sortProducts.value
      ) {

        case "price-low":

          productArray.sort(
            (a, b) =>
              Number(a.dataset.price) -
              Number(b.dataset.price)
          );

          break;


        case "price-high":

          productArray.sort(
            (a, b) =>
              Number(b.dataset.price) -
              Number(a.dataset.price)
          );

          break;


        case "name":

          productArray.sort(
            (a, b) =>
              a.dataset.name.localeCompare(
                b.dataset.name
              )
          );

          break;


        default:

          break;

      }


      productArray.forEach(
        product =>
          container.appendChild(
            product
          )
      );

    }
  );


  /* =====================================================
     SEARCH
  ===================================================== */

  searchButton.addEventListener(
    "click",
    () => {

      searchOverlay.classList.add(
        "open"
      );

      document.body.classList.add(
        "no-scroll"
      );

      searchInput.focus();

    }
  );


  closeSearch.addEventListener(
    "click",
    () => {

      searchOverlay.classList.remove(
        "open"
      );

      document.body.classList.remove(
        "no-scroll"
      );

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

        searchResults.innerHTML =
          "";

        return;

      }


      const matches =
        Array.from(products)
          .filter(product =>
            product.dataset.name
              .toLowerCase()
              .includes(query)
          );


      if (
        matches.length === 0
      ) {

        searchResults.innerHTML = `
          <p>NO PRODUCTS FOUND.</p>
        `;

        return;

      }


      searchResults.innerHTML =
        matches
          .map(product => {

            return `

              <button
                type="button"
                class="search-result"
                data-product-name="${product.dataset.name}"
              >

                ${product.dataset.name}

                —

                KES ${Number(
                  product.dataset.price
                ).toLocaleString()}

              </button>

            `;

          })
          .join("");


      document
        .querySelectorAll(
          ".search-result"
        )
        .forEach(result => {

          result.addEventListener(
            "click",
            () => {

              const product =
                Array.from(products)
                  .find(
                    item =>
                      item.dataset.name ===
                      result.dataset.productName
                  );


              if (product) {

                closeSearchOverlay();

                openProductDetail(
                  product
                );

              }

            }
          );

        });

    }
  );


  function closeSearchOverlay() {

    searchOverlay.classList.remove(
      "open"
    );

    document.body.classList.remove(
      "no-scroll"
    );

  }


  /* =====================================================
     MOBILE MENU
  ===================================================== */

  menuButton.addEventListener(
    "click",
    () => {

      mobileMenu.classList.add(
        "open"
      );

      document.body.classList.add(
        "no-scroll"
      );

    }
  );


  closeMenu.addEventListener(
    "click",
    () => {

      mobileMenu.classList.remove(
        "open"
      );

      document.body.classList.remove(
        "no-scroll"
      );

    }
  );


  mobileMenu
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          mobileMenu.classList.remove(
            "open"
          );

          document.body.classList.remove(
            "no-scroll"
          );

        }
      );

    });


  /* =====================================================
     NEWSLETTER
  ===================================================== */

  newsletterForm.addEventListener(
    "submit",
    event => {

      event.preventDefault();


      alert(
        "Welcome to the Béni Carmel Collective."
      );


      newsletterForm.reset();

    }
  );


  /* =====================================================
     PRODUCT DETAIL
  ===================================================== */

  products.forEach(
    product => {

      const image =
        product.querySelector(
          ".product-image img"
        );


      const quickAdd =
        product.querySelector(
          ".quick-add"
        );


      if (image) {

        image.addEventListener(
          "click",
          () => {

            openProductDetail(
              product
            );

          }
        );

      }


      if (quickAdd) {

        quickAdd.addEventListener(
          "click",
          event => {

            event.preventDefault();

            event.stopPropagation();


            openProductDetail(
              product
            );

          }
        );

      }

    }
  );


  /* =====================================================
     OPEN PRODUCT DETAIL
  ===================================================== */

  function openProductDetail(
    product
  ) {

    currentProduct =
      product;


    productQuantity = 1;

    selectedColour = "";

    selectedSize = "";


    detailQuantity.textContent =
      "1";


    const name =
      product.dataset.name;


    const price =
      Number(
        product.dataset.price
      );


    const category =
      product.dataset.category;


    const image =
      product.querySelector(
        ".product-image img"
      );


    detailProductName.textContent =
      name;


    detailProductPrice.textContent =
      `KES ${price.toLocaleString()}`;


    detailProductCategory.textContent =
      category.toUpperCase();


    if (image) {

      detailProductImage.src =
        image.getAttribute("src");

      detailProductImage.alt =
        name;

    }


    detailProductDescription.textContent =
      productDescriptions[name] ||
      "A meaningful piece from Béni Carmel Collectives.";


    /* COLOURS */

    const colours =
      product.dataset.colours
        ? product.dataset.colours
            .split(",")
            .map(item =>
              item.trim()
            )
            .filter(Boolean)
        : [];


    colourOptions.innerHTML =
      "";


    if (colours.length > 0) {

      colourSection.style.display =
        "";


      colours.forEach(
        (colour, index) => {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "colour-option";


          button.dataset.colour =
            colour;


          button.textContent =
            colour;


          if (index === 0) {

            button.classList.add(
              "selected"
            );

            selectedColour =
              colour;

          }


          button.addEventListener(
            "click",
            () => {

              document
                .querySelectorAll(
                  ".colour-option"
                )
                .forEach(
                  item =>
                    item.classList.remove(
                      "selected"
                    )
                );


              button.classList.add(
                "selected"
              );


              selectedColour =
                colour;

            }
          );


          colourOptions.appendChild(
            button
          );

        }
      );

    } else {

      colourSection.style.display =
        "none";

    }


    /* SIZES */

    const sizes =
      product.dataset.sizes
        ? product.dataset.sizes
            .split(",")
            .map(item =>
              item.trim()
            )
            .filter(Boolean)
        : [];


    sizeOptions.innerHTML =
      "";


    if (sizes.length > 0) {

      sizeSection.style.display =
        "";


      sizes.forEach(
        (size, index) => {

          const button =
            document.createElement(
              "button"
            );


          button.type =
            "button";


          button.className =
            "size-option";


          button.dataset.size =
            size;


          button.textContent =
            size;


          if (
            size === "M"
          ) {

            button.classList.add(
              "selected"
            );

            selectedSize =
              "M";

          }


          else if (
            index === 0 &&
            !selectedSize
          ) {

            button.classList.add(
              "selected"
            );

            selectedSize =
              size;

          }


          button.addEventListener(
            "click",
            () => {

              document
                .querySelectorAll(
                  ".size-option"
                )
                .forEach(
                  item =>
                    item.classList.remove(
                      "selected"
                    )
                );


              button.classList.add(
                "selected"
              );


              selectedSize =
                size;

            }
          );


          sizeOptions.appendChild(
            button
          );

        }
      );

    } else {

      sizeSection.style.display =
        "none";


      selectedSize = "";

    }


    productDetailOverlay.classList.add(
      "open"
    );


    document.body.classList.add(
      "no-scroll"
    );

  }


  /* =====================================================
     CLOSE DETAIL
  ===================================================== */

  function closeProductPage() {

    productDetailOverlay.classList.remove(
      "open"
    );

    document.body.classList.remove(
      "no-scroll"
    );

  }


  closeProductDetail.addEventListener(
    "click",
    closeProductPage
  );


  productDetailOverlay.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        productDetailOverlay
      ) {

        closeProductPage();

      }

    }
  );


  /* =====================================================
     QUANTITY
  ===================================================== */

  quantityMinus.addEventListener(
    "click",
    () => {

      if (
        productQuantity > 1
      ) {

        productQuantity--;

      }


      detailQuantity.textContent =
        productQuantity;

    }
  );


  quantityPlus.addEventListener(
    "click",
    () => {

      productQuantity++;


      detailQuantity.textContent =
        productQuantity;

    }
  );


  /* =====================================================
     ADD PRODUCT TO BAG
  ===================================================== */

  detailAddButton.addEventListener(
    "click",
    () => {

      if (!currentProduct) {
        return;
      }


      const name =
        currentProduct.dataset.name;


      const price =
        Number(
          currentProduct.dataset.price
        );


      const image =
        currentProduct
          .querySelector(
            ".product-image img"
          );


      /*
        Each combination of:
        PRODUCT + COLOUR + SIZE

        becomes its own bag item.
      */

      const existingProduct =
        bag.find(item =>

          item.name === name &&

          item.colour ===
            selectedColour &&

          item.size ===
            selectedSize

        );


      if (existingProduct) {

        existingProduct.quantity +=
          productQuantity;

      } else {

        bag.push({

          name: name,

          price: price,

          colour:
            selectedColour,

          size:
            selectedSize,

          quantity:
            productQuantity,

          image:
            image
              ? image.getAttribute(
                  "src"
                )
              : "images/logo.png"

        });

      }


      saveBag();

      updateBag();

      closeProductPage();

      openBag();

    }
  );


  /* =====================================================
     ESCAPE
  ===================================================== */

  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key !==
        "Escape"
      ) {

        return;

      }


      bagOverlay.classList.remove(
        "open"
      );

      searchOverlay.classList.remove(
        "open"
      );

      mobileMenu.classList.remove(
        "open"
      );

      productDetailOverlay.classList.remove(
        "open"
      );

      document.body.classList.remove(
        "no-scroll"
      );

    }
  );


  /* =====================================================
     LOGO → TOP
  ===================================================== */

  const logo =
    document.querySelector(
      ".logo"
    );


  if (logo) {

    logo.addEventListener(
      "click",
      event => {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =====================================================
     INITIALIZE
  ===================================================== */

  updateBag();

});
