document.addEventListener("DOMContentLoaded", () => {


  /* =====================================================
     LOAD BAG
  ===================================================== */

  let bag =
    JSON.parse(
      localStorage.getItem("beniCarmelBag")
    ) || [];


  /* =====================================================
     ELEMENTS
  ===================================================== */

  const checkoutItems =
    document.getElementById(
      "checkoutItems"
    );

  const checkoutSubtotal =
    document.getElementById(
      "checkoutSubtotal"
    );

  const checkoutShipping =
    document.getElementById(
      "checkoutShipping"
    );

  const checkoutTotal =
    document.getElementById(
      "checkoutTotal"
    );

  const placeOrderButton =
    document.getElementById(
      "placeOrderButton"
    );

  const orderSuccess =
    document.getElementById(
      "orderSuccess"
    );

  const orderNumber =
    document.getElementById(
      "orderNumber"
    );

  const mpesaDetails =
    document.getElementById(
      "mpesaDetails"
    );

  const mpesaPhone =
    document.getElementById(
      "mpesaPhone"
    );


  /* =====================================================
     PRODUCT IMAGES
  ===================================================== */

  const imageMap = {

    "Faith Hoodie":
      "images/hoodie-1.jpg",

    "Covenant Hoodie":
      "images/hoodie-2.jpg",

    "Glory Hoodie":
      "images/hoodie-3.jpg",

    "Faith Shirt":
      "images/shirt-1.jpg",

    "Glory Shirt":
      "images/shirt-2.jpg",

    "Covenant Shirt":
      "images/shirt-3.jpg",

    "College Jacket":
      "images/college-jacket.jpg",

    "Classic Denim Jacket":
      "images/denim-jacket-1.jpg",

    "Washed Denim Jacket":
      "images/denim-jacket-2.jpg",

    "Faith Jorts":
      "images/jorts-1.jpg",

    "Béni Carmel Cap":
      "images/cap.jpg"

  };


  /* =====================================================
     CALCULATE SUBTOTAL
  ===================================================== */

  function calculateSubtotal() {

    return bag.reduce(
      (total, item) => {

        return (
          total +
          Number(item.price) *
          Number(item.quantity)
        );

      },
      0
    );

  }


  /* =====================================================
     CALCULATE SHIPPING
  ===================================================== */

  function calculateShipping(
    subtotal
  ) {

    if (
      subtotal <= 0
    ) {

      return 0;

    }


    if (
      subtotal >= 10000
    ) {

      return 0;

    }


    return 500;

  }


  /* =====================================================
     RENDER ORDER
  ===================================================== */

  function renderOrder() {

    checkoutItems.innerHTML = "";


    if (
      bag.length === 0
    ) {

      checkoutItems.innerHTML = `

        <div class="checkout-empty">

          <p>
            YOUR BAG IS EMPTY.
          </p>

          <a href="index.html#shop">
            RETURN TO SHOP →
          </a>

        </div>

      `;


      placeOrderButton.disabled =
        true;


      updateTotals();


      return;

    }


    bag.forEach(
      item => {

        const product =
          document.createElement(
            "div"
          );


        product.className =
          "checkout-product";


        const image =
          item.image ||
          imageMap[item.name] ||
          "images/logo.png";


        product.innerHTML = `

          <div class="checkout-product-image">

            <img
              src="${image}"
              alt="${item.name}"
            >

            <span>
              ${item.quantity}
            </span>

          </div>


          <div class="checkout-product-info">

            <strong>
              ${item.name}
            </strong>

            <p>
              SIZE: ${item.size}
            </p>

          </div>


          <strong class="checkout-product-price">

            KES ${(
              Number(item.price) *
              Number(item.quantity)
            ).toLocaleString()}

          </strong>

        `;


        checkoutItems.appendChild(
          product
        );

      }
    );


    updateTotals();

  }


  /* =====================================================
     TOTALS
  ===================================================== */

  function updateTotals() {

    const subtotal =
      calculateSubtotal();


    const shipping =
      calculateShipping(
        subtotal
      );


    const total =
      subtotal +
      shipping;


    checkoutSubtotal.textContent =
      `KES ${subtotal.toLocaleString()}`;


    checkoutShipping.textContent =
      shipping === 0 &&
      subtotal > 0
        ? "FREE"
        : `KES ${shipping.toLocaleString()}`;


    checkoutTotal.textContent =
      `KES ${total.toLocaleString()}`;


    /* FREE DELIVERY OPTION */

    const freeDelivery =
      document.getElementById(
        "freeDelivery"
      );


    const standardDelivery =
      document.querySelector(
        'input[name="delivery"][value="500"]'
      );


    if (
      subtotal >= 10000
    ) {

      freeDelivery.disabled =
        false;

      freeDelivery.checked =
        true;

    } else {

      freeDelivery.disabled =
        true;

      standardDelivery.checked =
        true;

    }

  }


  /* =====================================================
     DELIVERY CHANGE
  ===================================================== */

  document
    .querySelectorAll(
      'input[name="delivery"]'
    )
    .forEach(
      option => {

        option.addEventListener(
          "change",
          () => {

            updateTotals();

          }
        );

      }
    );


  /* =====================================================
     PAYMENT METHOD
  ===================================================== */

  document
    .querySelectorAll(
      'input[name="payment"]'
    )
    .forEach(
      payment => {

        payment.addEventListener(
          "change",
          () => {

            if (
              payment.value ===
              "mpesa"
            ) {

              mpesaDetails.style.display =
                "block";

            } else {

              mpesaDetails.style.display =
                "none";

            }

          }
        );

      }
    );


  /* =====================================================
     NORMALIZE PHONE
  ===================================================== */

  function normalizePhone(
    phone
  ) {

    let cleaned =
      String(phone)
        .replace(/\s+/g, "")
        .replace(/-/g, "");


    if (
      cleaned.startsWith("07") ||
      cleaned.startsWith("01")
    ) {

      cleaned =
        "254" +
        cleaned.substring(1);

    }


    if (
      cleaned.startsWith("+254")
    ) {

      cleaned =
        cleaned.substring(1);

    }


    return cleaned;

  }


  /* =====================================================
     GENERATE ORDER NUMBER
  ===================================================== */

  function generateOrderNumber() {

    return Math.floor(
      100000 +
      Math.random() *
      900000
    );

  }


  /* =====================================================
     SAVE ORDER
  ===================================================== */

  function saveOrder(
    number,
    payment,
    paymentData = {}
  ) {

    const order = {

      orderNumber:
        number,

      date:
        new Date().toISOString(),

      customer: {

        firstName:
          document.getElementById(
            "firstName"
          ).value.trim(),

        lastName:
          document.getElementById(
            "lastName"
          ).value.trim(),

        email:
          document.getElementById(
            "email"
          ).value.trim(),

        phone:
          document.getElementById(
            "phone"
          ).value.trim(),

        county:
          document.getElementById(
            "county"
          ).value,

        town:
          document.getElementById(
            "town"
          ).value.trim(),

        address:
          document.getElementById(
            "address"
          ).value.trim(),

        deliveryNotes:
          document.getElementById(
            "deliveryNotes"
          ).value.trim()

      },

      payment:
        payment,

      paymentData:
        paymentData,

      items:
        bag,

      subtotal:
        calculateSubtotal(),

      shipping:
        calculateShipping(
          calculateSubtotal()
        ),

      total:
        calculateSubtotal() +
        calculateShipping(
          calculateSubtotal()
        )

    };


    localStorage.setItem(
      "beniCarmelLastOrder",
      JSON.stringify(order)
    );


    return order;

  }


  /* =====================================================
     SHOW SUCCESS
  ===================================================== */

  function showSuccess(
    number
  ) {

    orderNumber.textContent =
      number;


    orderSuccess.classList.add(
      "open"
    );

  }


  /* =====================================================
     PLACE ORDER
  ===================================================== */

  placeOrderButton.addEventListener(
    "click",
    async () => {


      /* ---------------------------------------------
         PREVENT DOUBLE CLICK
      --------------------------------------------- */

      if (
        placeOrderButton.disabled
      ) {

        return;

      }


      /* ---------------------------------------------
         CHECK BAG
      --------------------------------------------- */

      if (
        bag.length === 0
      ) {

        alert(
          "Your bag is empty."
        );

        return;

      }


      /* ---------------------------------------------
         CHECK REQUIRED FIELDS
      --------------------------------------------- */

      const requiredFields =
        document.querySelectorAll(
          "[required]"
        );


      let valid = true;


      requiredFields.forEach(
        field => {

          if (
            !field.value.trim()
          ) {

            field.classList.add(
              "input-error"
            );

            valid = false;

          } else {

            field.classList.remove(
              "input-error"
            );

          }

        }
      );


      if (!valid) {

        alert(
          "Please complete all required information."
        );

        return;

      }


      /* ---------------------------------------------
         PAYMENT METHOD
      --------------------------------------------- */

      const payment =
        document.querySelector(
          'input[name="payment"]:checked'
        ).value;


      /* =============================================
         CASH ON DELIVERY
      ============================================= */

      if (
        payment === "cod"
      ) {

        const number =
          generateOrderNumber();


        saveOrder(
          number,
          "cod"
        );


        localStorage.removeItem(
          "beniCarmelBag"
        );


        showSuccess(
          number
        );


        return;

      }


      /* =============================================
         M-PESA
      ============================================= */

      if (
        payment === "mpesa"
      ) {

        const phone =
          normalizePhone(
            mpesaPhone.value
          );


        if (
          !/^254(7|1)\d{8}$/.test(
            phone
          )
        ) {

          mpesaPhone.classList.add(
            "input-error"
          );


          alert(
            "Please enter a valid Kenyan M-Pesa number."
          );


          mpesaPhone.focus();


          return;

        }


        mpesaPhone.classList.remove(
          "input-error"
        );


        const subtotal =
          calculateSubtotal();


        const shipping =
          calculateShipping(
            subtotal
          );


        const total =
          subtotal +
          shipping;


        const number =
          generateOrderNumber();


        /* ---------------------------------------------
           SHOW LOADING
        --------------------------------------------- */

        placeOrderButton.disabled =
          true;


        placeOrderButton.textContent =
          "SENDING M-PESA REQUEST...";


        try {

          const response =
            await fetch(
              "http://localhost:3000/api/mpesa/stkpush",
              {

                method: "POST",

                headers: {

                  "Content-Type":
                    "application/json"

                },

                body:
                  JSON.stringify({

                    phone:
                      phone,

                    amount:
                      total,

                    orderNumber:
                      number,

                    description:
                      "Beni Carmel Order"

                  })

              }
            );


          const data =
            await response.json();


          if (
            !response.ok ||
            !data.success
          ) {

            throw new Error(
              data.message ||
              "M-Pesa request failed."
            );

          }


          /* -----------------------------------------
             STK PUSH SENT
          ----------------------------------------- */

          placeOrderButton.textContent =
            "CHECK YOUR PHONE";


          alert(
            "M-Pesa request sent. Check your phone and enter your M-Pesa PIN."
          );


          /*
           * IMPORTANT:
           *
           * We don't immediately mark this as
           * paid. Safaricom must confirm payment.
           */


          const paymentConfirmed =
            await waitForPayment(
              data.checkoutRequestID
            );


          if (
            paymentConfirmed
          ) {

            saveOrder(
              number,
              "mpesa",
              {
                checkoutRequestID:
                  data.checkoutRequestID
              }
            );


            localStorage.removeItem(
              "beniCarmelBag"
            );


            showSuccess(
              number
            );


          } else {

            throw new Error(
              "Payment was not completed."
            );

          }


        } catch (error) {

          console.error(
            error
          );


          alert(
            error.message ||
            "M-Pesa payment could not be completed."
          );


          placeOrderButton.disabled =
            false;


          placeOrderButton.textContent =
            "PLACE ORDER";

        }

      }

    }
  );


  /* =====================================================
     WAIT FOR PAYMENT
  ===================================================== */

  async function waitForPayment(
    checkoutRequestID
  ) {

    /*
     * The simple version below waits for the
     * backend to expose payment status.
     *
     * We'll add the status endpoint next.
     */


    for (
      let attempt = 0;
      attempt < 30;
      attempt++
    ) {

      try {

        const response =
          await fetch(
            `http://localhost:3000/api/mpesa/status/${encodeURIComponent(
              checkoutRequestID
            )}`
          );


        if (
          response.ok
        ) {

          const data =
            await response.json();


          if (
            data.status ===
            "success"
          ) {

            return true;

          }


          if (
            data.status ===
            "failed"
          ) {

            return false;

          }

        }

      } catch (error) {

        console.error(
          "Payment status error:",
          error
        );

      }


      await new Promise(
        resolve =>
          setTimeout(
            resolve,
            2000
          )
      );

    }


    return false;

  }


  /* =====================================================
     INITIALIZE
  ===================================================== */

  renderOrder();

});
