<div class="container">
  <div class="table-responsive">          
  <table class="table">
    <thead>
      <tr>
          <th>Ημερομηνία Αρχής</th>
          <th>Ημερομηνία Τέλους</th>
          <th>Διεύθηνση</th>
      </tr>
    </thead>
    <tbody>
        @foreach($fires as $fire)
          <tr>
            <td>{{$fire->hm_arxi}}</td>
            <td>{{$fire->hm_telous}}</td>
            <td>{{$fire->diefthinsi}}</td>
          </tr>
        @endforeach
    </tbody>
  </table>
</div>