var correctClick = 0, timeout = 2000, levelSpan = 5, quotient = 0, timer = '', clickCorrect = true, missedClick = 0;
var fileVrsn = Math.random()+"_"+Math.random();
function init(){ 
    startGame();
    $("#gameWindow").live("pageshow", function() {
        window.location='./main.html?v='+fileVrsn;
    })
    
    $("#endPage").live("pageshow", function() { 
        $('#finalScore').text(correctClick);
        $('#lnkReplay').click(function(){
            $.mobile.changePage("main.html?v="+fileVrsn,{ 
                reverse:true
            });
        })
    })
}

function startGame(){
    $('#divContainer').append("<a href='#' id='lnkFly' data-role='button' class='ui-btn ui-btn-icon-notext ui-icon-star ui-btn-icon-bgGreen' style='margin:100px 0 0 50%; border:none;'></a>");
    $("#lnkFly").click(function(){
        correctClick++;
        clickCorrect = true;
        $('#score').text(correctClick);
        quotient = correctClick%5;
        if(!quotient){
            timeout = timeout - 100;
        }
        clearTimeout(timer);
        changeIt();
    })
    changePosition();
}

function changePosition(){
    timer = setTimeout(changeIt, timeout);
}

function changeIt(){       
    if(!clickCorrect){
        missedClick++;
        $('#missed').text(missedClick);
    }
    if(missedClick >= 20){
        clearTimeout(timer);
        $("#lnkFly").remove();
        // Redirect to login page
        $.mobile.changePage("end.html?v="+fileVrsn,{ 
            reverse:false
        });
    //$('#divContainer').html('<div style="text-align:center; margin-top:10%">Game over<br/>Score: '+correctClick+'</div>');        
    }
    else{
        var marginRight = parseInt(Math.random()*100);
        var windowHeight = eval(parseInt($('#gameWindow').css('min-height')) - 50);
        var marginTop = randomIntFromInterval(0, windowHeight);
        $("#lnkFly").css({
            'margin-top': marginTop+'px',
            'margin-left':marginRight+'%'
        })  
        clickCorrect = false;
        changePosition();
    }
}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}