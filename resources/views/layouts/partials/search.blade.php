<div class="well">
    <div class="row">
        <div class="col-md-3">
            <div class="input-group">
                <span class="input-group-addon">Υπηρεσία</span>
                <input type="text" id="ypiresia" name="searchBoxYpiresia" class="form-control" aria-describedby="basic-addon1">
            </div>
        </div>
        <div class="col-md-3">
            <div class="input-group">
                <span class="input-group-addon">Νομός</span>
                <input type="text" id="nomos" name="searchBoxNomos" class="form-control" aria-describedby="basic-addon1">
            </div>
        </div>
        <div class="col-md-3">
            <div class="input-group">
                <span class="input-group-addon">Δήμος</span>
                <input type="text" id="dimos" name="searchBoxDimos" class="form-control" aria-describedby="basic-addon1">
            </div>
        </div>
        <div class="col-md-3">
            <div class="input-group">
                <span class="input-group-addon">Περιοχή</span>
                <input type="text" id="perioxi" name="searchBoxPerioxi" class="form-control" aria-describedby="basic-addon1">
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-3">  
            <div class="input-group">
                <span class="input-group-addon">Δασαρχίο</span>
                <input type="text" id="perioxi" name="searchBoxDasarxio" class="form-control" aria-describedby="basic-addon1">
            </div>
        </div>
        <div class="col-md-3">  
            <div class="input-group">
                <span class="input-group-addon">Διεύθηνση</span>
                <input type="text" id="perioxi" name="searchBoxDiefthinsi" class="form-control" aria-describedby="basic-addon1">
            </div>
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-md-3">
            <div class="input-group">
                <p>Ημερ/νία Έναρξης</p>
                <input id="datepicker1" data-provide="datepicker" data-date-format="yyyy-mm-dd">
            </div>
            <div class="input-group">
                <p>Ημερ/νία Κατασβεσης</p>
                <input id="datepicker2" data-provide="datepicker" data-date-format="yyyy-mm-dd">
            </div>
        </div>
        <div class="col-md-3">
            <p>Ώρα Έναρξης</p>
            <div class="input-group bootstrap-timepicker timepicker">
                <input id="timepicker1" type="text" class="form-control input-small">
                <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            </div>
            <p>Ώρα Κατάσβεσης</p>
            <div class="input-group bootstrap-timepicker timepicker">
                <input id="timepicker2" type="text" class="form-control input-small">
                <span class="input-group-addon"><i class="glyphicon glyphicon-time"></i></span>
            </div>
        </div>
    </div>
    <hr>
    <b>0</b> <input id="ex7" type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="5" data-slider-enabled="false"/>
    <input id="ex7-enabled" type="checkbox"/> Enabled
    <div class="row">
    <div class="col-md-4">
    
        <h4>Καμμένη Έκταση</h4>
       
        <div class="form-group">
            <label class="control-label">Δάση:</label>
            <input id="dasi" class="form-control" type="number" value="0" min="0" max="21800" />
            <b>0</b> <input id="dasi_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="21800" data-slider-step="5" data-slider-value="[250,450]" data-slider-enabled="false"/> <b>21800</b>
            <input id="dasi_slider_enabled" class="slider_state" type="checkbox"/> Enabled
        </div>
        <div class="form-group">
            <label class="control-label">Δασική Έκταση:</label>
            <input id="dasiki_ektasi" class="form-control" type="number" value="0" min="0" max="35000" />
            <b>0</b> <input id="dasiki_ektasi_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="35000" data-slider-step="5" data-slider-value="[250,450]" data-slider-enabled="false"/> <b>35000</b>
            <input id="dasiki_ektasi_slider_enabled" class="slider_state" type="checkbox"/> Enabled
        </div>
        <div class="form-group">
            <label class="control-label">Άλση:</label>
            <input id="alsi" class="form-control" type="number" value="0" min="0" max="100" />
            <b>0</b> <input id="alsi_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="100" data-slider-step="5" data-slider-value="[0,100]"/> <b>100</b>
        </div>
        <div class="form-group">
            <label class="control-label">Χορτ/κές Εκτάσεις:</label>
            <input id="xort_ektaseis" class="form-control" type="number" value="0" min="0" max="13000" />
            <b>0</b> <input id="xort_ektaseis_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="13000" data-slider-step="5" data-slider-value="[250,450]"/> <b>13000</b>
        </div>
        <div class="form-group">
            <label class="control-label">Καλάμια-Βάλτοι:</label>
            <input id="kalamia_valtoi" class="form-control" type="number" value="0" min="0" max="4990" />
            <b>0</b> <input id="kalamia_valtoi_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="4990" data-slider-step="5" data-slider-value="[250,450]"/> <b>4990</b>
        </div>
        <div class="form-group">
            <label class="control-label">Γεωργικές Εκτάσεις:</label>
            <input id="georgikes_ektaseis" class="form-control" type="number" value="0" min="0" max="20000" />
            <b>0</b> <input id="georgikes_ektaseis_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="20000" data-slider-step="5" data-slider-value="[250,450]"/> <b>20000</b>
        </div>
        <div class="form-group">
            <label class="control-label">Υπολλείματα Καλλιεργειών:</label>
            <input id="ypolimata_kaliergion" class="form-control" type="number" value="0" min="0" max="5000" />
            <b>0</b> <input id="ypolimata_kaliergion_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="5000" data-slider-step="5" data-slider-value="[250,450]"/> <b>5000</b>
        </div>
        <div class="form-group">
            <label class="control-label">Σκουπιδότοποι:</label>
            <input id="skoupidotopoi" class="form-control" type="number" value="0" min="0" max="100" />
            <b>0</b> <input id="skoupidotopoi_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="100" data-slider-step="5" data-slider-value="[250,450]"/> <b>100</b>
        </div>
    </div>
    <div class="col-md-4">
        <h4>Προσωπικό</h4>
        <div class="form-group">
            <label class="control-label">ΠΥΡΟΣ. ΣΩΜΑ:</label>
            <input id="pirosvestiko_soma" class="form-control" type="number" value="0" min="0" max="745" />
            <b>0</b> <input id="pirosvestiko_soma_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="745" data-slider-step="5" data-slider-value="[250,450]"/> <b>745</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΠΕΖΟΠΟΡΑ ΤΜΗΜΑΤΑ:</label>
            <input id="pezopora_tmimata" class="form-control" type="number" value="0" min="0" max="265" />
            <b>0</b> <input id="pezopora_tmimata_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="265" data-slider-step="5" data-slider-value="[10,200]"/> <b>265</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΕΘΕΛΟΝΤΕΣ:</label>
            <input id="ethelontes" class="form-control" type="number" value="0" min="0" max="80" />
            <b>0</b> <input id="ethelontes_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="80" data-slider-step="5" data-slider-value="[10,60]"/> <b>80</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΣΤΡΑΤΟΣ:</label>
            <input id="stratos" class="form-control" type="number" value="0" min="0" max="150" />
            <b>0</b> <input id="stratos_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="150" data-slider-step="5" data-slider-value="[20,100]"/> <b>150</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΑΛΛΕΣ ΔΥΝΑΜΕΙΣ:</label>
            <input id="alles_dinameis" class="form-control" type="number" value="0" min="0" max="190" />
            <b>0</b> <input id="alles_dinameis_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="190" data-slider-step="5" data-slider-value="[250,450]"/> <b>190</b>
        </div>
    </div>
    <div class="col-md-4">
        <h4>Οχήματα<h4>
        <div class="form-group">
            <label class="control-label">ΠΥΡΟΣ. ΟΧΗΜ:</label>
            <input id="pirosvestika_oximata" class="form-control" type="number" value="0" min="0" max="324" />
            <b>0</b> <input id="pirosvestika_oximata_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="324" data-slider-step="5" data-slider-value="[100,300]"/> <b>324</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΟΧΗΜ. ΟΤΑ:</label>
            <input id="oximata_ota" class="form-control" type="number" value="0" min="0" max="60" />
            <b>0</b> <input id="oximata_ota_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="60" data-slider-step="5" data-slider-value="[20,40]"/> <b>60</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΒΥΤΙΟ- ΦΟΡΑ:</label>
            <input id="vitiofora" class="form-control" type="number" value="0" min="0" max="15" />
            <b>0</b> <input id="vitiofora_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="15" data-slider-step="5" data-slider-value="[2,10]"/> <b>15</b>
        </div>
        <div class="form-group">
            <label class="control-label">ΜΗΧΑΝΗ-ΜΑΤΑ:</label>
            <input id="mixanimata" class="form-control" type="number" value="0" min="0" max="26" />
            <b>0</b> <input id="mixanimata_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="26" data-slider-step="5" data-slider-value="[4,15]"/> <b>26</b>
        </div>
    </div>
    <div class="col-md-4">
        <h4>Εναέρια</h4>
        <div class="form-group">
            <label class="control-label">ΕΛΙΚΟ- ΠΤΕΡΑ:</label>
            <input id="elikoptera" class="form-control" type="number" value="0" min="0" max="7" />
            <b>0</b> <input id="elikoptera_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="7" data-slider-step="5" data-slider-value="[2,4]"/> <b>7</b>
        </div>
        <div class="form-group">
            <label class="control-label">Α/Φ CL415:</label>
            <input id="CL415" class="form-control" type="number" value="0" min="0" max="10" />
            <b>0</b> <input id="CL415_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="10" data-slider-step="5" data-slider-value="[2,7]"/> <b>10</b>
        </div>
        <div class="form-group">
            <label class="control-label">Α/Φ CL215:</label>
            <input id="CL215" class="form-control" type="number" value="0" min="0" max="20" />
            <b>0</b> <input id="CL215_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="20" data-slider-step="5" data-slider-value="[5,10]"/> <b>20</b>
        </div>
        <div class="form-group">
            <label class="control-label">Α/Φ PZL:</label>
            <input id="PZL" class="form-control" type="number" value="0" min="0" max="12" />
            <b>0</b> <input id="PZL_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="12" data-slider-step="5" data-slider-value="[4,7]"/> <b>12</b>
        </div>
        <div class="form-group">
            <label class="control-label">Α/Φ GRU:</label>
            <input id="GRU" class="form-control" type="number" value="0" min="0" max="4" />
            <b>0</b> <input id="GRU_slider" type="text" class="span2" value="" data-slider-min="0" data-slider-max="4" data-slider-step="5" data-slider-value="[1,2]"/> <b>4</b>
        </div>
    </div>
    </div>
</div>
 
