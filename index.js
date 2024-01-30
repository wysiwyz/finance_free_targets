
console.log("嚴防言乍馬扁，守護貝才富。");

// applicable stockId in Phase 1
var stockIds = [ '00878', '0056', '00713', '00935', '878', '56', '713', '935'];

var targetDividend = document.getElementById('targetDividend');
var convertedInterest = document.getElementById('convertedInterest');

var shareRequired = document.getElementById('shareRequired');
var customDividend = document.getElementById('customDividend');
var customShareRequired = document.getElementById('customShareRequired');

class StockItem {
    _stockId
    _stockPrice
    _stockName
    _interestFrequency
    _latestDividend

    constructor(stockId, stockPrice, stockName, interestFrequency, latestDividend) {
        this._stockId = stockId
        this._stockPrice = stockPrice
        this._stockName = stockName
        this._interestFrequency = interestFrequency
        this._latestDividend = latestDividend
    }

    toString() {
        return `stockId=${this._stockId}, 
                stockPrice=${this._stockPrice}, 
                stockName=${this._stockName},
                interestFrequency=${this._interestFrequency},
                latestDividend=${this._latestDividend}`
    }
}

// TODO 最新配息與股價導入的函式
var CATH_MSCI_TW_ESG_878 = new StockItem('00878', 21.70, '國泰永續高股息', '季配息', 0.35);
var YUAN_P_SHARES_TW_56 = new StockItem('0056', 36.36, '元大高股息', '季配息', 0.35);
var YUAN_TW_HI_DIV_LOW_VOL_713 = new StockItem('00713', 21.70, '元大高息低波', '季配息', 0.35);
var NOMURA_TW_INNO_TECH_935 = new StockItem('00935', 21.70, '野村臺灣新科技50', '半年配', 0);

function handleIdOnblur() {
    var input = document.getElementById('stockId').value;
    if (stockIds.includes(input)) {
        if (input.length < 4) {
            input = '00' + input;
            document.getElementById('stockId').value = input;
        }
        displayDetails(input);
    } else {
        clearFields();
    }
}

function handleTargetDividendOnblur() {
    var input = document.getElementById('targetDividend').value;
    alert(input);
    // TODO convertedInterest, shareRequired, customShareRequired
}

function handleCustomDividendOnblur() {
    // TODO
    console.log('自行輸入最近一期的現金股利')
}

/** show stock details with given stockId */
function displayDetails(stockId) {
    switch (stockId) {
        case '00878':
            renderView(CATH_MSCI_TW_ESG_878);
            break;
        case '00713':
            renderView(YUAN_TW_HI_DIV_LOW_VOL_713);
            break;    
        case '0056':
            renderView(YUAN_P_SHARES_TW_56);
            break;  
        case '00935':
            renderView(NOMURA_TW_INNO_TECH_935);
            break;  
        default:
            clearFields();
        }
}

function renderView (stockItem) {
    var stockPrice = document.getElementById('stockPrice');
    var stockName = document.getElementById('stockName');
    var interestFrequency = document.getElementById('interestFrequency');
    var latestDividend = document.getElementById('latestDividend');

    stockName.innerHTML = stockItem._stockName;
    stockPrice.innerHTML = stockItem._stockPrice;
    interestFrequency.innerHTML = stockItem._interestFrequency;
    latestDividend.innerHTML = stockItem._latestDividend;
}

/** clear stock details */
function clearFields() {
    debugger;
    // alert("sorry, it's not my business due to query id out of scope.")
    var stockPrice = document.getElementById('stockPrice');
    var stockName = document.getElementById('stockName');
    var interestFrequency = document.getElementById('interestFrequency');
    var latestDividend = document.getElementById('latestDividend');
    document.getElementById('stockId').value = '';
    stockPrice.innerHTML = '';
    stockName.innerHTML = '';
    interestFrequency.innerHTML = '';
    latestDividend.innerHTML = '';
}
