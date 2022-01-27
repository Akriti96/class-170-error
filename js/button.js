AFRAME.registerComponent("create-button", {
    init: function () {
        //creating buuton1(rate)
        var button1 = document.createElement("button")
        button1.innerHTML="RATE US"
        button1.setAttribute("id", "rating")
        button1.setAttribute("class", "warning")


        //creating buuton2(order)
        var button2 = document.createElement("button")
        button2.innerHTML="ORDER NOW"
        button2.setAttribute("id", "ordering")
        button2.setAttribute("class", "warning")

    

        // adding registered componet to div id
        var button_div= document.getElementById("button-id")
        button_div.appendChild(button1)
        button_div.appendChild(button2)
    }

})