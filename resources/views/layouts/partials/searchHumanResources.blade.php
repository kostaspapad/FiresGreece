<div class="row">
    <div class="col-md-4">
        <label class="control-label">ΠΥΡΟΣ. ΣΩΜΑ:</label>
    </div>
    <div class="col-md-4">
        <label class="control-label">ΠΕΖΟΠΟΡΑ ΤΜΗΜΑΤΑ:</label>
    </div>
</div>
<div class="row">
    <div class="col-md-4">
        <div class="row">
            <div class="col-md-2">
                Από:
            </div>
            <div class="col-md-2">
                <p><span id="prosopiko-pirosvestiko-soma-output">0</span></p>
            </div>
            <div class="col-md-8">
                <div class="slidecontainer">
                    <input type="range" min="0" max="745" value="0" class="slider-start" data-type="pirosvestiko_soma" id="prosopiko-pirosvestiko-soma">
                </div>
            </div>
        </div>
    </div>
    
    <div class="col-md-4">
        <div class="row">
            <div class="col-md-2">
                Έως:
            </div>
            <div class="col-md-2">
                <p><span id="prosopiko-pezopora-tmimata-output">0</span></p>
            </div>
            <div class="col-md-8">
                <div class="slidecontainer">
                    <input type="range" min="0" max="265" value="0" class="slider-end" data-type="pezopora_tmimata" id="prosopiko-pezopora-tmimata">
                </div>
            </div>
        </div>
    </div>
</div>
 

<style>
.slidecontainer {
    width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider-start {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

/* Mouse-over effects */
.slider-start:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use webkit (Chrome, Opera, Safari, Edge) and moz (Firefox) to override default look) */ 
.slider-start::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider-start::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider-end {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    width: 100%; /* Full-width */
    height: 25px; /* Specified height */
    background: #d3d3d3; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

/* Mouse-over effects */
.slider-end:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use webkit (Chrome, Opera, Safari, Edge) and moz (Firefox) to override default look) */ 
.slider-end::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider-end::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}
</style>
<!--
<div class="row">    
    <div class="col-md-6">
    {{--  <div class="form-group">  --}}
        <label class="control-label">ΠΥΡΟΣ. ΣΩΜΑ:</label>
        <input id="pirosvestiko_soma" class="form-control" type="number" value="0" min="0" max="745" />
        {{--  <b>0</b> <input id="pirosvestiko_soma_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="745" data-slider-step="5" data-slider-value="[250,450]" data-slider-enabled="false"/> <b>745</b>
        <input id="pirosvestiko_soma_slider_enabled" class="slider_state" type="checkbox"/> Enabled
    </div>  --}}
    {{--  <div class="form-group">  --}}
        <label class="control-label">ΠΕΖΟΠΟΡΑ ΤΜΗΜΑΤΑ:</label>
        <input id="pezopora_tmimata" class="form-control" type="number" value="0" min="0" max="265" />
        {{--  <b>0</b> <input id="pezopora_tmimata_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="265" data-slider-step="5" data-slider-value="[10,200]" data-slider-enabled="false"/> <b>265</b>
        <input id="pezopora_tmimata_slider_enabled" class="slider_state" type="checkbox"/> Enabled
    </div>  --}}
    {{--  <div class="form-group">  --}}
        <label class="control-label">ΕΘΕΛΟΝΤΕΣ:</label>
        <input id="ethelontes" class="form-control" type="number" value="0" min="0" max="80" />
        {{--  <b>0</b> <input id="ethelontes_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="80" data-slider-step="5" data-slider-value="[10,60]" data-slider-enabled="false"/> <b>80</b>
        <input id="ethelontes_slider_enabled" class="slider_state" type="checkbox"/> Enabled
    </div>  --}}
    </div>
</div>
</br>
<div class="row">
    <div class="col-md-6">
    {{--  <div class="form-group">  --}}
        <label class="control-label">ΣΤΡΑΤΟΣ:</label>
        <input id="stratos" class="form-control" type="number" value="0" min="0" max="150" />
        {{--  <b>0</b> <input id="stratos_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="150" data-slider-step="5" data-slider-value="[20,100]" data-slider-enabled="false"/> <b>150</b>
        <input id="stratos_slider_enabled" class="slider_state" type="checkbox"/> Enabled
    </div>  --}}
    {{--  <div class="form-group">  --}}
        <label class="control-label">ΑΛΛΕΣ ΔΥΝΑΜΕΙΣ:</label>
        <input id="alles_dinameis" class="form-control" type="number" value="0" min="0" max="190" />
        {{--  <b>0</b> <input id="alles_dinameis_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="190" data-slider-step="5" data-slider-value="[250,450]" data-slider-enabled="false"/> <b>190</b>
        <input id="alles_dinameis_slider_enabled" class="slider_state" type="checkbox"/> Enabled
    </div>  --}}
    </div>
</div>
-->
