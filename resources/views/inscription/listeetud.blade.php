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
                font-size: 20px;
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
                <div class="title m-b-md">
                    Listes des Etudiants :
                </div>








                <table class="table table-hover table-dark table-responsive table-bordered" >
        <thead>
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Adress</th>
            <th scope="col">lieu de naissace </th>
            <th scope="col">date de naissace </th>
            <th scope="col">numéro de telephone </th>

          </tr>
        </thead>
        <tbody>
          @foreach($students as $student) 
                
            
          <tr>
          <th scope="col">{{$student->nom}} </th>
            <th scope="col">{{$student->pernom}}   </th>
            <th scope="col">{{$student->adress}}</th>
            <th scope="col">{{$student-> LieuNaissance}}</th>
            <th scope="col">{{$student->datedenaissance}}</th>
            <th scope="col">{{$student->NumTelephone}}</th>
          </tr>
          @endforeach
    
        </tbody>
      </table>
                 

               
            </div>
        </div>
    </body>
</html>
