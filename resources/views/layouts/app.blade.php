<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Blog') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css">
    <link href="{{ asset('css/bootstrap-datepicker3.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap-timepicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/bootstrap-slider.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
</head>
<body>
    <div id="app">
        @include('inc.navbar')
        <div class="container">
            @yield('content')
        </div>
    </div>
    <div class="container text-center">
    <hr/>
</div>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script> 
    <script type="text/javascript" src="{!! asset('js/script.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/bootstrap-datepicker.min.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/bootstrap-timepicker.min.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/bootstrap-number-input.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/bootstrap-slider.min.js') !!}"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
</body>
</html>
