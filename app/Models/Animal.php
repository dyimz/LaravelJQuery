<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    use HasFactory;
    protected $fillable = ['type', 'breed', 'name', 'gender', 'age', 'date_rescued', 'place_rescued', 'image', 'rescuer_id', 'personnel_id', 'date_checked', 'status'];
    public $timestamps=false;
    protected $guarded = ['id'];

    public function diseaseinjuries()
    {
    	return $this->belongsToMany('App\Models\DiseaseInjury');
    }

    public function shelterpersonnels()
    {
    	return $this->belongsTo('App\Models\ShelterPersonnel');
    }

    public function rescuers()
    {
    	return $this->belongsTo('App\Models\Rescuer');
    }

    public function adopters() 
    {
        return $this->belongsTo('App\Models\Adopter');
    }

    public function getSearchResult(): SearchResult
    {
        $url = route('show', $this->id);
        return new \Spatie\Searchable\SearchResult($this, $this->name, $url);
        // "{$this->type} {$this->name}"
    }
}
