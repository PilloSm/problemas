function interes()
{
    let dinero=Problemas.getElementById("dinero").value;
    let capregex=/^\d+(\.\d+)?$/; 
    let resultado;
    if (capregex.test(dinero))
    {
        resultado=dinero*0.2
        Problemas.getElementById("res").value=resultado;
    }
    else
    {
        alert("Valor incorrecto")
    } 
}
function sueldo()
{
    let checar=/^\d+(\.\d+)?$/;  
    let venta1=Problemas.getElementById("venta1").value;
    let venta2=Problemas.getElementById("venta2").value;
    let venta3=Problemas.getElementById("venta3").value;
    let sueldo=Problemas.getElementById("sueldo").value;

    if (checar.test(venta1))
    {
      if(checar.test(venta2))
      {
          if(checar.test(venta3))
          {
            if(checar.test(sueldo))
            {
              let comision=(parseFloat(venta1)+parseFloat(venta2)+parseFloat(venta3))*0.1;
              let sueldototal=parseFloat(sueldo)+parseFloat(comision);
              Problemas.getElementById("sueldoR").value=sueldo;
              Problemas.getElementById("comR").value=comision;
              Problemas.getElementById("sueldoTR").value=sueldototal;
            }
            else
            {
                alert("Hay un valor incorrecto")
            }
          }
          else
          {
            alert("Hay un valor incorrecto")
          }

      }
      else
      {
      alert("Hay un valor incorrecto")
      }
    }
    else
    {
      alert("Hay un valor incorrecto")
    }
}
function descuento()
{
  let compra=Problemas.getElementById("compra").value;
  let compraregex=/^\d+(\.\d+)?$/; 
  if(compraregex.test(compra))
  {
    let descuento=parseFloat(compra)*0.15;
    let preciofinal=parseFloat(compra)-descuento;
    Problemas.getElementById("compraresultado").value=preciofinal;
  }
  else
  {
    alert("Valor incorrecto")
  }
  
}
function calis()
{
  let calificacionregex=/^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
  let evCont=Problemas.getElementById("calificacion1").value;
  let eF=Problemas.getElementById("examenfinal").value;
  let tF=Problemas.getElementById("trabajofinal").value;
  if(calificacionregex.test(calificacion1))
  {
    if(calificacionregex.test(calificacion2))
    {
      if(calificacionregex.test(calificacion3))
      {
        if (calificacionregex.test(califexamenfinal))
        {
          if(calificacionregex.test(trabajofinal))
          {
            let porcentajefinal=(evCont*0.55)+(parseFloat(eF)*0.30)+(parseFloat(tF)*0.15);
            Problemas.getElementById("calificacionfinal").value=porcentajefinal;
          }
          else
          {
            alert("Hay un valor incorrecto")
          }
        }
        else
        {
          alert("Hay un valor incorrecto")
        }
      }
      else
      {
        alert("Hay un valor incorrecto")
      }
    }
    else
    {
      alert("Hay un valor incorrecto")
    }
  }
  else
  {
    alert("Hay un valor incorrecto")
  }
  
}
function porcentaje()
{
  let regex1=/^[1-9]\d*$/;
  let alH=Problemas.getElementById("alumnosh").value;
  let alM=Problemas.getElementById("alumnosm").value;
  if (regex1.test(numeroalumnos))
  {
    if (regex1.test(numeroalumnosh))
    {
      if (regex1.test(numeroalumnosm))
      {
        let totales=alH+alM
        let poralh=(alH*100)/totales;
        let poralm=(alM*100)/totales;
        Problemas.getElementById("porcentajealumnos").value=poralh;
        Problemas.getElementById("porcentajealumnas").value=poralm;
        }
      }
      else
      {
        alert("Hay un valor incorrecto")
      }
  }
  else
  {
    alert("Hay un valor incorrecto")
  }
}
function edad() {
  let fechaNacimiento = index.getElementById('')
  let fechaNacimientoObj = new Date(fechaNacimiento);
  let diferencia = Date.now() - fechaNacimientoObj.getTime();
  let edad = Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365.25);
}

function numSuma()
{
  let regc=/^-?\d*\.?\d+$/;
  let n1=parseFloat(Problemas.getElementById("n1").value);
  let n2=parseFloat(Problemas.getElementById("n2").value);
  let res;
  if(regc.test(n1))
  {
    if(regc.test(n2))
    {
      if(n1==n2)
      {
        resuk=n1*n2;
      }
      if (n1>n2)
        res=n1-n2;
      else
      {
        resuk=n1+n2;
      }
      Problemas.getElementById("resuk").value=res;
    }
    else
    {
      alert("Hay un valor incorrecto")
    }
  }
  else
  {
    alert("Hay un valor incorrecto")
  }
}
function numMa()
{
  let regd=/^-?\d*\.?\d+$/;
  let num1=parseFloat(Problemas.getElementById("nu1").value);
  let num2=parseFloat(Problemas.getElementById("nu2").value);
  let num3=parseFloat(Problemas.getElementById("nu3").value);
  let mayor;
  if(regd.test(num1))
  {
    if(regd.test(num2))
    {
      if(regd.test(num3))
      {
        if (num1>nume2) 
        {
          if (num1>num3)
          {
            mayor=num1
          }
          else{
            mayor=num3
          }
        }
        else{
          if(num2>num3){
            mayor=num2
          }
          else{
            mayor=num3
          }
        }
        Problemas.getElementById("resup").value=mayor;
      }
      else{
        alert("Hay un valor incorrecto")
      }
    }
    else
    {
      alert("Hay un valor incorrecto")
    }
  }
  else{
    alert("Hay un valor incorrecto")
  }
}
function extras()
{
  let horasTrabajadas = Problemas.getElementById('horastotales').value
  let sueldoPorHora = Problemas.getElementById('salario').value  
  let rege1=/^\d+$/;
  let rege2=/^\d*\.?\d+$/;
  if(rege1.test(horasTrabajadas))
  {
    if(rege2.test(sueldoPorHora))
    {
      horasTrabajadas = Number(horasTrabajadas);
      sueldoPorHora = Number(sueldoPorHora);
      let sueldoBase = 8 * sueldoPorHora;
      if (horasTrabajadas > 8) 
      {
          let horasExtras = horasTrabajadas - 8;
          let sueldoExtras = horasExtras * sueldoPorHora * 2;
          sueldoBase += sueldoExtras;
      }
      if (horasTrabajadas > 16) 
      {
          let horasExtrasAdicionales = horasTrabajadas - 16;
          let sueldoExtrasAdicionales = horasExtrasAdicionales * sueldoPorHora * 3;
          sueldoBase += sueldoExtrasAdicionales;
      }
      Problemas.getElementById("salariofinal").value=sueldoBase;
    }
    else
    {
      alert("Hay un valor incorrecto")
    }
  }
  else{
    alert("Hay un valor incorrecto")
  }
}  
function repart()
{
  let año=index.getElementById('')
  let suerox=index.getElementById('')
  let sueT
  if (año<1)
  {
      sueT=suerox*0.05
  }
  else if (año>=1 && año<2 )
  {
      sueT=suerox*0.07
  }
  else if (año>=2 && año<5)
  {
      sueT=suerox*0.1
  }
  else if(año>=5 && año<10)
  {
      suet=suerox*0.15
  }
  else if(año>=10)
  {
      sueT=suerox*0.2
  }
  Problemas.getElementById('sutilidad').value=sueT
}
