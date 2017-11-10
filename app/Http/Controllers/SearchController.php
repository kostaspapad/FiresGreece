<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Elasticsearch\ClientBuilder;
use DB;
use App\Fire;
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

        $condition = array();
        
        //dd($request);
        foreach ($request->all() as $key => $value1) {

            // Look for fields that are not date, time or location
            if($key != 'date' && $key != 'time' && $key != 'location'){

                foreach ($value1 as $key2 => $value2){
                    
                    if($value2['low'] != null && $value2['high'] != null){
                        $condition[$key2] = $value2;
                    }

                }

            } else {

                // Here loop for datetime or location fields and if find null dont insert it
                foreach ($value1 as $key => $value){

                    if($value != null){
                        $condition[$key] = $value;
                    }

                }

            }

        }
        
        // $condition = [
        //     "hm_arxi" => "2013-05-18",
        //     #"dasarxio" => "%ΚΑΠΑΝΔΡΙΤΙΟΥ%",
        //     "dimos" => "Δ. ΩΡΩΠΟΥ"
        // ];
        //dd($condition);
        // $query->where([
        //     ['column_1', '=', 'value_1'],
        //     ['column_2', '<>', 'value_2'],
        //     [COLUMN, OPERATOR, VALUE],
        //     ...
        // ]);
        // $f = DB::table('fires')
        // ->select('id',
        //          'hm_arxi',
        //          'hm_telous',
        //          'diefthinsi')
        // ->where([
        //     ['hm_arxi', '>=', '2016-04-05'], ['hm_telous', '<=', '2016-06-05']
        // ])
        // ->get();

        // $condition = array(
        //     'field_1' => '%value_1%',
        //     'field_2' => '%value_2%'
        //  );
        
        // Loop on each value pair and dynamicaly create a where clause
        // If date fields are found insert '<|>' conditions
        // 'dimos' field must not be null.(Can't show null to map)
        $f = DB::table('fires')->select('dimos', 
                                        DB::raw('count(dimos) as total'),
                                        'geo_address_dimos',
                                        'geo_latitude_dimos',
                                        'geo_longitude_dimos')
                               ->whereNotNull('dimos')
                               ->where(function($q) use ($condition){

                                foreach($condition as $key1 => $value1){

                                    if ($key1 == 'ypiresia' || $key1 == 'nomos' || $key1 == 'dimos' || $key1 == 'perioxi' || $key1 == 'dasarxio' || $key1 == 'diefthinsi') {
                                        
                                        $q->where($key1, '=', $value1);

                                    } else if ($key1 == 'hm_arxi'){

                                        $q->where($key1, '>', $value1);

                                    } else if ($key1 == 'hm_telous') {

                                        $q->where($key1, '<', $value1);

                                    } else { // For values that have 'low' and 'high' subfields(the slider fields)
                                        
                                        foreach ($value1 as $key2 => $value2) {

                                            if($key2 == 'low'){

                                                $q->where($key2, '>', $value2);

                                            } else if($key2 == 'high'){

                                                $q->where($key2, '<', $value2);

                                            } else {
                                                break;   
                                            }   
                                        }
                                    }
                                }
                            })
                            ->groupBy('dimos', 'geo_address_dimos', 'geo_latitude_dimos','geo_longitude_dimos')
                            ->get();


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

        //dd($f);
        return response()->json($f);
    }
}



