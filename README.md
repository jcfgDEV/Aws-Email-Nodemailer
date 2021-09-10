# Instalacion y Configurar Amplify CLI 

siguiendo las siguientes instrucciones

``` npm install -g @aws-amplify/cli  ```

**Nota: Debido a que estamos instalando la CLI de Amplify a nivel Global, es posible que deba ejecutar el comando anterior con sudo según las políticas de su sistema.**

# Ahora es el momento de configurar la CLI de Amplify. Configure Amplify ejecutando el siguiente comando:

[Paso a Paso de la creacion del IAM]

amplify configure le pedirá que inicie sesión en la consola de AWS.

Una vez que haya iniciado sesión, Amplify CLI le pedirá que cree un usuario de IAM.

[Paso a Paso de la creacion del IAM](https://i.imgur.com/Z4AqWsy.mp4)

```
Specify the AWS Region
? region:  # Your preferred region
Specify the username of the new IAM user:
? user name:  # User name for Amplify IAM user
Complete the user creation using the AWS console

```

**Cree un usuario con acceso de administrador a su cuenta para que le suministre recursos de AWS**

Una vez creado el usuario, Amplify CLI le pedirá que proporcione el **accessKeyId** y el **secretAccessKey** para conectar Amplify CLI con su usuario de IAM recién creado.

<img width='760px' height='190px' src="https://i.imgur.com/xhxEmtx.png" alt="IAM FINAL"></img>

```
Enter the access key of the newly created user:
? accessKeyId:  # YOUR_ACCESS_KEY_ID
? secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
? Profile Name:  # (default)

Successfully set up the new user

```


# Iniciar Nuevo Backend Aplicacion

###### Ahora que tenemos una aplicación React en ejecución, es hora de configurar Amplify para que podamos crear los servicios de backend necesarios para admitir la aplicación.


**Desde la raíz del proyecto, ejecute:**

``` amplify init ```

[Paso A Paso amplify init](https://i.imgur.com/UBWJV7x.mp4)


Una vez ingresado y de a ver configurado se te creara una carpeta en tu raiz llamado: **amplify** esto contendra lo nesesario para poder iniciar nuestra Funcion o api

<img width='300px' height='420px' src='https://i.imgur.com/oOb8UR4.png' alt='amplify Folder'>

``` amplify add function ```

[Paso a Paso creando la Funcion](https://i.imgur.com/homTnno.mp4)

con esto podemos agregar nuestra funcion que podremos conectar luego al github para hacer pequeñas tareas de backend como el envio de formularios a la base de datos o envio de correo desde un formulario etc...

**NOTA: Una vez formada la carpeta de src donde contiene la function. puedes desplegarla usando ```amplify push```**

<img width='300px' height='420px' src='https://i.imgur.com/zlTeDKZ.png' alt='amplify Folder'>

**NOTA: Esta Funcion la veremos creada en una carpeta llamada function y estara en la siguiente ruta: amplify/backend/function/NOMBRE-FUNCION/src/[index.js,event.json,package.json]**

# Conectando Github Con Nuestra aplicacion de Amplify

> Aqui pueden ver los mismos pasos en este video [Pasos](https://www.youtube.com/watch?v=ptb3fZ_hKc8)

> Tenemos que seleccionar un proveedor. para este proyecto ocupare Github. Nos vamos a Amplify y veremoss ahi todas nuestras aplicaciones que tengamos creadas seleccionamos el deseado y cuando estemos alli

<img width='1024px' height='620px' src='https://i.imgur.com/TENUVr1.png' alt='proveedores'>


>Nos va a pedir logear en nuestra cuenta de github. en tal caso de que tengamos la sesion iniciada. entonces solo seleccionamos a cual repositorio queremos conectar nuestro frontend

<img width='1024px' height='620px' src="https://i.imgur.com/JLu6Z2h.png" alt='Select Repository'>

**NOTA: Hay que tener un rol de servicio. eso lo podemos crear en IAM o en el misma configuracion al hacer click nos llevara a aws IAM**

> Al hacer click en 'Create New Role' nos llevara a Aws IAM para crearnos nuestro rol
<img width='1024px' height='400px' src="https://i.imgur.com/X95EZCg.png" alt='Rol Service'>

[Paso a Paso Creando Rol](https://i.imgur.com/jesjDrv.mp4)

