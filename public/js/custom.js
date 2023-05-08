$(document).ready(function(){

  
  $('#plTable').DataTable({
    ajax: {
    url :"/api/pet_lover/all",
    dataSrc: "",
    },
    dom: 'frtip',
    searching: false,
    columns: [
      { "data": "type" },
      { "data": "breed" },
      { "data": "name" },
      { "data": "gender" },
      { "data": "age" },
      { "data": "image",
        "render": function (data, type, full, meta) {
          return "<img src=\"" + data + "\" height=\"100\" width=\"100\"/>";
      },orderable: false},
      { "data": "a_fname" },
      { "data": "a_lname" },
      { "data": "date_adopted" }
    ],
  });

  $('#diTable').DataTable({
    ajax: {
    url :"/api/disease_injury/all",
    dataSrc: "",
    },
    dom: 'Bfrtip',
    buttons:[
      {
        text: 'Add Disease/Injury',
        className: 'btn btn-primary',
        action: function ( e, dt, node, config ) {                  
          $("#diForm").trigger("reset");
          $('#diModal').modal('show');
        }
      },
      'colvis','excel','pdf'
    ],
    columns: [
      { "data": "id" },
      { "data": "type" },
      { "data": "dis_inj" },
      { "data": "description" },
      { "data" : null,
        render : function ( data, type, row ) {
          return "<a href='#' data-toggle='modal' data-target='#diEditModal' id='editbtn' data-id="+ data.id + 
          "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id="+ data.id + 
          "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i>";
        }
      }
    ],
  });

  $('#rTable').DataTable({
    ajax: {
    url :"/api/rescuer/all",
    dataSrc: "",
    },
    dom: 'Bfrtip',
    buttons:[
      {
        text: 'Add Rescuer',
        className: 'btn btn-primary',
        action: function ( e, dt, node, config ) {                  
          $("#rForm").trigger("reset");
          $('#rModal').modal('show');
        }
      },
      'colvis','excel','pdf'
    ],
    columns: [
      { "data": "id" },
      { "data": "image",
          "render": function (data, type, full, meta) {
          return "<img src=\"" + data + "\" height=\"100\" width=\"100\"/>";
      },orderable: false},
      { "data": "r_fname" },
      { "data": "r_lname" },
      { "data": "address" },
      { "data": "phone" },
      { "data" : null,
        render : function ( data, type, row ) {
          return "<a href='#' data-toggle='modal' data-target='#rEditModal' id='editbtn' data-id="+ data.id + 
          "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id="+ data.id + 
          "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i>";
        }
      }
    ],
  });

  $('#spTable').DataTable({
    ajax: {
    url :"/api/shelter_personnel/all",
    dataSrc: "",
    },
    dom: 'Bfrtip',
    buttons:[
      {
        text: 'Add Shelter Personnel',
        className: 'btn btn-primary',
        action: function ( e, dt, node, config ) {                  
          $("#spForm").trigger("reset");
          $('#spModal').modal('show');
        }
      },
      'colvis','excel','pdf'
    ],
    columns: [
      { "data": "id" },
      { "data": "image",
          "render": function (data, type, full, meta) {
          return "<img src=\"" + data + "\" height=\"100\" width=\"100\"/>";
      },orderable: false},
      { "data": "p_fname" },
      { "data": "p_lname" },
      { "data": "job_description" },
      { "data": "address" },
      { "data": "phone" },
      { "data" : null,
        render : function ( data, type, row ) {
          return "<a href='#' data-toggle='modal' data-target='#spEditModal' id='editbtn' data-id="+ data.id + 
          "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id="+ data.id + 
          "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i>";
        }
      }
    ],
  });

  $('#adTable').DataTable({
    ajax: {
    url :"/api/adopter/all",
    dataSrc: "",
    },
    dom: 'Bfrtip',
    buttons:[
      'colvis','excel','pdf'
    ],
    columns: [
      { "data": "id" },
      { "data": "a_fname" },
      { "data": "a_lname" },
      { "data": "date_adopted" },
      { "data": "address" },
      { "data": "phone" },
      { "data" : null,
        render : function ( data, type, row ) {
          return "<a href='#' data-toggle='modal' data-target='#adEditModal' id='editbtn' data-id="+ data.id + 
          "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id="+ data.id + 
          "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i>";
        }
      }
    ],
  });

  $('#anTable').DataTable({
    ajax: {
    url :"/api/animal/all",
    dataSrc: "",
    },
    dom: 'Bfrtip',
    buttons:[
      {
        text: 'Add Animal',
        className: 'btn btn-primary',
        action: function ( e, dt, node, config ) {                  
          $("#anForm").trigger("reset");
          $('#anModal').modal('show');
        }
      },
      'colvis','excel','pdf'
    ],
    columns: [
      { "data": "id" },
      { "data": "type" },
      { "data": "breed" },
      { "data": "name" },
      { "data": "gender" },
      { "data": "age" },
      { "data": "date_rescued" },
      { "data": "place_rescued" },
      { "data": "image",
        "render": function (data, type, full, meta) {
          return "<img src=\"" + data + "\" height=\"100\" width=\"100\"/>";
      },orderable: false},
      { "data": "date_checked" },
      { "data": "status" },
      { "data" : null,
        render : function ( data, type, row ) {
          return "<a href='#' data-toggle='modal' data-target='#anEditModal' id='editbtn' data-id="+ data.id + 
          "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id="+ data.id + 
          "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i>";
        }
      }
    ],
  });

  $("#diFormSubmit").on('click', function(e){
    e.preventDefault();
    var data = $("#diForm").serialize();
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/api/disease_injury",
      data: data,
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      dataType: "json",
      success: function(data) {
        console.log(data);
        $("#diModal").modal("hide");
        var $diTable = $('#diTable').DataTable();
        $diTable.row.add(data).draw();
      },
      error: function(error) {
        console.log('error');
      }
    });
  });

  $('#diTable tbody').on( 'click', 'a.deletebtn', function (e){
    var table = $('#diTable').DataTable();
    var id = $(this).data('id');
    var $row = $(this).closest('tr');
    console.log(id);
    e.preventDefault();
    bootbox.confirm({
      message: "Do you want to delete this disease/injury?",
      buttons: {
        confirm: {
          label: 'YES',
          className: 'btn-success'
        },
        cancel: {
          label: 'NO',
          className: 'btn-danger'
        }
      },
      callback: function (result){
        console.log(result);
        if (result)
        $.ajax({
          type: "DELETE",
          url: "/api/disease_injury/"+ id ,
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          dataType: "json",
          success: function(data){
            console.log(data);
            table.row( $row ).remove().draw(false);
            $row.fadeOut(4000, function (){
              table.row( $row ).remove().draw(false);
            });
            bootbox.alert(data.success);
          },
          error: function(error){
            console.log(error);
          }
        });
      }
    });
  });

  $('#diEditModal').on('show.bs.modal', function(e){
    var id = $(e.relatedTarget).attr('data-id');
    console.log(id);
    $("#ediForm").trigger("reset");
    $("#id").val(id);
    $.ajax({
      type: "GET",
      url: "/api/disease_injury/" + id + "/edit",
      success: function(data){
        $("#etype").val(data.type);
        $("#edis_inj").val(data.dis_inj);
        $("#edescription").val(data.description);
      },
      error: function(){
        console.log('AJAX load did not work');
        alert("error");
      }
    });
  });

  $("#diUpdatebtn").on('click', function(e){
    e.preventDefault();
    var id = $('#id').val();
    console.log(id);
    var table = $('#diTable').DataTable();
    var cRow = $("tr td:contains("+id+")").closest('tr');
    var data = $("#ediForm").serialize();
    $.ajax({
      type: "PATCH",
      url: "/api/disease_injury/"+ id,
      data: data,
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      dataType: "json",
      success: function(data){
        console.log(data);
        $('#diEditModal').modal("hide");
        table.row(cRow).data(data).invalidate().draw(false);
      },
      error: function(error) {
        alert('error');
      }
    });
  });

  $("#rFormSubmit").on('click', function(e) {
    e.preventDefault();
    var data = $('#rForm')[0];
    let formData = new FormData($('#rForm')[0]);
    for (var pair of formData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
  }
  $.ajax({
    type: "POST",
    url: "/api/rescuer",
    data: formData,
    contentType: false,
    processData: false,
    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    dataType: "json",
    success: function(data) {
      console.log(data.rescuer.image);
      $("#rModal").modal("hide");
      var img = "<img src="+data.rescuer.image +" width='100px', height='100px'/>";
      var tr = $("<tr>");
      tr.append($("<td>").html(data.rescuer.id));
      tr.append($("<td>").html(img));
      tr.append($("<td>").html(data.rescuer.r_fname));
      tr.append($("<td>").html(data.rescuer.r_lname));
      tr.append($("<td>").html(data.rescuer.address));
      tr.append($("<td>").html(data.rescuer.phone));
      tr.append("<td align='center'><a href='#' data-toggle='modal' data-target='#rEditModal' id='editbtn' data-id="+ data.rescuer.id + "><i class='fa fa-pencil-square-o' aria-hidden='true' style='font-size:24px' ></i></a><a href='#'  class='deletebtn' data-id="+ data.rescuer.id + "><i  class='fa fa-trash-o' style='font-size:24px; color:red' ></a></i></td>");
      var $rtable = $('#rTable').DataTable();
      $rtable.row.add(data.rescuer).draw();
    },
    error: function(error) {
      console.log('error');
    }
  });
  });

  $('#rEditModal').on('show.bs.modal', function(e){
    var id = $(e.relatedTarget).attr('data-id');
    console.log(id);
    $("#erForm").trigger("reset");
    $("#id").val(id);
    $.ajax({
      type: "GET",
      url: "/api/rescuer/" + id + "/edit",
      success: function(data){
        $("#er_fname").val(data.r_fname);
        $("#er_lname").val(data.r_lname);
        $("#eaddress").val(data.address);
        $("#ephone").val(data.phone);
      },
      error: function(){
        console.log('AJAX load did not work');
        alert("error");
      }
    });
  });

  $("#rUpdatebtn").on('click', function(e){
    e.preventDefault();
    var id = $('#id').val();
    console.log(id);
    var table = $('#rTable').DataTable();
    var cRow = $("tr td:contains("+id+")").closest('tr');
    var data = $("#erForm").serialize();
    $.ajax({
      type: "PATCH",
      url: "/api/rescuer/"+ id,
      data: data,
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      dataType: "json",
      success: function(data){
        console.log(data);
        $('#rEditModal').modal("hide");
        table.row(cRow).data(data).invalidate().draw(false);
      },
      error: function(error) {
        alert('error');
      }
    });
  });

  $('#spEditModal').on('show.bs.modal', function(e){
    var id = $(e.relatedTarget).attr('data-id');
    console.log(id);
    $("#espForm").trigger("reset");
    $("#id").val(id);
    $.ajax({
      type: "GET",
      url: "/api/shelter_personnel/" + id + "/edit",
      success: function(data){
        $("#ep_fname").val(data.p_fname);
        $("#ep_lname").val(data.p_lname);
        $("#ejob_description").val(data.job_description);
        $("#eaddress").val(data.address);
        $("#ephone").val(data.phone);
      },
      error: function(){
        console.log('AJAX load did not work');
        alert("error");
      }
    });
  });

  $("#spFormSubmit").on('click', function(e) {
    e.preventDefault();
    var data = $('#spForm')[0];
    let formData = new FormData($('#spForm')[0]);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    $.ajax({
        type: "POST",
        url: "/api/shelter_personnel",
        data: formData,
        contentType: false,
        processData: false,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        dataType: "json", 
        success: function(data) {
          $("#spModal").modal("hide");
          var $sptable = $('#spTable').DataTable();
          $sptable.row.add(data.shelter_personnel).draw();
        },
        error: function(error) {
          console.log('error');
        }
    });
  });

  $("#spUpdatebtn").on('click', function(e){
    e.preventDefault();
    var id = $('#id').val();
    console.log(id);
    var table = $('#spTable').DataTable();
    var cRow = $("tr td:contains("+id+")").closest('tr');
    var data = $("#espForm").serialize();
    $.ajax({
      type: "PATCH",
      url: "/api/shelter_personnel/"+ id,
      data: data,
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      dataType: "json",
      success: function(data){
        console.log(data);
        $('#spEditModal').modal("hide");
        table.row(cRow).data(data).invalidate().draw(false);
      },
      error: function(error) {
        alert('error');
      }
    });
  });

  $('#rTable tbody').on( 'click', 'a.deletebtn', function (e){
    var table = $('#rTable').DataTable();
    var id = $(this).data('id');
    var $row = $(this).closest('tr');
    console.log(id);
    e.preventDefault();
    bootbox.confirm({
      message: "Do you want to delete this rescuer?",
      buttons: {
        confirm: {
          label: 'YES',
          className: 'btn-success'
        },
        cancel: {
          label: 'NO',
          className: 'btn-danger'
        }
      },
      callback: function (result){
        console.log(result);
        if (result)
        $.ajax({
          type: "DELETE",
          url: "/api/rescuer/"+ id ,
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          dataType: "json",
          success: function(data){
            console.log(data);
            table.row( $row ).remove().draw(false);
            $row.fadeOut(4000, function (){
              table.row( $row ).remove().draw(false);
            });
            bootbox.alert(data.success);
          },
          error: function(error){
            console.log(error);
          }
        });
      }
    });
  });

  $('#spTable tbody').on( 'click', 'a.deletebtn', function (e){
    var table = $('#spTable').DataTable();
    var id = $(this).data('id');
    var $row = $(this).closest('tr');
    console.log(id);
    e.preventDefault();
    bootbox.confirm({
      message: "Do you want to delete this shelter personnel?",
      buttons: {
        confirm: {
          label: 'YES',
          className: 'btn-success'
        },
        cancel: {
          label: 'NO',
          className: 'btn-danger'
        }
      },
      callback: function (result){
        console.log(result);
        if (result)
        $.ajax({
          type: "DELETE",
          url: "/api/shelter_personnel/"+ id ,
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          dataType: "json",
          success: function(data){
            console.log(data);
            table.row( $row ).remove().draw(false);
            $row.fadeOut(4000, function (){
              table.row( $row ).remove().draw(false);
            });
            bootbox.alert(data.success);
          },
          error: function(error){
            console.log(error);
          }
        });
      }
    });
  });

  $('#adTable tbody').on( 'click', 'a.deletebtn', function (e){
    var table = $('#adTable').DataTable();
    var id = $(this).data('id');
    var $row = $(this).closest('tr');
    console.log(id);
    e.preventDefault();
    bootbox.confirm({
      message: "Do you want to delete this adopter?",
      buttons: {
        confirm: {
          label: 'YES',
          className: 'btn-success'
        },
        cancel: {
          label: 'NO',
          className: 'btn-danger'
        }
      },
      callback: function (result){
        console.log(result);
        if (result)
        $.ajax({
          type: "DELETE",
          url: "/api/adopter/"+ id ,
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          dataType: "json",
          success: function(data){
            console.log(data);
            table.row( $row ).remove().draw(false);
            $row.fadeOut(4000, function (){
              table.row( $row ).remove().draw(false);
            });
            bootbox.alert(data.success);
          },
          error: function(error){
            console.log(error);
          }
        });
      }
    });
  });

  $('#anTable tbody').on( 'click', 'a.deletebtn', function (e){
    var table = $('#anTable').DataTable();
    var id = $(this).data('id');
    var $row = $(this).closest('tr');
    console.log(id);
    e.preventDefault();
    bootbox.confirm({
      message: "Do you want to delete this animal?",
      buttons: {
        confirm: {
          label: 'YES',
          className: 'btn-success'
        },
        cancel: {
          label: 'NO',
          className: 'btn-danger'
        }
      },
      callback: function (result){
        console.log(result);
        if (result)
        $.ajax({
          type: "DELETE",
          url: "/api/animal/"+ id ,
          headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
          dataType: "json",
          success: function(data){
            console.log(data);
            table.row( $row ).remove().draw(false);
            $row.fadeOut(4000, function (){
              table.row( $row ).remove().draw(false);
            });
            bootbox.alert(data.success);
          },
          error: function(error){
            console.log(error);
          }
        });
      }
    });
  });

  $("#rForm").validate({
    ignore: [],
    rules:{
      r_fname:{
        required: true,
      },
      r_lname:{
        required: true,
      },
      address:{
        required: true,
      },
      phone:{
        required: true,
        number: true,
      }
    },
    messages:{
      r_fname: "First Name is Required!",
      r_lname: "Last Name is Required!",
      address: "Address is Required!",
      phone: {
        required: "Phone is Required!", 
        number: "The field must be a number!"
      }
    }
    // submitHandler: function (form) {
    //   e.preventDefault();
    //   var data = $('#rForm')[0];
    //   let formData = new FormData($('#rForm')[0]);
    //   for (var pair of formData.entries()) {
    //     console.log(pair[0]+ ', ' + pair[1]); 
    //   }
    //   $.ajax({
    //       type: "POST",
    //       url: "/api/rescuer",
    //       data: formData,
    //       contentType: false,
    //       processData: false,
    //       headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    //       dataType: "json", 
    //       success: function(data){
    //         $("#rModal").modal("hide");
    //         var $rtable = $('#rTable').DataTable();
    //         $rtable.row.add(data.rescuer).draw();
    //       },
    //       error: function(error) {
    //         console.log('error');
    //       }
    //   });
    // }
  });

  $("#spForm").validate({
    ignore: [],
    rules:{
      p_fname:{
        required: true,
      },
      p_lname:{
        required: true,
      },
      address:{
        required: true,
      },
      phone:{
        required: true,
        number: true,
      }
    },
    messages:{
      p_fname: "First Name is Required!",
      p_lname: "Last Name is Required!",
      address: "Address is Required!",
      phone: {
        required: "Phone is Required!", 
        number: "The field must be a number!"
      }
    }
  });

  $("#diForm").validate({
    ignore: [],
    rules:{
      dis_inj:{
        required: true,
      },
      description:{
        required: true,
      }
    },
    messages:{
      dis_inj: "Name is Required!",
      description: "Description is Required!",
    }
  });

  $("#anForm").validate({
    ignore: [],
    rules:{
      breed:{
        required: true,
      },
      name:{
        required: true,
      },
      age:{
        required: true,
        number: true,
      },
      place_rescued:{
        required: true,
      }
    },
    messages:{
      breed: "Breed is Required!",
      name: "Name is Required!",
      age: {
        required: "Age is Required!", 
        number: "The field must be a number!"
      },
      place_rescued: "Place Rescued is Required!"
    }
  });

  // $("#rFormSubmit").on('click', function(e) {
  //   e.preventDefault();
  //   var data = $('#rForm')[0];
  //   let formData = new FormData($('#rForm')[0]);
  //   for (var pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  //   }
  //   $.ajax({
  //       type: "POST",
  //       url: "/api/rescuer",
  //       data: formData,
  //       contentType: false,
  //       processData: false,
  //       headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
  //       dataType: "json", 
  //       success: function(data){
  //         $("#rModal").modal("hide");
  //         var $rtable = $('#rTable').DataTable();
  //         $rtable.row.add(data.rescuer).draw();
  //       },
  //       error: function(error) {
  //         console.log('error');
  //       }
  //   });
  // });

  // $("#spFormSubmit").on('click', function(e) {
  //   e.preventDefault();
  //   var data = $('#spForm')[0];
  //   let formData = new FormData($('#spForm')[0]);
  //   for (var pair of formData.entries()) {
  //     console.log(pair[0]+ ', ' + pair[1]); 
  //   }
  //   $.ajax({
  //       type: "POST",
  //       url: "/api/shelter_personnel",
  //       data: formData,
  //       contentType: false,
  //       processData: false,
  //       headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
  //       dataType: "json", 
  //       success: function(data) {
  //         $("#spModal").modal("hide");
  //         var $sptable = $('#spTable').DataTable();
  //         $sptable.row.add(data.shelter_personnel).draw();
  //       },
  //       error: function(error) {
  //         console.log('error');
  //       }
  //   });
  // });

  $("#anFormSubmit").on('click', function(e) {
    e.preventDefault();
    var data = $('#anForm')[0];
    let formData = new FormData($('#anForm')[0]);
    for (var pair of formData.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
    }
    $.ajax({
        type: "POST",
        url: "/api/animal",
        data: formData,
        contentType: false,
        processData: false,
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
        dataType: "json", 
        success: function(data) {
          $("#anModal").modal("hide");
          var $antable = $('#anTable').DataTable();
          $antable.row.add(data.animal).draw();
        },
        error: function(error) {
          console.log('error');
        }
    });
  });

  $('#anEditModal').on('show.bs.modal', function(e){
    var id = $(e.relatedTarget).attr('data-id');
    console.log(id);
    $("#eanForm").trigger("reset");
    $("#id").val(id);
    $.ajax({
      type: "GET",
      url: "/api/animal/" + id + "/edit",
      success: function(data){
        $("#etype").val(data.type);
        $("#ebreed").val(data.breed);
        $("#ename").val(data.name);
        $("#egender").val(data.gender);
        $("#eage").val(data.age);
        $("#edate_rescued").val(data.date_rescued);
        $("#eplace_rescued").val(data.place_rescued);
        $("#edate_checked").val(data.date_checked);
      },
      error: function(){
        console.log('AJAX load did not work');
        alert("error");
      }
    });
  });

  $("#anUpdatebtn").on('click', function(e){
    e.preventDefault();
    var id = $('#id').val();
    console.log(id);
    var table = $('#anTable').DataTable();
    var cRow = $("tr td:contains("+id+")").closest('tr');
    var data = $("#eanForm").serialize();
    $.ajax({
      type: "PATCH",
      url: "/api/animal/"+ id,
      data: data,
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      dataType: "json",
      success: function(data){
        console.log(data);
        $('#anEditModal').modal("hide");
        table.row(cRow).data(data).invalidate().draw(false);
      },
      error: function(error) {
        alert('error');
      }
    });
  });

  $('#adEditModal').on('show.bs.modal', function(e){
    var id = $(e.relatedTarget).attr('data-id');
    console.log(id);
    $("#eadForm").trigger("reset");
    $("#id").val(id);
    $.ajax({
      type: "GET",
      url: "/api/adopter/" + id + "/edit",
      success: function(data){
        $("#ea_fname").val(data.a_fname);
        $("#ea_lname").val(data.a_lname);
        $("#edate_adopted").val(data.date_adopted);
        $("#eaddress").val(data.address);
        $("#ephone").val(data.phone);
      },
      error: function(){
        console.log('AJAX load did not work');
        alert("error");
      }
    });
  });

  $("#adUpdatebtn").on('click', function(e){
    e.preventDefault();
    var id = $('#id').val();
    console.log(id);
    var table = $('#adTable').DataTable();
    var cRow = $("tr td:contains("+id+")").closest('tr');
    var data = $("#eadForm").serialize();
    $.ajax({
      type: "PATCH",
      url: "/api/adopter/"+ id,
      data: data,
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
      dataType: "json",
      success: function(data){
        console.log(data);
        $('#adEditModal').modal("hide");
        table.row(cRow).data(data).invalidate().draw(false);
      },
      error: function(error) {
        alert('error');
      }
    });
  });

  $('#LOGINAjax').on('submit', function(e) {
    $.ajaxSetup({
      headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
    });
  
    e.preventDefault();
    console.log('Submit detected!');
  
    $.post(
      $(this).attr('action'), 
      {
        email: $('#email').val(), 
        password: $('#password').val()
      }, 
      function(response) {
        window.location.href = '/'
      });
  });










  // $("#animalSearch").on('keyup', function(e) {
  //   var term = $("#animalSearch").val();
  //   $.ajax({
  //     type: "GET",
  //     url: "/api/adoptable_animal/search/"+term,
  //     dataType: 'json',
  //     success: function (data) {
  //       console.log(data);
  //       $('#aatable').find('#aabody').detach();
  //       $('#aatable').append($('<tbody id=aabody>')); 
  //       $.each(data, function(key, value) {
  //         console.log(value);
  //         var img = "<img src="+value.image +" width='100px', height='100px'/>";
  //         id = value.id;
  //         var tr = $("<tr>");
  //         tr.append($("<td>").html("<a href='/show/" + value.id + "'>" + value.id + "</a>"));
  //         tr.append($("<td>").html(value.type));
  //         tr.append($("<td>").html(value.breed));
  //         tr.append($("<td>").html(value.name));
  //         tr.append($("<td>").html(value.gender));
  //         tr.append($("<td>").html(value.age));
  //         tr.append($("<td>").html(img));
  //         $("#aabody").append(tr);
  //       });
  //     },
  //     error: function(){
  //       console.log('AJAX load did not work');
  //       alert("error");
  //     }
  //   });
  // });

  
});