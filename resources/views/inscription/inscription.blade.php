<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Nunito', sans-serif;
                font-weight: 200;
                height: 100vh;
                margin: 0;
            }

            .full-height {
                height: 100vh;
            }

            .flex-center {
                align-items: center;
                display: flex;
                justify-content: center;
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
                text-align: center;
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 13px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>
    </head>
    <body>
    

            <div class="content">
               <h2 class="text-center">
               Inscription pédagogique :
               
               </h2>
               <div class="panel panel-default">

<div class="panel-heading">

Remplir le form ci-dessus pour s'inscrire  a l'école :

</div>


<div class="panel-body">

<form action="student/store"  method="post">
{{csrf_field()}}

<div class="form-groupe">
<label for="name"> Nom</label>
<input type="text" name="nom" class="form">
<label for="prenom">Prenom</label>
<input type="text" name=pernom class="form">
</div>
<br>
<div class="form-groupe">
<label for="adress">L'adress</label>
<input type="text" name=adress class="form">
</div> <br>
<div class="form-groupe">
<label for="Datedenaissance">La date de naissance </label>
<input type="text" name=Datedenaissance class="form">
</div> <br>
<div class="form-groupe">
<label for="numdetelephon">Numéro de Télephone :  </label>
<input type="text" name=numdetelephon class="form">
</div> <br>
<div class="form-groupe">
<label for="pieceiden"> La piece d'identité </label>
<input type="file" name="pieceiden" class="form">
</div> <br>

<div class="form-groupe">
<div class="text-center">
<button class="btn-success" type ="submit">
S'inscrire !
</button>

</div>

</div>


</form>

</div>
</div>
               
            </div>
        </div>
    </body>
</html>
