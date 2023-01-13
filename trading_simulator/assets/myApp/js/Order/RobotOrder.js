var timerID = setInterval(function() {

    const coinPossibilities = ["Tail", "Head", "Tail", "Head", "Tail"]; // You know Robot mystery, so ssh... :)

    let random = Math.floor(Math.random() * coinPossibilities.length);

    var paragraph = document.getElementById("RobotOrder");
    if(coinPossibilities[random]=='Head'){
        paragraph.textContent = "I flip a coin and it's {<b>Head</b>,So I think if we don't have an open position right now, we should <b>buy</b> and if we have a buy position before, we should keep it."
    }else{
        paragraph.textContent = "I flip a coin and it's <b>Tail</b>, So I think if we have an open position right now, we should <b>sell</b> it and if we don't have any open position, we should wait for the next candle.";
    }

    let date = new Date()
    let stringDate = date.toUTCString()
     
    
    let order = {'time': stringDate,
                'order': coinPossibilities[random],
                'timestamp': parseInt(date.getTime()/1000)-parseInt(date.getTime()/1000)%60}
    
    console.log(order)
    
    
    
    
    
    console.log('___________________')

}, 60 * 1000);