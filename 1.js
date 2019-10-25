document.addEventListener("DOMContentLoaded", function() {
        AOS.init();
        var button = document.getElementsByClassName("open-menu-button");
        var button = button[0];
        var content = document.getElementsByClassName("noidungto");
        var content = content[0];
        var closebtn = document.getElementsByClassName("close-menu-btn");
        var closebtn = closebtn[0];

        button.onclick = function() {
            content.classList.toggle("vetrai");
        }


        closebtn.onclick = function() {
            content.classList.add("vetrai");
        }



    }


    , false)