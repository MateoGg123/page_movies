export const helpHttp = () =>{
    const customFetch = (endpoint,options)=>{
        //EL HEADER POR DEFECTO PARA RECIBIR LA INFO EN FORMATO JSON
        const defaultHeader ={
            accept:"application/json",
        };

        //ELEMENTO CONTROLADOR PARA ABORTAR EN CASO DE QUE LA PETICION NO DE RESPUESTA DE X TIEMPO.
        const controller = new AbortController();
        options.signal = controller.signal;

        //METODO QUE RECIBE DE OPTIONS // EN CASO DE QUE METHOD NO TENGA VALOR, POR DEFECTO SERA GET
        options.method = options.method || "GET";
        //EN HEADERS DE OPTIONS , SI OPTION HEADERS TIENE ELEMENTO SE LE PONE EL DEFAULTHEADER, Y SE LE AGREGA LAS OPCIONES DEL USUARIO, EN CASO DE QUE HEADERS NO TENGA VALOR, SIMPLEMENTE SERA EL DEFAUKT
        options.headers = options.headers?{...defaultHeader,...options.headers}:defaultHeader;

        //OPTIONS.BODY RECIBE INFORMACION QUE SE LE VA A PASAR A LA API EN FORMATO JSON, CON PUT,POST ETC.
        options.body = JSON.stringify(options.body) || false;

        //SI OPTIONS.BODY ES FALSE, ES DECIR NO TIENE NADA, SE ELIMINA OPTIONS,BODY PARA NO PASAR ESO A LA API
        if(options.body===false){
            delete options.body;
        }

        //console.log(options);

        setTimeout(() => {
            controller.abort()
        }, 3000);

        
        return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
      )
      .catch((err) => err);
    }


    const get =(url,options={})=>{
        return customFetch(url,options)
    }
    const post=(url,options={})=>{
        options.method = "POST"
        return customFetch(url,options)
    }
    const put=(url,options={})=>{
        options.method = "PUT"
        return customFetch(url,options)
    }
    const del=(url,options={})=>{
        options.method = "DELETE"
        return customFetch(url,options)
    }
    
    return{
        get,
        post,
        put,
        del,
    }
}