$(document).ready(function(){

    $("#contact").hover(
        function(){
            $("this").addClass("hover");
        },
        function(){
            $("this").removeClass("hover");
        }
    );

    $("#edu").hover(
        function(){
            $("this").addClass("hover");
            $("#edu").css({"background-color": "white", "color":"lightblue"});
        },
        function(){
            $("this").removeClass("hover");
            $("#edu").css({"background-color": "lightblue", "color":"white"});
        }
    );

    $("#work").hover(
        function(){
            $("this").addClass("hover");
            $("#work").css({"background-color": "white", "color":"lightblue"});
        },
        function(){
            $("this").removeClass("hover");
            $("#work").css({"background-color": "lightblue", "color":"white"});
        }
    );

    $("#about").hover(
        function(){
            $("this").addClass("hover");
            $("#about").css({"background-color": "white", "color":"lightblue"});
        },
        function(){
            $("this").removeClass("hover");
            $("#about").css({"background-color": "lightblue", "color":"white"});
        });

    $("#contact").click(function() {
        if ($("#contactInfo").is(":hidden")) {
            $("#contactInfo, #info").toggle("slow");
            $("#contact").animate({ top: -10 }, "slow");
        } else {
            $("#contactInfo, #info").toggle("slow");
            $("#contact").animate({ top: 285 }, "slow");
        }
    });
    
    
    $("#edu").click(function(){
        $("#eduInfo").toggle("500");
        $("#workInfo").hide("fast");
        $("#aboutInfo").hide("fast");

    })


    
    $("#work").click(function(){
        $("#workInfo").toggle("500");
        $("#eduInfo").hide("slow");
        $("#aboutInfo").hide("slow");
    })
    
    $("#about").click(function(){
        $("#aboutInfo").toggle("500");
        $("#workInfo").hide("slow");
        $("#eduInfo").hide("slow");
    })


})