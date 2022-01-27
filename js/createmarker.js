AFRAME.registerComponent("create-markers", {
    init: async function () {
     await this.getmyDishes()


    },
    getmyDishes: async function () {
      var data= await firebase.firestore().collection("dishes").get()
            .then((snapshot) => {
             var dishes= snapshot.docs.map((doc) => {
                    doc.data()
                })
            })
     
            console.log(dishes)


    }
})