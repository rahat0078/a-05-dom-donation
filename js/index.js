/* common function for add donation */
function getValueById(inputId) {
    return parseFloat(document.getElementById(inputId).value);
}
function getInnerTextById(elementId) {
    return parseFloat(document.getElementById(elementId).innerText);
}

function addDonation(clickBtn, inputDonation, totalDonationId, donationAreaNameId) {
    document.getElementById(clickBtn)
        .addEventListener('click', function () {
            const inputDonationAmount = getValueById(inputDonation)
            const totalDonationAmount = getInnerTextById(totalDonationId)
            const mainBalanceAmount = getInnerTextById("main-balance")
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
            document.getElementById("main-balance").innerText = mainBalance.toFixed(2);


            /** for history secion */
            const donationAreaName = document.getElementById(donationAreaNameId).innerText
            const historyItem = document.createElement("div");
            const historyContainer = document.getElementById("history-container")
            historyItem.classList.add("border", "p-8", "rounded-2xl");

            historyItem.innerHTML = `
                <h2 class="font-bold text-xl">${inputDonationAmount} Taka is Donated for ${donationAreaName}</h2>
                <p class="text-gray-500">${new Date().toLocaleDateString()}</p>
            `

            document.getElementById("history-container").insertBefore(historyItem, historyContainer.firstChild)
        })
}

/** Noakhali section * */
addDonation("btn-donate-1", "donation-noakhali", "total-donation-noakhali", "area-noakhali")

/**feni section */

addDonation("btn-donate-2", "donation-feni", "total-donation-feni", "area-feni")

/**quota movement section  */

addDonation("btn-donate-3", "donation-quota", "total-donation-qouta", "area-quota")


/* toggle history-tab */
const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')

historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-primary_btn');
    donationTab.classList.remove('bg-primary_btn');
    document.getElementById("history-container").classList.remove('hidden')
    document.getElementById("donation-main").classList.add('hidden')
})



/* toggle donation tab */
donationTab.addEventListener('click', function () {
    donationTab.classList.add('bg-primary_btn')
    historyTab.classList.remove('bg-primary_btn')
    document.getElementById("history-container").classList.add('hidden')
    document.getElementById("donation-main").classList.remove('hidden')
})