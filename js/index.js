

document.getElementById("btn-donate").addEventListener('click', function () {
    const donationAmount = parseFloat(document.getElementById('donation-amount').value);
    const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Invalid Input')
        return
    }
    if(donationAmount> mainBalance){
        alert('Insufficient Balance')
        return
    }
    const totalDonationEl = parseFloat(document.getElementById('total-donation').innerText)

    const totalDonation = totalDonationEl + donationAmount;
    
    document.getElementById('total-donation').innerText = totalDonation
    
    
    const currentBalance = mainBalance - donationAmount;
    document.getElementById('main-balance').innerText = currentBalance
})