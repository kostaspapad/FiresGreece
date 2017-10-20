<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Elasticsearch\ClientBuilder;

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
}
