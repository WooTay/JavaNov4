<!DOCTYPE html>
<html>
        <head>
                <title>Seasonal</title>
                <link rel="stylesheet" media="screen" href="JavaNov4.css">
                <script src="http://code.jquery.com/jquery-latest.js"></script>
                <script>
                	$(document).ready(function(){
                                $("#apples").click(function(){
                                $("#apples").toggleClass("appleRed");
                                console.log("clicked");
								});
								
								$("#avocado").click(function(){
                                $("#avocado").toggleClass("avocadoGreen");
                                console.log("clicked");
								});
								
								$("#asparagus").click(function(){
                                $("#asparagus").toggleClass("asparagusGreen");
                                console.log("clicked");
								});
								
								$("#blackberries").click(function(){
                                $("#blackberries").toggleClass("blackberriesBlack");
                                console.log("clicked");
								});
								
								$("#blueberries").click(function(){
                                $("#blueberries").toggleClass("blueberriesBlue");
                                console.log("clicked");
								});
								
								$("#brusselSprouts").click(function(){
                                $("#brusselSprouts").toggleClass("brusselSproutsGreen");
                                console.log("clicked");
								});
								
								$("#cherries").click(function(){
                                $("#cherries").toggleClass("cherriesRed");
                                console.log("clicked");
								});
								
								$("#cucumber").click(function(){
                                $("#cucumber").toggleClass("cucumberGreen");
                                console.log("clicked");
								});
								
								$("#eggplant").click(function(){
                                $("#eggplant").toggleClass("eggplantPurple");
                                console.log("clicked");
								});
								
								$("#oranges").click(function(){
                                $("#oranges").toggleClass("orangeOrange");
                                console.log("clicked");
								});
								
								$("#peas").click(function(){
                                $("#peas").toggleClass("peasGreen");
                                console.log("clicked");
								});
								
								$("#redCabbage").click(function(){
                                $("#redCabbage").toggleClass("redCabbageRed");
                                console.log("clicked");
								});
								
								$("#rhubarb").click(function(){
                                $("#rhubarb").toggleClass("rhubarbRed");
                                console.log("clicked");
								});
								
								$("#spinach").click(function(){
                                $("#spinach").toggleClass("spinachGreen");
                                console.log("clicked");
								});
								
								$("#squash").click(function(){
                                $("#squash").toggleClass("squashYellow");
                                console.log("clicked");
								});
								
								$("#sweetPotatoes").click(function(){
                                $("#sweetPotatoes").toggleClass("sweetPotatoesOrange");
                                console.log("clicked");
								});
								
								$("#turnips").click(function(){
                                $("#turnips").toggleClass("turnipsYellow");
                                console.log("clicked");
								});
								
								$("#fall").click(function(){
                                $("#apples").toggleClass("appleRed");
                                $("#blackberries").toggleClass("blackberriesBlack");
                                $("#redCabbage").toggleClass("redCabbageRed");
                                $("#squash").toggleClass("squashYellow");
                                $("#eggplant").toggleClass("eggplantPurple");
                                console.log("clicked");
								});
								
								$("#winter").click(function(){
								$("#brusselSprouts").toggleClass("brusselSproutsGreen");
								$("#oranges").toggleClass("orangeOrange");
								$("#sweetPotatoes").toggleClass("sweetPotatoesOrange");
								$("#turnips").toggleClass("turnipsYellow");
								});
								
								$("#spring").click(function(){
								$("#avocado").toggleClass("avocadoGreen");
								$("#cucumber").toggleClass("cucumberGreen");
								$("#rhubarb").toggleClass("rhubarbRed");
								$("#spinach").toggleClass("spinachGreen");
								});
								
								$("#summer").click(function(){
								$("#asparagus").toggleClass("asparagusGreen");
								$("#blueberries").toggleClass("blueberriesBlue");
								$("#cherries").toggleClass("cherriesRed");
								$("#peas").toggleClass("peasGreen");
								});
                            });   
                  
                </script>
                
            
        </head>
        <body>
        <h1>SEASONAL FRUITS & VEGGIES!</h1>
        <h4>(click on the the fruits & veggies list or season to see availability)</h4>
        <div id="fall">FALL</div>
        <div id="winter">WINTER</div>
        <div id="spring">SPRING</div>
        <div id="summer">SUMMER</div>
      	<br><br>
       
                <div id="apples">APPLES</div>
                <div id="avocado">AVOCADO</div>
                <div id="asparagus">ASPARAGUS</div>
                <div id="blackberries">BLACKBERRIES</div>
                <div id="blueberries">BLUEBERRIES</div>
                <div id="brusselSprouts">BRUSSEL SPROUTS</div>
                <div id="cherries">CHERRIES</div>
                <div id="cucumber">CUCUMBER</div>
                <div id="eggplant">EGGPLANT</div>
                <div id="oranges">ORANGES</div>
                <div id="peas">PEAS</div>
                <div id="redCabbage">RED CABBAGE</div>
                <div id="rhubarb">RHUBARB</div>
                <div id="spinach">SPINACH</div>
                <div id="squash">SQUASH</div>
                <div id="sweetPotatoes">SWEET POTATOES</div>
                <div id="turnips">TURNIPS</div>     

        </body>
</html>



