<nav id="top-nav-bar" class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0px">
    <div class="container">
        <div class="navbar-header">
            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
        </div>
        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav"> 
                &nbsp;
            </ul>
            <ul class="nav navbar-nav">
                <li><a href="/fires">Fire Map</a></li>
                <li><a href="/search">Search</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </div>
    </div>
</nav>