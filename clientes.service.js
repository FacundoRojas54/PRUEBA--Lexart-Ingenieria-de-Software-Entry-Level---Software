const API = 'https://crudcrud.com/api/4e7afa2806aa4b52a48d37c1375dfc88'
const model = '/clientes'

const Usuarios ={
    todos: function(cb){
        const url = API + model
        axios.get(url).then( response => {
            cb(response.data)
        }).catch( err =>{
            cb(
                {
                    error: `${err}`
                })
        })
    },

     crear: function (obj, cb){
         const url = API + model
         axios.post(url,obj).then( response =>{
            cb(response.data)
         }).catch(err => {
            cb({
                error:`${err}`
            })
         })
     },

     eliminar: function(id, cb){
        const url= API + model + '/' + id
        axios.delete(url).then( response =>{
            cb(response.data)
        }).catch( err => {
            cb({
                error: `${err}`
            })
        })
     },

     editar: function (id, obj, cb){
        const url =  API + model + '/' + id
        axios.put(url,obj).then( response => {
            cb(response.data)
        }).catch( err =>{
            cb({
                error: `${err}`
            })
        })
     }

}