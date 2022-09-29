const app = new Vue({

    el: "#app",
    data:
    {
        cliente: {},
        items: []
    },

    methods: {
        Limpiar: function (){
            this.cliente = {}
        },
        guardarItem: function(){
            if(!this.cliente._id){
              Usuarios.crear(this.cliente, response =>{
                if(!response.error){
                    this.cargaItems()
                }
              })                 
            } else {
                let id = this.cliente._id
                let persona = {...this.cliente}
                delete persona._id

                Usuarios.editar(id, persona, response => {
                    if(!response.error){
                        this.cargaItems()                       
                    }
                })
            }
        },
        cargaItems: function(){
            Usuarios.todos( response =>{
                if(!response.error){
                    this.items = response
                    this.persona = {}                   
                }
                console.log("response ::", response)              
            })
        },
        eliminarItem: function (_id){
            Usuarios.eliminar(_id, response =>{
                if(!response.error){
                    this.cargaItems()
                }
            })
        },

        editarItem: function (obj){
            this.cliente = {...obj}
        }
    },

    mounted: function (){
        console.log("app ready ::")
        this.cargaItems()
    },
    
   

})