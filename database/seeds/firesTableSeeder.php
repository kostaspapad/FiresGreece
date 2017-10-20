<?php

use Illuminate\Database\Seeder;
use Flynsarmy\CsvSeeder\CsvSeeder;

class firesTableSeeder extends CsvSeeder
{
    public function __construct()
	{
        $this->table = 'fires';
        $this->insert_chunk_size = 100;
        $this->csv_delimiter = ',';
        $this->mapping = [
            0 => 'id',
            1 =>'ypiresia',
            2 =>'nomos',
            3 =>'hm_arxi',
            4 =>'ora_arxi',
            5 =>'hm_telous',
            6 =>'ora_telous',
            7 =>'dasarxio',
            8 =>'dimos',
            9 =>'perioxi',
            10 =>'diefthinsi',
            11 =>'dasi',
            12 =>'dasiki_ektasi',
            13 =>'alsi',
            14 =>'xort_ektaseis',
            15 =>'kalamia_valtoi',
            16 =>'georgikes_ektaseis',
            17 =>'ypolimata_kaliergion',
            18 =>'skoupidotopoi',
            19 =>'pirosvestiko_soma',
            20 =>'pezopora_tmimata',
            21 =>'ethelontes',
            22 =>'stratos',
            23 =>'alles_dinameis',
            24 =>'pirosvestika_oximata',
            25 =>'oximata_ota',
            26 =>'vitiofora',
            27 =>'mixanimata',
            28 =>'elikoptera',
            29 =>'CL415',
            30 =>'CL215',
            31 =>'PZL',
            32 =>'GRU',
        ];
        $this->filename = base_path().'/database/seeds/csvs/fires13-16.csv';
	}

	public function run()
	{
		// Recommended when importing larger CSVs
		DB::disableQueryLog();

		// Uncomment the below to wipe the table clean before populating
		DB::table($this->table)->truncate();
        
		parent::run();
	}
}
