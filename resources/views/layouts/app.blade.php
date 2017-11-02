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
    {{--  <link href="{{ asset('css/bootstrap-datepicker3.min.css') }}" rel="stylesheet">  --}}
    
    <!-- Include Date Range Picker -->
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />

    <link href="{{ asset('css/bootstrap-timepicker.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/nouislider.min.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css"
        integrity="sha512-M2wvCLH6DSRazYeZRIm1JnYyh22purTM+FDB5CsyxtQJYeKq83arPe5wgbNmcFXGqiSH2XR8dT/fJISVA1r/zQ=="
        crossorigin=""/>
</head>
<body>
    <div id="app">
        @include('inc.navbar')
            @yield('content')
    </div>
</div>
    <!-- Scripts -->
    
    <script src="{{ asset('js/app.js') }}"></script> 
    <script type="text/javascript" src="{!! asset('js/script.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/nouislider.min.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/sidebar.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/wNumb.js') !!}"></script>
    <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"
        integrity="sha512-lInM/apFSqyy1o6s89K4iQUKg6ppXEgsVxT35HbzUupEVRh2Eu9Wdl4tHj7dZO0s1uvplcYGmt3498TtHq+log=="
        crossorigin="">
    </script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <!-- Include Date Range Picker -->
    <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
    
    <script type="text/javascript" src="{!! asset('js/bootstrap-timepicker.min.js') !!}"></script>
    <script type="text/javascript" src="{!! asset('js/bootstrap-number-input.js') !!}"></script>
    {{--  <script type="text/javascript" src="{!! asset('js/bootstrap-slider.min.js') !!}"></script>  --}}
    
    
</body>
</html>
