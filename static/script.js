document.addEventListener('DOMContentLoaded', () => {
    // Initialize elements
    const convertBtn = document.getElementById('convertBtn');
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const resultContainer = document.getElementById('resultContainer');
    const convertedAmount = document.getElementById('convertedAmount');
    const exchangeRate = document.getElementById('exchangeRate');
    const historyDate = document.getElementById('historyDate');
    const historyBtn = document.getElementById('historyBtn');
    const rateTable = document.getElementById('rateTable');

    let currencyChart = null;

    // Fetch latest rates on load
    fetchLatestRates();
    fetchHistoricalData();

    // Convert button event
    convertBtn.addEventListener('click', () => {
        convertCurrency();
    });

    // Swap currencies feature
    document.getElementById('swapBtn').addEventListener('click', () => {
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        convertCurrency();
    });

    // History button event
    historyBtn.addEventListener('click', () => {
        if (historyDate.value) {
            fetchHistoricalData(historyDate.value);
        }
    });

    // Main conversion function
    async function convertCurrency() {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (!amount || isNaN(amount)) {
            alert("Please enter a valid amount");
            return;
        }

        try {
            const response = await fetch(`/convert?from=${from}&to=${to}&amount=${amount}`);
            const data = await response.json();

            if (data.success) {
                convertedAmount.textContent = data.result.toFixed(2);
                exchangeRate.textContent = `1 ${from} = ${data.rate.toFixed(6)} ${to}`;
                resultContainer.classList.remove('hidden');
            } else {
                alert(data.message || "Conversion failed");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to fetch conversion data");
        }
    }

    // Fetch live exchange rates
    async function fetchLatestRates() {
        try {
            const response = await fetch('/latest');
            const data = await response.json();

            if (data.success) {
                updateRateTable(data.rates);
            }
        } catch (error) {
            console.error("Error fetching rates:", error);
        }
    }

    // Update rates table
    function updateRateTable(rates) {
        const currencies = [
            { code: 'EUR', emoji: '🇪🇺', name: 'Euro' },
            { code: 'GBP', emoji: '🇬🇧', name: 'British Pound' },
            { code: 'JPY', emoji: '🇯🇵', name: 'Japanese Yen' },
            { code: 'AUD', emoji: '🇦🇺', name: 'Australian Dollar' },
            { code: 'CAD', emoji: '🇨🇦', name: 'Canadian Dollar' }
        ];

        let tableHTML = '';
        
        currencies.forEach(currency => {
            const rate = rates[currency.code];
            const change = (Math.random() * 2 - 1).toFixed(2); // Simulated change
            const changeClass = change >= 0 ? 'text-green-500' : 'text-red-500';
            const changeSymbol = change >= 0 ? '+' : '';

            tableHTML += `
                <tr class="border-b border-gray-100 hover:bg-gray-50">
                    <td class="py-3 px-4">${currency.emoji} ${currency.name}</td>
                    <td class="py-3 px-4">${(1/rates.USD * rate).toFixed(6)}</td>
                    <td class="py-3 px-4 ${changeClass}">${changeSymbol}${change}%</td>
                </tr>
            `;
        });

        rateTable.innerHTML = tableHTML;
    }

    // Historical data and chart
    async function fetchHistoricalData(date = 'latest') {
        try {
            const response = await fetch(`/historical?date=${date}`);
            const data = await response.json();

            if (data.success && data.rates) {
                updateChart(data.rates, date);
            }
        } catch (error) {
            console.error("Error fetching historical data:", error);
        }
    }

    // Update Chart.js graph
    function updateChart(rates, date) {
        const baseCurrency = fromCurrency.value;
        const targetCurrency = toCurrency.value;
        const days = 30;
        
        // Sample data for demo (real app would use API)
        const labels = Array.from({ length: days }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - (days - i - 1));
            return d.toLocaleDateString();
        });

        const values = Array.from({ length: days }, () => {
            const baseRate = parseFloat(rates[baseCurrency]);
            const targetRate = parseFloat(rates[targetCurrency]);
            return (targetRate / baseRate) * (0.95 + Math.random() * 0.1);
        });

        if (currencyChart) {
            currencyChart.destroy();
        }

        const ctx = document.getElementById('currencyChart').getContext('2d');
        currencyChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `${baseCurrency} to ${targetCurrency}`,
                    data: values,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 2,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `Exchange Rate (${date})`
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }
});
