
// lehet választani h növekvő vagy csökkenőbe legyen illetve //
// select szerint kilistázza a dolgokat és kiírja a nevét + amit választottunk//


function rendezd() {
    var miszerint = document.querySelector('#miszerint').value;
    var select = document.querySelector('#select').value;


    for (var i = 0; i < starwars.length - 1; i++) {
        for (var j = i + 1; j < starwars.length; j++) {
            if (miszerint === 'Csökkenő') {
                if (starwars[i][select] < starwars[j][select]) {
                    var temp = [starwars[i], starwars[j]];
                    starwars[i] = temp[1];
                    starwars[j] = temp[0];
                }
            } else
                if (miszerint === 'Növekvő') {
                    if (starwars[i][select] > starwars[j][select]) {
                        var temp = [starwars[i], starwars[j]];
                        starwars[i] = temp[1];
                        starwars[j] = temp[0];
                    }

                }
        }

    }
    var kiiratas = "";

    for (var k = 0; k < starwars.length; k++) {
        for (var h in starwars[k]) {
            if (h === select) {
                console.log(starwars[k][h]);
                kiiratas = starwars[k].name + ":   " + starwars[k][select] + "<br>";

                // div amibe tesszük // 
                document.querySelector('#randomdiv').innerHTML += kiiratas;
            }
        }




    };

};