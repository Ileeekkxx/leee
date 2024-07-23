// Replace with your own Stripe public key
const stripe = Stripe('your-public-key-here');

const checkoutButton = document.getElementById('checkout-button');

checkoutButton.addEventListener('click', () => {
    fetch('/create-checkout-session', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(session => {
        return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(result => {
        if (result.error) {
            alert(result.error.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
