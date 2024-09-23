/* common function for add donation */
function addDonation(clickBtn, inputDonation, totalDonationId, mainBalanceId) {
    document.getElementById(clickBtn)
        .addEventListener('click', function(){
            const inputDonationAmount = getValueById(inputDonation)
            const totalDonationAmount = getInnerTextById(totalDonationId)
            const mainBalanceAmount = getInnerTextById(mainBalanceId)
            if(inputDonationAmount > mainBalanceAmount){
                alert('insufficient balance')
                return
            }
            if (isNaN(inputDonationAmount) || inputDonationAmount<= 0) {
                alert('Invalid Input')
                return
            }
            const totalDonation = totalDonationAmount + inputDonationAmount;
            const mainBalance = mainBalanceAmount - inputDonationAmount;

           document.getElementById(totalDonationId).innerText = totalDonation.toFixed(2);
           document.getElementById(mainBalanceId).innerText = mainBalance.toFixed(2);
        })
}

/** Noakhali section * */
addDonation("btn-donate-1", "donation-noakhali", "total-donation-noakhali", "main-balance")

/**feni section */

addDonation("btn-donate-2", "donation-feni", "total-donation-feni", "main-balance")

/**quota movement section  */

addDonation("btn-donate-3", "donation-quota", "total-donation-qouta", "main-balance")


// document.getElementById("btn-donate").addEventListener('click', function () {
//     const donationAmount = parseFloat(document.getElementById('donation-amount').value);
//     const mainBalance = parseFloat(document.getElementById('main-balance').innerText);
//     if (isNaN(donationAmount) || donationAmount <= 0) {
//         alert('Invalid Input')
//         return
//     }
//     if (donationAmount > mainBalance) {
//         alert('Insufficient Balance')
//         return
//     }
//     const totalDonationEl = parseFloat(document.getElementById('total-donation').innerText)

//     const totalDonation = totalDonationEl + donationAmount;

//     document.getElementById('total-donation').innerText = totalDonation


//     const currentBalance = mainBalance - donationAmount;
//     document.getElementById('main-balance').innerText = currentBalance
// })