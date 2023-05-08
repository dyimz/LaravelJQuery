<!DOCTYPE html>
<html>
  <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>VILLAMIN LARAVEL</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      @include('layouts.header')
  </head>
  <body>
    <section>
      <video id="background-video" autoplay loop muted poster="../img/bg.mp4">
        <source src="../img/bg.mp4" type="video/mp4"></video>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="VerticalTab VerticalTab_hash_scroll VerticalTab_6 tabs_ver_6">
              <ul class="resp-tabs-list hor_1">
                @if (Auth::check())
                <li class="tabs-0" data-tab-name=""><span class="tabs-text">Adoptables</span></a></li>
                <li class="tabs-1" data-tab-name=""><span class="tabs-text">Adopted</span></a></li>
                <li class="tabs-2" data-tab-name=""><span class="tabs-text">Animals</span></li>
                <li class="tabs-3" data-tab-name=""><span class="tabs-text">Adopters</span></li>             
                <li class="tabs-4" data-tab-name=""><span class="tabs-text">Disease/Inj</span></li>
                <li class="tabs-5" data-tab-name=""><span class="tabs-text">Rescuers</span></li>
                <li class="tabs-6" data-tab-name=""><span class="tabs-text">Personnels</span></li>
                <li class="tabs-7" data-tab-name=""><span class="tabs-text">Charts</span></li>
                <li><a href="/logout"><span class="tabs-text">LOGOUT</span></a></li>
                @else
                <li class="tabs-0" data-tab-name=""><span class="tabs-text">Home</span></a></li>
                <li><a href="/login"><span class="tabs-text">Login</span></a></li>
                <li><a href="/register"><span class="tabs-text">Register</span></a></li> 
                @endif
              </ul>
              <div class="resp-tabs-container hor_1 tabs_scroll">
                <div class="fc-tab-1">
                <div><h1>................................. JCV ANIMAL SHELTER .................................</h1></div>
                @include('index.landpage')
                </div>
                <div class="fc-tab-1">
                <div><h1>................................. JCV ANIMAL SHELTER .................................</h1></div>
                @include('index.adoptable')
                </div>
                <div class="fc-tab-2">
                  @include('index.animal')
                </div>
                <div class="fc-tab-3">
                  @include('index.adopter')
                </div>
                <div class="fc-tab-4">
                  @include('index.disease_injury')
                </div>
                <div class="fc-tab-5">
                  @include('index.rescuer')
                </div>
                <div class="fc-tab-6">
                @include('index.shelter_personnel')
                </div> 
                <div class="fc-tab-7">
                @include('index.chart')
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</html>


