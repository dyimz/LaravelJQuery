<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animal;
use App\Models\Rescuer;
use App\Models\DiseaseInjury;
use App\Models\ShelterPersonnel;
use Storage;
use DB;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $rescuer = Rescuer::pluck('r_lname', 'id');
        $disease_injury = DiseaseInjury::pluck('dis_inj', 'id');
        $personnel = ShelterPersonnel::pluck('p_lname', 'id');
        $animals = DB::table('animals')->leftJoin('adopted_animal', 'animals.id', 'adopted_animal.animal_id')->select('animals.*')->where('status', 'adoptable')->get();
       
        return view('layouts.base', compact('rescuer', 'disease_injury', 'personnel','animals'));
    }
}
