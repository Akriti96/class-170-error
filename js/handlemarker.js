AFRAME.registerComponent("markerhandler",{
    init:async function(){
    this.el.addEventListener("markerFound",()=>{
        console.log("marker is found")
        this.handleMarkerFound()
    })
    this.el.addEventListener("markerLost",()=>{
        console.log("marker is lost")
        this.handleMarkerLost()
    })

    },

    handleMarkerFound:function(){
        // chnaging div visibilty
        var buttondiv=document.getElementById("button-id")
        buttondiv.style.display="flex"


        var ratingButton = document.getElementById("rating");
        var orderButtton = document.getElementById("ordering");
    
        // Handling Click Events
        ratingButton.addEventListener("click", function () {
          swal({
            icon: "warning",
            title: "Rate Dish",
            text: "Work In Progress"
          });
        });
    
        orderButtton.addEventListener("click", () => {
          swal({
            icon: "https://i.imgur.com/4NZ6uLY.jpg",
            title: "Thanks For Order!",
            text: "Your order will be served soon at your table!"
          });
        });

    },
    handleMarkerLost:function(){
        var buttondiv=document.getElementById("button-id")
        buttondiv.style.display="none"
    }

})