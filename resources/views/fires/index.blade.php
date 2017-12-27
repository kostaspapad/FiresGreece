@extends('layouts.app')

@section('content')

<button id="sidebar-btn" class="sidebar-btn">
    <div class="menu-stripes"></div>
    <div class="menu-stripes"></div>
    <div class="menu-stripes"></div>
</button>
<section id="sidebar" class="sidebar">
    <div class="pad-dbl">
        <br>
        <button id="searchBtn" type="button" class="btn btn-primary btn-block">Αναζήτηση</button>
        <br>
        <button id="resetBtn" type="button" class="btn btn-warning btn-block">Reset</button>
    </div>
    <nav class="menu">
        <ul class="menu-level1 no-style">
            <li class="menu-toggle">
                <div class="menu-toggle-btns">
                    <p class="menu-link">Τοποθεσία</p>
                    <a href="#" class="menu-btn"><div>+</div></a>
                </div>
                <ul class="menu-level2 submenu no-style">
                    <li class="menu-toggle">
                        <div class="menu-toggle-btns">
                            @include('layouts.partials.searchPlaces')
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
        <ul class="menu-level1 no-style">
            <li class="menu-toggle">
                <div class="menu-toggle-btns">
                    <p class="menu-link">Ημερομηνία/ώρα</p>
                    <a href="#" class="menu-btn"><div>+</div></a>
                </div>
                <ul class="menu-level2 submenu no-style">
                    @include('layouts.partials.searchDateTime')
                </ul>
            </li>
        </ul>
        <ul class="menu-level1 no-style">
            <li class="menu-toggle">
                <div class="menu-toggle-btns">
                    <p class="menu-link">Καμμένες εκτάσεις</p>
                    <a href="#" class="menu-btn"><div>+</div></a>
                </div>
                <ul class="menu-level2 submenu no-style">
                    @include('layouts.partials.searchBurned')
                </ul>
            </li>
        </ul>
        <ul class="menu-level1 no-style">
            <li class="menu-toggle">
                <div class="menu-toggle-btns">
                    <p class="menu-link">Προσωπικό</p>
                    <a href="#" class="menu-btn"><div>+</div></a>
                </div>
                <ul class="menu-level2 submenu no-style">
                    @include('layouts.partials.searchHumanResources')
                </ul>
            </li>
        </ul>
        <ul class="menu-level1 no-style">
            <li class="menu-toggle">
                <div class="menu-toggle-btns">
                    <p class="menu-link">Οχήματα</p>
                    <a href="#" class="menu-btn"><div>+</div></a>
                </div>
                <ul class="menu-level2 submenu no-style">
                    @include('layouts.partials.searchLandVehicles')
                </ul>
            </li>
        </ul>
        <ul class="menu-level1 no-style">
            <li class="menu-toggle">
                <div class="menu-toggle-btns">
                    <p class="menu-link">Εναέρια Οχήματα</p>
                    <a href="#" class="menu-btn"><div>+</div></a>
                </div>
                <ul class="menu-level2 submenu no-style">
                    @include('layouts.partials.searchAirVehicles')
                </ul>
            </li>
        </ul>
    </nav>
</section>
<div id="content" class="content">
    <div class="wrapper">
        <main id="container" class="container">
            <div id="map" style="height: 100%; border: 1px solid #AAA;"></div>
            <div id="chartContainer" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
            <!-- pretend long content 
            <div style="height: 2000px;">
                <table class="table-responsive">
                    <thead>
                        <tr>
                            <th>Δάση</th>
                            <th>Δασική έκταση</th>
                            <th>Άλση</th>
                            <th>Χορτ-Εκτάσεις</th>
                            <th>Καλάμια/Βάλτοι</th>
                            <th>Γεωργικές εκτάσεις</th>
                            <th>Υπολήματα καλιεργιών</th>
                            <th>Σκουπιδότοποι</th>
                        </tr>
                        </thead>
                        <tbody>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table> 
            </div>-->
        </main>
    </div>
</div>
@endsection

<style>
/* for styling only */

html,
body {
    height: 100%;
}

