var chart = LightweightCharts.createChart(document.getElementById("chart_id"), {
	width: $("#chart_id").width(),  //865,
	height: 450,  //500,
	leftPriceScale: {
		scaleMargins: {
			top: 0.2,
			bottom: 0.2,
		},
		visible: false,
		borderVisible: false,
		borderColor: '#000000',
	},
	rightPriceScale: {
		visible: true,
		borderVisible: true,
		borderColor: '#000000',
	},
	layout: {
		backgroundColor: '#ffffff',
		textColor: '#000000',
	},
	grid: {
		vertLines: {
			color: '#000000',
		},
		horzLines: {
			color: '#000000',
		},
	},

	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},

	timeScale: {
		borderColor: '#000000',
	},
	grid: {
		vertLines: {
			visible: false,
		},
		horzLines: {
			visible: false,
		},
	},
	localization: {
		dateFormat: 'yyyy/MM/dd',
	},
	priceScale: {
		mode: LightweightCharts.PriceScaleMode.Logarithmic, //logarithm mode
		autoScale: true,
	},
});

// Candle Chart
var candleSeries = chart.addCandlestickSeries({
    upColor: '#53b987',
    downColor: '#eb4d5c',
    borderDownColor: '#eb4d5c',
    borderUpColor: '#53b987',
    wickDownColor: '#eb4d5c',
    wickUpColor: '#53b987',
});

// Add volume
var volumeSeries = chart.addHistogramSeries({
	color: '#26a69a',
	priceFormat: {
		type: 'volume',
	},
	priceScaleId: '',
	scaleMargins: {
		top: 0.8,
		bottom: 0,
	},
	lastValueVisible: false,
	priceLineVisible: false,
	visible:true
});

// resize
$(document).ready(function () {
	chart.applyOptions({ width: $('#candlestickchart').width(), })
});
$(window).resize(function () {
	chart.applyOptions({ width: $('#candlestickchart').width(), })
});

// Fullscreen Chart 
$('#candlestickchart').on('dblclick', function(){
    // if already full screen; exit
    // else go fullscreen
    if (
        document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement
    ) {
        if (document.exitFullscreen) {
        document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
        }
        chart.applyOptions({ width: 500, height: 600 });
    } else {
        element = $('#candlestickchart').get(0);
        if (element.requestFullscreen) {
        element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
        }
        chart.applyOptions({ width: screen.width, height:screen.height-20 });
    }
});
  
document.addEventListener('fullscreenchange', exitHandler);
document.addEventListener('webkitfullscreenchange', exitHandler);
document.addEventListener('mozfullscreenchange', exitHandler);
document.addEventListener('MSFullscreenChange', exitHandler);
  
function exitHandler() {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
    chart.applyOptions({ width: $("#candlestickchart").width(), height: 500 });

    }
} 