/*
Vue.component('validacion', { 
    props: {
        nombre: {
            required: true,
            
        },
        correo: {
            required: true,
        },
        cp: {
            required: true,
        },
        edad: {
            required: true,
            type: 'number'
        },
        telefono: {
            required: true,
        },

    },
  template: '<span>{{ error }}</span>'
});

function agregarValidacion(){
    
}*/


var e = /^([0-9])*$/;
var p=/^([0-9])+([0-9])+([0-9])+([0-9])+([0-9])/;
var l =/^[a-zA-Z_áéíóúñ\s]*$/
var c = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var form = new Vue({
  el: '#form',
  data: {
    nombre: '',
    correo: '',
    cp: '',
    edad: '',
    tel:'',
    attemptSubmit: false,
    

  },
  computed: {
    missingName: function () {
         if (this.nombre ==''){
            return true;
            }else if  (!this.nombre.match(l)){
            return true;
            }
    },

    wrongNumber: function(){ 
         if (this.edad ==''){
            return true;
            }else if  (!this.edad.match(e)){
            return true;
            }
    
    }, 
    missingEmail: function () { 
         if (this.correo ==''){
            return true;
        }else if(this.correo.match(c))
            return false;
            else return true;
        

        },
    missingCp: function(){ 
                var num = this.edad;
        if (this.cp ==''){
            return true;
            }else 
              
                if (this.cp.match(p))
                  return false;
               
               else return true;
             
    },
    missingTel: function(){ 
        if (this.tel=='')
            return true;
        else  if (this.tel.length==10)
                 if (this.tel.match(e))
                     return false;
              else return true;
        else return true;
       
       
    },
  },
   
  methods: {
    isNumeric: function () {},
    validateForm: function (event) {
        this.attemptSubmit=true;
        if(this.missingName || this.missingTel|| this.missingCp || this.missingEmail || this.wrongNumber) event.preventDefault();
        else 
            alert("Los datos son correctos");
    },
  },
});

 function validarSiNumero(numero){
   if (!/^([0-9])*$/.test(numero))
      return 1 ;
  } 
 //|| this.edad < 1 || this.edad > 100
