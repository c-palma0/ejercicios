package main

import (
	"database/sql" //ocupa de un driver para que funcione la conexion a la bd
	_"github.com/rev/lib/pq"  // sin rev? solo para postgres
	"log"
)
//funcion para obtener conexion de la bd

func getConnection() *sql.DB {  //estructura DB
	dns :="postgres://postgres:admin@127.0.0.1:5432/postgres?sslmode=disable" //sslmode manera segura
	db,err:= sql.Open("postgres",dns)
	if err !=nil{
		log.Fatal(err)//si hay error al conectarce y mustra el error
	}
	return db
}
