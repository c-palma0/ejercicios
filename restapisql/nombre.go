package main


import "errors"

//estructura de la tabla nombre
type Nombre struct {
	id     int
	nombre string
}

//crear registros en la tabla nombre

func crearNombres(n Nombre)error{
	// string de la consulta sql
	q:= `insert into
		 nombre (nombre)
	 	 values ($1)` //variables: $ postgres, ? sql
	//llamr la conexion
	db:=getConnection()
	defer db.Close()

	stmt, err := db.Prepare(q)
	if err!=nil{
		return err
	}
	defer stmt.Close()
	//filas afectadas posible error
	r, err :=stmt.Exec(n.nombre)
	if err!= nil{
		return  err
	}
	i,_:=r.RowsAffected()
	if i!=1{
		return errors.New("Se esperaba una insercion")
	}
	return nil
}
