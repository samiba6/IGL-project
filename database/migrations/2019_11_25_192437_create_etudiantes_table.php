<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEtudiantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('etudiantes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->String('nom');
            $table->String('prenom');
            $table->String('adress');
            $table->String('LieuNaissance');
            $table->string('datedenaissance');
            $table->string('NumTelephone');
            $table->string('PieceIdentite');
           
            $table->integer('Compte_idCompte');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('etudiantes');
    }
}
