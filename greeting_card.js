document.querySelector('.greetingCard').addEventListener('mouseover', function () {
    // Define a unique identifier for the newParent
    const uniqueID = 'masar_eid_link';

    // Check if the newParent already exists
    if (!document.getElementById(uniqueID)) {
        // Select the existing element
        const existingElement = document.querySelector('.imginside');

        // Continue only if existingElement is found
        if (existingElement) {
            // Create the new parent element
            const newParent = document.createElement('a');

            // Optionally, add some attributes or styles to the new parent
            newParent.href = 'https://masar-roulette.vercel.app'; // Ensure the protocol is included for absolute URLs
            newParent.id = uniqueID; // Set the unique ID
            newParent.target = "_blank";

            // Insert the new parent into the DOM right before the existing element
            existingElement.parentNode.insertBefore(newParent, existingElement);

            // Move the existing element into the new parent
            newParent.appendChild(existingElement);

            // Set confetti parameters
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            let confetti_audio = new Audio("audio/ConfettiPartyPopper.mp3");
            
            confetti_audio.play();

        }
    }
});

document.querySelector('.greetingCard').addEventListener('mouseout', function () {
    const uniqueParent = document.getElementById('masar_eid_link');

    if (uniqueParent) {
        const imginside = uniqueParent.querySelector('.imginside');
        if (imginside) {
            // Move 'imginside' back to its original location in the DOM
            uniqueParent.parentNode.insertBefore(imginside, uniqueParent);
            // Remove the 'uniqueParent' element
            uniqueParent.remove();
        }
    }
});

// Optional: remove "hover" state if user taps elsewhere on the page
document.addEventListener('click', function (event) {
    if (!event.target.classList.contains('greetingCard')) {

        const uniqueParent = document.getElementById('masar_eid_link');

        if (uniqueParent) {
            const imginside = uniqueParent.querySelector('.imginside');
            if (imginside) {
                // Move 'imginside' back to its original location in the DOM
                uniqueParent.parentNode.insertBefore(imginside, uniqueParent);
                // Remove the 'uniqueParent' element
                uniqueParent.remove();
            }
        }

    }
});
