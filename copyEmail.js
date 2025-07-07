// copyEmail Function

function copyEmail(event) {
    event.preventDefault();
    const email = document.getElementById("email").textContent;
    const link = event.currentTarget;
    const tooltip = link.querySelector(".tooltip-text");
    
    navigator.clipboard.writeText(email).then(() => {
        tooltip.textContent = "Copied";
        link.classList.add("copied");
    
        setTimeout(() => {
        tooltip.textContent = "Click to copy";
        link.classList.remove("copied");
        }, 1500);
    }).catch(err => {
        console.error("Failed to copy email:", err);
    });
}

