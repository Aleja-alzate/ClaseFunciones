function TablasMultiplicar (num){
  let base = num;
  let data = '';

  for (let i=0; i<=10; i++){
    data += ` ${ base } * ${ i } = ${ base * i} /n`
  }

  const fs = require('fs');

fs.writeFile(`Tabla-${base}.txt`,data,(err)=>{
    if(err) throw err;

    console.log('El archivo se ejecutó con exito')
})
}

exports.TablasMultiplicar = TablasMultiplicar;