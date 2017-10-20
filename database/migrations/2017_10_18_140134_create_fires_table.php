<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFiresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fires', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->string('ypiresia')->nullable();
            $table->string('nomos')->nullable();
            $table->date('hm_arxi')->nullable();
            $table->time('ora_arxi')->nullable();
            $table->date('hm_telous')->nullable();
            $table->time('ora_telous')->nullable();
            $table->string('dasarxio')->nullable();
            $table->string('dimos')->nullable();
            $table->string('perioxi')->nullable();
            $table->string('diefthinsi')->nullable();
            $table->decimal('dasi', 7, 2)->nullable();
            $table->decimal('dasiki_ektasi', 7, 2)->nullable();
            $table->decimal('alsi', 7, 2)->nullable();
            $table->decimal('xort_ektaseis', 7, 2)->nullable();
            $table->decimal('kalamia_valtoi', 7, 2)->nullable();
            $table->decimal('georgikes_ektaseis', 7, 2)->nullable();
            $table->decimal('ypolimata_kaliergion', 7, 2)->nullable();
            $table->decimal('skoupidotopoi', 7, 2)->nullable();
            $table->decimal('pirosvestiko_soma', 7, 2)->nullable();
            $table->decimal('pezopora_tmimata', 7, 2)->nullable();
            $table->decimal('ethelontes', 7, 2)->nullable();
            $table->decimal('stratos', 7, 2)->nullable();
            $table->decimal('alles_dinameis', 7, 2)->nullable();
            $table->decimal('pirosvestika_oximata', 7, 2)->nullable();
            $table->decimal('oximata_ota', 7, 2)->nullable();
            $table->decimal('vitiofora', 7, 2)->nullable();
            $table->decimal('mixanimata', 7, 2)->nullable();
            $table->decimal('elikoptera', 7, 2)->nullable();
            $table->decimal('CL415', 7, 2)->nullable();
            $table->decimal('CL215', 7, 2)->nullable();
            $table->decimal('PZL', 7, 2)->nullable();
            $table->decimal('GRU', 7, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fires');
    }
}
