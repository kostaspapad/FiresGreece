<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Elasticsearch\ClientBuilder;
use DB;
class SearchController extends Controller
{
    public function autoComplete(Request $request){
    //    dd($request);

       // Get user input
       $searchTerm = $request->input('q');
       $field = $request->input('f');

       // Use bool query to match, also the should match keyword is increasing
       // the score of the match if is successfull
       $params = [
           'index' => 'fires',
           'type' => 'fire',
           'body' => [
               'query' => [
                   'bool' => [
                       'must' => [
                            'match' => [
                                $field . '.autocomplete' => $searchTerm
                            ]
                       ],
                       'should' => [
                            'match' => [
                                $field => $searchTerm
                            ]
                       ]
                   ]
                ],
                '_source' => [
                    $field
                ]
            ]
        ];
        // {
        //     "query": {
        //       "bool": {
        //         "must": {
        //           "match": {
        //             "nomos.autocomplete": "Δ. ΒΥ"
        //           }
        //         }
        //       }
        //     },
        //     "_source":["nomos"]
        //   }
        $client = ClientBuilder::create()->build();
        $response = $client->search($params);
        
        // If client return data return data else return 0
        if($response['hits']['total'] !== 0){

            // Get hits
            $hits = count($response['hits']['hits']);

            // Init i, result
            $result = null;
            $i = 0;
        
            // Loop for every hit and insert _source data to $autocomplete_response
            while ($i < $hits) {
                $autocomplete_response[$i] = $response['hits']['hits'][$i]['_source'][$field];
                $i++;
            }
            // dd($autocomplete_response);
            return $autocomplete_response;

        } else {
            return 0;
        }
    }

    public function searchfires(Request $request){
        // $date = $request->input('date');   // -> na erxete me allo format yyyy-mm-dd
        // $time = $request->input('time');

        $query = array();
        
        // dd($request);
        foreach ($request->all() as $key => $value1) {
            // Look for fields that are not date or time
            if($key != 'date' && $key != 'time'){
                foreach ($value1 as $key2 => $value2){
                    
                    if($value2['low'] != null && $value2['high'] != null){
                        $query[$key2] = $value2;
                    }
                }
            } else {
                // Here loop for datetime fields and if find null dont insert it
                foreach ($value1 as $datekey => $value){
                    if($value != null){
                        $query[$datekey] = $value;
                    }
                }
            }
        }
        dd($query);
        // $f = DB::table('fires')
        //         ->select('dimos', 
        //                 DB::raw('count(dimos) as total'),
        //                 'geo_address_dimos',
        //                 'geo_latitude_dimos',
        //                 'geo_longitude_dimos')
        //         ->whereNotNull('dimos')
        //         ->where($query)
        //         ->groupBy('dimos', 'geo_address_dimos', 'geo_latitude_dimos','geo_longitude_dimos')
        //         ->get();
        // return response()->json($f);
    }
}
