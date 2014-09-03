/*`setTimeout` returns a timer handle, which you can use to stop the timeout with `clearTimeout`.

So for instance:*/

function setBgPosition() {
    var c = 0,
    timer = 0;
    var numbers = [0, -120, -240, -360, -480, -600, -720];
    function run() {
        Ext.get('common-spinner').setStyle('background-position', numbers[c++] + 'px 0px');
        if (c >= numbers.length) {
            c = 0;
        }
        timer = setTimeout(run, 200);
    }
    timer = setTimeout(run, 200);

    return stop;

    function stop() {
        if (timer) {
            clearTimeout(timer);
            timer = 0;
        }
    }

    //So you'd use that as:

    var stop = setBgPosition();
    // ...later, when you're ready to stop...
    stop();

    /*Note that rather than having `setBgPosition` call itself again, I've just had it set `c` back to `0`. Otherwise, this wouldn't work. Also note that I've used `0` as a handle value for when the timeout isn't pending; `0` isn't a valid return value from `setTimeout` so it makes a handy flag.

This is also one of the (few) places I think you'd be better off with `setInterval` rather than `setTimeout`. `setInterval` repeats. So:*/

    function setBgPosition() {
        var c = 0;
        var numbers = [0, -120, -240, -360, -480, -600, -720];
        function run() {
            Ext.get('common-spinner').setStyle('background-position', numbers[c++] + 'px 0px');
            if (c >= numbers.length) {
                c = 0;
            }
        }
        return setInterval(run, 200);
    }

    //Used like this:

    var timer = setBgPosition();
    // ...later, when you're ready to stop...
    clearInterval(timer);

/*All of the above notwithstanding, I'd want to find a way to make `setBgPosition` stop things *itself*, by detecting that some completion condition has been satisfied.*/
}