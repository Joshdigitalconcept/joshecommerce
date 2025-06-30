const form  = document.getElementById("order-form")

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
        
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const pnum = document.getElementById("pnum").value;
    const prodl = document.getElementById("prod").value;
    alert(`Thank you ${fname} for your order of ${prodl}. We will contact you at ${email} or ${pnum} if we have any questions about your order.`);

    form.reset(); // Reset the form fields after submission
});

