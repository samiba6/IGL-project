<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Etudiante;
class Etudiantcontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { $students=Etudiante::all();
        return view('inscription.listeetud')->with('students',$students);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('inscription.inscription');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { $Student= new Etudiante;
        $Student->nom=$request->nom;
        $Student->prenom=$request->pernom;    
        $Student->adress=$request->adress;
        $Student->LieuNaissance=$request->Lieudenaissance;
        $Student->datedenaissance=$request->Datedenaissance;
        $Student->NumTelephone=$request->numdetelephon;
        $Student->PieceIdentite=$request->pieceiden;
        
        $Student->save();
        return redirect()->back(); 	
    
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
