function interes()
{
    let dinero=document.getElementById("dinero").value;
    let capregex=/^\d+(\.\d+)?$/; 
    let resultado;
    if (capregex.test(dinero))
    {
        resultado=dinero*1.02
        document.getElementById("res").value=resultado;
    }
    else
    {
        alert("Valor incorrecto")
    } 
}
function sueld()
{
    let checar=/^\d+(\.\d+)?$/;  
    let venta1=document.getElementById("venta1").value;
    let venta2=document.getElementById("venta2").value;
    let venta3=document.getElementById("venta3").value;
    let sueldo=document.getElementById("sueldo").value;

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
              document.getElementById("sueldoR").value=sueldo;
              document.getElementById("comR").value=comision;
              document.getElementById("sueldoTR").value=sueldototal;
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
  let regc=/^-?\d*\.?\d+$/; 
  let compra=document.getElementById("ticket").value;
  if(regc.test(compra))
  {
    let preciofinal=compra*0.85
    document.getElementById("compraresultado").value=preciofinal;
  }
  else
  {
    alert("Valor incorrecto")
  }
  
}
function calis()
{
  let calificacionregex=/^(10(\.0+)?|([0-9](\.[0-9]+)?))$/;
  let evCont=document.getElementById("calificacion1").value;
  let eF=document.getElementById("examenfinal").value;
  let tF=document.getElementById("trabajofinal").value;
  if(calificacionregex.test(evCont))
  {
        if (calificacionregex.test(eF))
        {
          if(calificacionregex.test(tF))
          {
            let porcentajefinal=(evCont*0.55)+(parseFloat(eF)*0.30)+(parseFloat(tF)*0.15);
            document.getElementById("calificacionfinal").value=porcentajefinal;
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
  let alH=document.getElementById("alumnosh").value;
  let alM=document.getElementById("alumnosm").value;
  
    if (regex1.test(alH))
    {
      if (regex1.test(alM))
      {
        let totales=alH+alM
        let poralh=(alH*100)/totales;
        let poralm=(alM*100)/totales;
        document.getElementById("porcentajealumnos").value=poralh;
        document.getElementById("porcentajealumnas").value=poralm;
        }
      }
      else
      {
        alert("Hay un valor incorrecto")
      }
}
function edad() {
  let fechan=new Date(document.getElementById("fechan").value);
  let diferencia = Date.now() - fechan.getTime();
  let edad = Math.floor(diferencia / 1000 / 60 / 60 / 24 / 365.25);

  document.getElementById('edadc').value=edad
}

function numSuma()
{
  let regc=/^-?\d*\.?\d+$/;
  let n1=parseFloat(document.getElementById("n1").value);
  let n2=parseFloat(document.getElementById("n2").value);
  let res;
  if(regc.test(n1))
  {
    if(regc.test(n2))
    {
      if(n1==n2)
      {
        res=n1*n2;
      }
      if (n1>n2)
        res=n1-n2;
      else
      {
        res=n1+n2;
      }
      document.getElementById("resuk").value=res;
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
  let num1=parseFloat(document.getElementById("nu1").value);
  let num2=parseFloat(document.getElementById("nu2").value);
  let num3=parseFloat(document.getElementById("nu3").value);
  let mayor;
  if(regd.test(num1))
  {
    if(regd.test(num2))
    {
      if(regd.test(num3))
      {
        if (num1>num2) 
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
        document.getElementById("resup").value=mayor;
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
  let horasTrabajadas = document.getElementById('horastotales').value
  let sueldoPorHora = document.getElementById('salario').value  
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
      document.getElementById("salariofinal").value=sueldoBase;
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
  let año=document.getElementById('')
  let suerox=document.getElementById('')
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
  document.getElementById('sutilidad').value=sueT
}
