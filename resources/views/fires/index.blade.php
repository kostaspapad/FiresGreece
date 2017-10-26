@extends('layouts.app')

@section('content')
<div id="map" style="height: 100%; border: 1px solid #AAA;"></div>


<div class="panel-group" id="accordion">
    <div class="panel panel-default" id="panel1">
    <div class="panel-heading">
            <h4 class="panel-title">
    <a data-toggle="collapse" data-target="#collapseOne" 
        href="#collapseOne">
        Search
    </a>
    </h4>

    </div>
    <div id="collapseOne" class="panel-collapse collapse">
        <div class="panel-body">@include('layouts.partials.search')</div>
    </div>
</div>
<div id="panel-container">
<!-- Modal -->
<div id="myModal" class="modal  " tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div class="modal-body"></div>
        </div>
    </div>
</div>
@endsection

<style>
.panel-heading a:after {
    font-family:'Glyphicons Halflings';
    content:"\e114";
    float: right;
    color: grey;
}
.panel-heading a.collapsed:after {
    content:"\e080";
}
@media screen and (min-width: 768px) {
	
	#myModal .modal-dialog  {width:1024px;}

}
#myModal.modal-dialog  {width:100%;}

</style>
{{--  
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
        </table>  --}}