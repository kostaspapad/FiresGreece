<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddGeoDataFieldsToFiresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fires', function(Blueprint $table) {
            $table->string('geo_address_dimos')->nullable();
            $table->string('geo_latitude_dimos')->nullable();
            $table->string('geo_longitude_dimos')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fires', function(Blueprint $table) {
            $table->dropColumn('geo_address_dimos');
            $table->dropColumn('geo_latitude_dimos');
            $table->dropColumn('geo_longitude_dimos');
        });
    }
}
