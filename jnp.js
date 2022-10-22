
// Para sa nag babago Picture pag na seseslect
        var selected = document.getElementById('yoption');
        picChange();


        function picChange(){

            if (selected.value == "Bato") {
                console.log("1-Bato");
                document.getElementById('ypic').src = "https://i.postimg.cc/jjzsxgqr/Rock.png";
                document.getElementById('yvalue').innerHTML = "Bato";
            }
            if (selected.value == "Papel") {
                console.log("2-Papel");
                document.getElementById('ypic').src = "https://i.postimg.cc/bJpqsxdS/Paper.png";
                document.getElementById('yvalue').innerHTML = "Papel"; 
            }
            if (selected.value == "Gunting") {
                console.log("3-Gunting");
                document.getElementById('ypic').src = "https://i.postimg.cc/W38TrdJW/Scissor.png";
                document.getElementById('yvalue').innerHTML = "Gunting"; 
            }
        };






        function gameFunction(){
            
            //yop 1 for Rock
            //yop 2 for Paper
            //yop 3 for Scissor


            var yop = 0;

            if (document.getElementById('yoption').value == "Bato") {
                yop = 1;   
            }

            if (document.getElementById('yoption').value == "Papel") {
                yop = 2;    
            }

            if (document.getElementById('yoption').value == "Gunting") {
                yop = 3;    
            };






            

            //  Generating Number and Picture changing para sa bot na hindi ko matalo

            var cop = Math.floor(Math.random()*3) + 1;

            
            if (cop == 1) {
                document.getElementById('cvalue').innerHTML = "Bato";
                document.getElementById('cpic').src = "https://i.postimg.cc/jjzsxgqr/Rock.png";
                document.getElementById('cpic').style.transform = "scaleX(-1)";  
            }

            if (cop == 2) {
                document.getElementById('cvalue').innerHTML = "Papel"; 
                document.getElementById('cpic').src = "https://i.postimg.cc/bJpqsxdS/Paper.png";  
                document.getElementById('cpic').style.transform = "scaleX(-1)";  
            }

            if (cop == 3) {
                document.getElementById('cvalue').innerHTML = "Gunting"; 
                document.getElementById('cpic').src = "https://i.postimg.cc/W38TrdJW/Scissor.png";  
                document.getElementById('cpic').style.transform = "scaleX(-1)";  
            };

            







            // game na paladesyisyon


                var wcount = document.getElementById('wcount');
                var lcount = document.getElementById('lcount');



            if (cop == 1 && yop == 2) {
                wcount.innerHTML++;
                document.getElementById('wbox').style.display = "block";
                wmresFunction();
            } else
            if (cop == 2 && yop == 3) {
                wcount.innerHTML++;
                document.getElementById('wbox').style.display = "block";
                wmresFunction();
            } else
            if (cop == 3 && yop == 1) {
                wcount.innerHTML++;
                document.getElementById('wbox').style.display = "block";
                wmresFunction();
            } else
            if (cop == yop) {
                document.getElementById('dbox').style.display = "block";
                dmresFunction();
                return false;
            } else {
                lcount.innerHTML++;
                document.getElementById('lbox').style.display = "block";
                lmresFunction();
            }

            console.log(wcount);
            console.log(lcount);






            //result para makita score


            if (wcount.innerHTML == 4 && lcount.innerHTML < 4) {
                
                document.getElementById('win').style.display = "block";
                document.getElementById('plybtn').style.pointerEvents = "none";
            } else
            if (lcount.innerHTML == 4 && wcount.innerHTML < 4) {
                document.getElementById('lose').style.display = "block";
                document.getElementById('plybtn').style.pointerEvents = "none";
            } else
            if (lcount.innerHTML == 3 && wcount.innerHTML == 3) {
                document.getElementById('draw').style.display = "block";
                document.getElementById('plybtn').style.pointerEvents = "none";
            }






            document.getElementById('llcount').innerHTML = lcount.innerHTML;
            document.getElementById('wwcount').innerHTML = wcount.innerHTML;

            document.getElementById('lllcount').innerHTML = lcount.innerHTML;
            document.getElementById('wwwcount').innerHTML = wcount.innerHTML;

            document.getElementById('llllcount').innerHTML = lcount.innerHTML;
            document.getElementById('wwwwcount').innerHTML = wcount.innerHTML;





            function wmresFunction(){
                setTimeout(() => {
                    const wbox = document.getElementById('wbox');
                    wbox.style.display = 'none';
    
                    }, 1500);
                }


                function lmresFunction(){
                setTimeout(() => {
                    const lbox = document.getElementById('lbox');
                    lbox.style.display = 'none';
    
                    }, 1500);
                }

            function dmresFunction(){
                setTimeout(() => {
                    const dbox = document.getElementById('dbox');
                    dbox.style.display = 'none';
    
                    }, 1500);
                }



        };


        


        



        // Refreshing web page to default

        function reFresh(){
            window.location.reload();
        };





