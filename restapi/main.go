package main

import (
	"fmt"
	"log"
	"net/http"
	"encoding/json"
	//"github.com/gorilla/mux"
	"strings"
)

func homePage(w http.ResponseWriter, r *http.Request){
	hola:="hola mundo!"


	fmt.Println("Endpoint Hit: homePage")

	json.NewEncoder(w).Encode(hola)
}

func handleRequests() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/all", returnNombre)
	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main() {
	handleRequests()
}

func returnNombre(w http.ResponseWriter, r *http.Request){
	/*fmt.Print("Enter text: ")
	var input string
	fmt.Scanln(&input)*/
	nombre1:=r.Header["Nombre"]
	nombre2:=r.Header["Apellido"]
	s1:= strings.Join(nombre1," ")
	s2:= strings.Join(nombre2," ") 
	s2="nombre completo: "+ s1+" "+s2
	fmt.Println("Endpoint Hit: returnNombre")
	json.NewEncoder(w).Encode(s2)
}

