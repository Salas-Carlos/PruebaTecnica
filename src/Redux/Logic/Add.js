

export const CreateColumns =()=>{
    var Columns = []

    var ingresoT = 0;
    var egresosT = 0;

    const ingresos = Math.floor(Math.random() * (10 - 1)) + 1;
    const egresos  = Math.floor(Math.random() * (10 - 1)) + 1;
    
    const MaxNumber = ( egresos <= ingresos) ? ingresos : egresos;
    

    for(var i= 1; i<=MaxNumber; i++){
        var {filas, ingresoT, egresosT}=Filas(MaxNumber, ingresos, egresos, i, ingresoT, egresosT)
        Columns.push(filas)
    }
    console.log(Columns)
    var Total = ingresoT - egresosT;

    return {Columns, Total};
}


const Filas = (MaxNumber, ingresos, egresos, i, ingresoT, egresosT)=>{

    
    var filas =[];

        if(i<=ingresos){
            var ingreso = Math.floor(Math.random() * (10000 - 0)) + 0;
            ingresoT+=ingreso;
            filas.push("concepto"+i, ingreso)
        }
        else{
            filas.push("","")
        }
        if(i<=egresos){
            var egreso = Math.floor(Math.random() * (10000 - 0)) + 0;
            egresosT+=egreso;
            filas.push("concepto"+i, egreso)
        }
        else{
            filas.push("","")
        }



    return {filas, ingresoT, egresosT};
}