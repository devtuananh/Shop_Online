
$(document).ready(function(){
	$("#current_pwd").keyup(function(){
		var current_pwd = $("#current_pwd").val();
		$.ajax({
			type: 'get',
			url: '/admin/check-pwd',
			data: {current_pwd:current_pwd},
			success:function(resp){
				if(resp == "false"){
                     $("#pwdCheck").html("<font color='red'> Incorrect </font>");
				}else if(resp == "true"){
					$("#pwdCheck").html("<font color='green'> Correct </font>");
				}
			},error:function(){
				alert("Error");
			}
		});
	});
	$('input[type=checkbox],input[type=radio],input[type=file]').uniform();
	
	$('select').select2();
	
	// Form Validation
    $("#basic_validate").validate({
		rules:{
			required:{
				required:true
			},
			email:{
				required:true,
				email: true
			},
			date:{
				required:true,
				date: true
			},
			url:{
				required:true,
				url: true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	

	// Add Category Validation
    $("#add_category").validate({
		rules:{
			category_name:{
				required:true
			},
			description:{
				required:true,
			
			},
			
			url:{
				required:true,
			
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

		// Edit Category Validation
		$("#edit_category").validate({
			rules:{
				category_name:{
					required:true
				},
				description:{
					required:true,
				
				},
				
				url:{
					required:true,
				
				}
			},
			errorClass: "help-inline",
			errorElement: "span",
			highlight:function(element, errorClass, validClass) {
				$(element).parents('.control-group').addClass('error');
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).parents('.control-group').removeClass('error');
				$(element).parents('.control-group').addClass('success');
			}
		});

			// Add Product Validation
			$("#add_product").validate({
				rules:{
					category_id:{
						required:true
					},
					product_name:{
						required:true
					},
					product_code:{
						required:true
					},
					product_color:{
						required:true
					},
					price:{
						required:true,
					    number:true
					}
				},
				errorClass: "help-inline",
				errorElement: "span",
				highlight:function(element, errorClass, validClass) {
					$(element).parents('.control-group').addClass('error');
				},
				unhighlight: function(element, errorClass, validClass) {
					$(element).parents('.control-group').removeClass('error');
					$(element).parents('.control-group').addClass('success');
				}
			});

					// Edit Product Validation
					$("#edit_product").validate({
						rules:{
							category_id:{
								required:true
							},
							product_name:{
								required:true
							},
							product_code:{
								required:true
							},
							product_color:{
								required:true
							},
							price:{
								required:true,
								number:true
							}
						},
						errorClass: "help-inline",
						errorElement: "span",
						highlight:function(element, errorClass, validClass) {
							$(element).parents('.control-group').addClass('error');
						},
						unhighlight: function(element, errorClass, validClass) {
							$(element).parents('.control-group').removeClass('error');
							$(element).parents('.control-group').addClass('success');
						}
					});	
	$("#number_validate").validate({
		rules:{
			min:{
				required: true,
				min:10
			},
			max:{
				required:true,
				max:24
			},
			number:{
				required:true,
				number:true
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});
	
	$("#password_validate").validate({
		rules:{
			current_pwd:{
				required: true,
				minlength:6,
				maxlength:20
			},
			new_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				
			},
			confirm_pwd:{
				required:true,
				minlength:6,
				maxlength:20,
				equalTo:"#new_pwd"
			}
		},
		errorClass: "help-inline",
		errorElement: "span",
		highlight:function(element, errorClass, validClass) {
			$(element).parents('.control-group').addClass('error');
		},
		unhighlight: function(element, errorClass, validClass) {
			$(element).parents('.control-group').removeClass('error');
			$(element).parents('.control-group').addClass('success');
		}
	});

    $("#delCat").click(function(){
		
		if(confirm('Bạn có thực sự muốn xóa Cate ?')){
			return true;
		}
		return false;
	});
    /*$("#delProduct").click(function(){
		
		if(confirm('Bạn có thực sự muốn xóa Cate ?')){
			return true;
		}
		return false;
	});
    */
   $(document).on('click','.deleteRecord',function(e){
	   var id = $(this).attr('rel');
	   var deleteFunction = $(this).attr('rel1');
	   swal({
		title: 'Bạn có chắc chắn xóa sản phầm này?',
		type: 'warning',
		showCloseButton: true,
		showCancelButton: true,
		focusConfirm: false,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!',
		cancelButtonText: 'No, cancel!' ,
		confirmButtonClass: 'btn btn-success',
		cancelButtonClass: 'btn btn-danger',
		buttonsStyling: false,
		reverseButtons: true
	  },
	  function(){
           window.location.href="/admin/"+deleteFunction+"/"+id;
	  });
   });
   
});