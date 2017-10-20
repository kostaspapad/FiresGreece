@extends('layouts.app')

@section('content')

    <div class="panel panel-danger">
        <div class="panel-heading">Fires</div>
        <div class="panel-body">
            <div class="table-responsive table-header-rotated">
                <table class="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Δασική Έκταση</th>
                        <th>Άλση</th>
                        <th>Χορτ/κές Εκτάσεις</th>
                        <th>Καλάμια-Βάλτοι</th>
                        <th>Γεωργικές Εκτάσεις</th>
                        <th>Υπολλείματα Καλλιεργειών</th>
                        <th>Σκουπιδότοποι</th>
                        <th>ΠΥΡΟΣ. ΣΩΜΑ</th>
                        <th>ΠΕΖΟΠΟΡΑ ΤΜΗΜΑΤΑ</th>
                        <th>ΕΘΕΛΟΝΤΕΣ</th>
                        <th>ΣΤΡΑΤΟΣ</th>
                        <th>ΑΛΛΕΣ ΔΥΝΑΜΕΙΣ</th>
                        <th>ΠΥΡΟΣ. ΟΧΗΜ</th>
                        <th>ΟΧΗΜ. ΟΤΑ</th>
                        <th>ΒΥΤΙΟ- ΦΟΡΑ</th>
                        <th>ΜΗΧΑΝΗ-ΜΑΤΑ</th>
                        <th>ΕΛΙΚΟ- ΠΤΕΡΑ</th>
                        <th>Α/Φ CL415</th>
                        <th>Α/Φ CL215</th>
                        <th>Α/Φ PZL</th>
                        <th>Α/Φ GRU</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{$fire->dasi}}</td>
                        <td>{{$fire->dasiki_ektasi}}</td>
                        <td>{{$fire->alsi}}</td>
                        <td>{{$fire->xort_ektaseis}}</td>
                        <td>{{$fire->kalamia_valtoi}}</td>
                        <td>{{$fire->georgikes_ektaseis}}</td>
                        <td>{{$fire->ypolimata_kaliergion}}</td>
                        <td>{{$fire->skoupidotopoi}}</td>
                        <td>{{$fire->pirosvestiko_soma}}</td>
                        <td>{{$fire->pezopora_tmimata}}</td>
                        <td>{{$fire->ethelontes}}</td>
                        <td>{{$fire->stratos}}</td>
                        <td>{{$fire->alles_dinameis}}</td>
                        <td>{{$fire->pirosvestika_oximata}}</td>
                        <td>{{$fire->oximata_ota}}</td>
                        <td>{{$fire->vitiofora}}</td>
                        <td>{{$fire->mixanimata}}</td>
                        <td>{{$fire->elikoptera}}</td>
                        <td>{{$fire->CL415}}</td>
                        <td>{{$fire->CL215}}</td>
                        <td>{{$fire->PZL}}</td>
                        <td>{{$fire->GRU}}</td>
                    </tr>
                </tbody>
                </table>
            </div>
            <br>
            <a href="/fires" class="btn btn-default">Go Back</a>
        </div>
    </div>
@endsection