html {
    font: 1em/1.5 "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, sans-serif;
    color: #333;
}
#container{
    height:100%;
    width:100%;
    padding-left:0px;
    padding-right:0px;
}
/*
.container {
    max-width: 1140px;
    min-width: 300px;
    margin: 0 auto;
}
*/
h1 {
    font-size: 2.5rem;
    margin-bottom: .625rem;
}

h3 {
    margin-bottom: .625rem;
}

hr {
    margin: 1.25rem 0;
    border: 0;
    height: 1px;
    background: #333;
}

ul {
    /*
     list-style:none;
     padding-left:2px;
    */
    
}

li { list-style:none;overflow: hidden;}


/*
.wrapper {
    margin: 0 5%;
}
*/

/* sidebar */

body.sidebar-show {
    overflow: hidden;
}

.sidebar,
.sidebar-btn,
.menu-stripes,
.content {
    transition: transform .5s ease-in-out;
}

.content {
    /*margin-top: 80px; /* height of sidebar-btn + 10 */
}

.content.sidebar-show:before {
    content: "";
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 1500;
    overflow: hidden;
}

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 700px;
    height: 100%;
    background: #FFF;
    color: #333;
    transform: translate(-700px);
    z-index: 1501;
}

.sidebar.show {
    transform: translate(0);
    overflow-y: auto;
}

.sidebar-btn {
    position: absolute;
    height: 50px;
    width: 50px;
    background: rgba(128, 128, 128, .5);
    border: 0;
    border-radius: 99px;
    top: 0px;
    transform: translate(10px);
    z-index: 1502
}

.sidebar-btn.sidebar-show {
    transform: translate(640px);
}

.menu-stripes {
    position: relative;
    height: 4px;
    width: 35px;
    margin: 7px auto;
    background-color: #FFF;
    border-radius: 5px;
}

.sidebar-btn.sidebar-show .menu-stripes {
        margin: -3px auto;
    }
    .sidebar-btn.sidebar-show .menu-stripes:nth-child(1) {
        transform: rotate(45deg);
    }
    .sidebar-btn.sidebar-show .menu-stripes:nth-child(2) {
        display: none;
    }
    .sidebar-btn.sidebar-show .menu-stripes:nth-child(3) {
        transform: rotate(-45deg);
    }

.sidebar-btn:not(.sidebar-show):hover > .menu-stripes {
    animation: hoverButton .1s infinite;
}

@keyframes hoverButton {
    0%   {left: 0}
    33%  {left: -1px}
    66%  {left: 6px}
    100% {left: 0}
}


/* Submenu */

.menu {
    border-bottom: 1px solid #EEE;
}

.menu-btn,
.menu-link {
    outline: 0 !important;
}

.menu-link {
	display: inline-block;
    transition: color .2s;
}

.menu-link:hover {
    color: #2e86c1 ;
}

.menu-btn {
    transition: background .2s, color .2s;
}

.menu-btn:hover {
    background: #333;
    color: #FFF;
}


.menu-toggle-btns {
    position: relative;
}

    .menu-toggle-btns > .menu-link {
        width: 246px;
    }

.menu-level1 a {
    color: #333;
}

.menu-level1 > li {
    border-top: 1px solid #EEE;
}

.menu-level1 .menu-link {
    padding: 5px 20px;
}

.menu-level2 {
    background: #FFF;
}

    .menu-level2 .menu-link {
        padding: 15px 15px 15px 30px;
    }
    .menu-level2 > li + li {
        border-top: 1px solid #E9E9E9;
    }

    .menu-level2 .menu-btn {
        border-color: #E9E9E9;
    }

    .menu-level3 {
        background: #E5E8E8;
    }

        .menu-level3 .menu-link {
            padding: 15px 15px 15px 45px;
        }

.menu-btn {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 54px;
    height: 100%;
	padding: 19px 0;
    border-left: 1px solid #EEE;
    text-align: center;
    line-height: 1;
}

.menu-btn > div {
	display: inline-block;
    font-weight: bold;
    transition: transform .2s ease-in-out;
}

.menu-btn.active > div {
    transform: rotate(45deg);
}

.submenu {
    display: none;
}

</style>
