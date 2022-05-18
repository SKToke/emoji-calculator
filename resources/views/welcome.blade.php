<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Calculator</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }

        .c-button {
            margin-top: 30px;
            height: 40px;
        }
    </style>
    <!-- Head Script -->
    <script>
        window.calculatorRoutes = {
            calculator: "{!! route('calculator') !!}"
        };
    </script>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
</head>
<body>
<div id="app">
    <!-- component -->
    <calculator></calculator>
</div>
<!-- Foot Script -->
<script src="{{ asset("js/app.js") }}"></script>
</body>
</html>
