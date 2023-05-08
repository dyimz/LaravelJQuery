<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use View;

class ChartController extends Controller
{
    public function index()
    {
        return View::make('index.chart');
    }
}
