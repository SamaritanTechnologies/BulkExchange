var xValues = ["Activate"];
var yValues = [13];
var barColors = [
    "#3cd2a5"
];

new Chart("charging_stations", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});



// Stations

var xValues = ["Activate", "Deactivate"];
var yValues = [11, 2];
var barColors = ["#3cd2a5", "#273136"];

new Chart("stations", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        }
    }
});



// Charging Stations By Days

var xValues = ["2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1"];
var yValues = [50, 75, 60, 45, 80];

new Chart("chargingStationDay", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Day Data",
            borderColor: "#52B155", // Line color
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Fill color
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Day Data Line Chart"
        }
        ,
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// Customers By Days

var xValues = ["2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1"];
var yValues = [50, 75, 60, 45, 80];

new Chart("CustomersByDays", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Day Data",
            borderColor: "#52B155", // Line color
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Fill color
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Day Data Line Chart"
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});



// Money By Month

var xValues = ["2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1"];
var yValues = [50, 75, 60, 45, 80];

new Chart("moneyByMonth", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Day Data",
            borderColor: "#52B155", // Line color
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Fill color
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Day Data Line Chart"
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// Recharges By Month

var xValues = ["2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1", "2024-1-1"];
var yValues = [50, 75, 60, 45, 80];

new Chart("rechargesByMonth", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Day Data",
            borderColor: "#52B155", // Line color
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Fill color
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Day Data Line Chart"
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// Money By Week

var xValues = ["Saturday", "Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday"];
var yValues = [0, 2000, 3000, 1000, 80, 5000, 35000];

new Chart("moneyByWeek", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Day Data",
            borderColor: "#52B155", // Line color
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Fill color
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Day Data Line Chart"
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});


// Recharge By Week

var xValues = ["Saturday", "Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday"];
var yValues = [0, 2000, 3000, 1000, 80, 5000, 35000];

new Chart("rechargesByWeek", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            label: "Day Data",
            borderColor: "#52B155", // Line color
            backgroundColor: "rgba(52, 152, 219, 0.2)", // Fill color
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Day Data Line Chart"
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// Analysis Bar Chart editAnalysisChartModal
function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    
    sidebar.classList.toggle("app-sidebar-collapsed");
    content.classList.toggle("app-sidebar-collapsed");
}