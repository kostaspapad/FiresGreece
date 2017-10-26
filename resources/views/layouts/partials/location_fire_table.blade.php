<div class="container">
  <div class="table-responsive">          
  <table class="table">
    <thead>
      <tr>
          <th>Υπηρεσία</th>
          <th>Νομός</th>
          <th>Ημερομηνία Αρχής</th>
          <th>Ημερομηνία Τέλους</th>
          <th>Δασαρχείο</th>
          <th>Διεύθηνση</th>
      </tr>
    </thead>
    <tbody>
        @foreach($fires as $fire)
          <tr>
            <td>{{$fire->ypiresia}}</td>
            <td>{{$fire->nomos}}</td>
            <td>{{$fire->hm_arxi}}</td>
            <td>{{$fire->hm_telous}}</td>
            <td>{{$fire->dasarxio}}</td>
            <td>{{$fire->diefthinsi}}</td>
          </tr>
        @endforeach
    </tbody>
  </table>
</div>