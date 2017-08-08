package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
)


func handleRequests() {
	http.HandleFunc("/", homePage)


	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main() {
	handleRequests()
}


func homePage(w http.ResponseWriter, r *http.Request){
	a1 := Nombre {nombre:"Marlene"}
	a2 := Nombre {nombre:"Christian"}
	a3 := Nombre {nombre:"Adan"}
	a4 := Nombre {nombre:"Carolina"}
	a5 := Nombre {nombre:"Hector"}

	a:= [5]Nombre{a1,a2,a3,a4,a5}
	for i := 0; i < 5; i++ {
		err:= crearNombres(a[i])
		if err !=nil {
			log.Fatal(err)
		}
		fmt.Print("insertado",i)
	}
	json.NewEncoder(w).Encode("Terminado")
}




