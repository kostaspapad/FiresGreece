@extends('layouts.app')

@section('content')
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
        <div id="collapseOne" class="panel-collapse collapse in">
            <div class="panel-body">@include('layouts.partials.search')</div>
        </div>
    </div>
<div class="panel panel-danger">
    <div class="panel-heading">Fires</div>
    <div class="panel-body"> 
        @if(count($fires) > 0)
            <table class="table table-hover">
                <thead>
                   <tr>
                    <th>#</th>
                    <th>Υπηρεσία</th>
                    <th>Νομός</th>
                    <th>Δήμος</th>
                    <th>Περιοχή</th>
                    <th>Διεύθυνση</th>
                    <th>Δασαρχείο</th>
                    <th>Ημερ/νία Έναρξης</th>
                    <th>Ώρα Έναρξης</th>
                    <th>Ημερ/νία Κατασβεσης</th>
                    <th>Ώρα Κατάσβεσης</th>
                   </tr>
                    </thead>
                    <tbody>
                     @foreach($fires as $fire)

                        <tr id="{{$fire->id}}" class="clickable-row">
                        <td>{{$fire->id}}</td>
                        @if($fire->ypiresia != '')
                            <td>{{$fire->ypiresia}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->nomos != '')
                            <td>{{$fire->nomos}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->dimos != '')
                            <td>{{$fire->dimos}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->perioxi != '')
                            <td>{{$fire->perioxi}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->diefthinsi != '')
                            <td>{{$fire->diefthinsi}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->dasarxio != '')
                            <td>{{$fire->dasarxio}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->hm_arxi != '')
                            <td>{{$fire->hm_arxi}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->ora_arxi != '')
                            <td>{{$fire->hm_arxi}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->hm_telos != '')
                            <td>{{$fire->hm_telos}}</td>
                        @else
                            <td>-</td>
                        @endif
                        @if($fire->ora_telos != '')
                            <td>{{$fire->ora_telos}}</td>
                        @else
                            <td>-</td>
                        @endif
                    </tr>
                @endforeach
                </tbody>
            </table>
            
            {{--  To make a paginator.Must have paginate function on controller  --}}
            <div class="row">
                <div class="col-md-6">
                    {{$fires->links()}}
                </div>
                <div class="col-md-6">
                    <a href="/fires" class="btn btn-default pull-right">Go Back</a>
                </div>
            </div>
        @else
            <p>No fires found</p>
            <br>
            <a href="/" class="btn btn-default pull-right">Go Back</a>
        @endif
        </div>
    </div> {{-- panel panel-info  --}}
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
</style>