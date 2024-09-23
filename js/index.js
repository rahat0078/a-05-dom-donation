/* common function for add donation */
function addDonation(clickBtn, inputDonation, totalDonationId, mainBalanceId) {
    document.getElementById(clickBtn)
        .addEventListener('click', function () {
            const inputDonationAmount = getValueById(inputDonation)
            const totalDonationAmount = getInnerTextById(totalDonationId)
            const mainBalanceAmount = getInnerTextById(mainBalanceId)
            if (inputDonationAmount > mainBalanceAmount) {
                alert('insufficient balance')
                return
            }
            if (isNaN(inputDonationAmount) || inputDonationAmount <= 0) {
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


/* toggle history-tab */
const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')

historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-primary_btn');
    donationTab.classList.remove('bg-primary_btn')
    document.getElementById('history').classList.remove('hidden')
    document.getElementById('donation-main').classList.add('hidden')
})



/* toggle donation tab */
donationTab.addEventListener('click', function () {
    donationTab.classList.add('bg-primary_btn')
    historyTab.classList.remove('bg-primary_btn')
    document.getElementById('history').classList.add('hidden')
    document.getElementById('donation-main').classList.remove('hidden')
})