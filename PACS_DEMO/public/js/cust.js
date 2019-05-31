function ValidationEvent() {
	// Storing Field Values In Variables
	var docCat = document.getElementById("docCat").value;
	if (docCat == "") {
		//alert("Select the Document Category");
		demo.initChartist();
		$.notify({
			icon: 'fa fa-exclamation-circle',
			message: "Select the Employee"
		}, {
			type: 'danger',
			timer: 500
		});
		document.getElementById("docCat").focus();
		return false;
	}

	if (docCat == "1" || docCat == "2") {
		var docType = document.getElementById("docType").value;
		if (docType == "") {
			//alert("Select the Document Type");
			demo.initChartist();
			$.notify({
				icon: 'fa fa-exclamation-circle',
				message: "Select the Document Type"
			}, {
				type: 'danger',
				timer: 500
			});
			document.getElementById("docType").focus();
			return false;
		}
		if (docCat == "2") {
			if (docType == "12") {
				var docTypeText = document.getElementById("docTypeText").value;
				if (docTypeText == "") {
					//alert("Enter the Document Description");
					demo.initChartist();
					$.notify({
						icon: 'fa fa-exclamation-circle',
						message: "Enter the Document Description"
					}, {
						type: 'danger',
						timer: 500
					});

					document.getElementById("docTypeText").focus();
					return false;
				} else if (/^([a-zA-Z0-9 - .]+)$/.test(docTypeText) == false) {
					//alert("Special characters are not allowed in Document Description");
					demo.initChartist();
					$.notify({
						icon: 'fa fa-exclamation-circle',
						message: "Special characters are not allowed in Document Description"
					}, {
						type: 'danger',
						timer: 500
					});
					document.getElementById("docTypeText").value = "";
					document.getElementById("docTypeText").focus();
					return false;
				}
			}
		}
	}
	if (docCat == "7" || docCat == "8" || docCat == "4") {
		var docCatText = document.getElementById("docCatText").value;
		if (docCatText == "") {
			if (docCat == "4") {
				//alert("Enter the Company Name");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Enter the Company Name"
				}, {
					type: 'danger',
					timer: 500
				});
			} else {
				//alert("Enter the Document Description");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Enter the Document Description"
				}, {
					type: 'danger',
					timer: 500
				});
			}
			document.getElementById("docCatText").focus();
			return false;
		} else if (/^([a-zA-Z0-9 - .]+)$/.test(docCatText) == false) {
			if (docCat == "4") {
				//alert("Special characters are not allowed in Company Name");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Special characters are not allowed in Company Name"
				}, {
					type: 'danger',
					timer: 500
				});
			} else {
				//alert("Special characters are not allowed in Document Description");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Special characters are not allowed in Document Description"
				}, {
					type: 'danger',
					timer: 500
				});
			}
			document.getElementById("docCatText").value = "";
			document.getElementById("docCatText").focus();
			return false;
		}
	}
	var filename = document.getElementById("uploadDoc").value;
	if (filename == "") {
		//alert("Select the File");
		demo.initChartist();
		$.notify({
			icon: 'fa fa-exclamation-circle',
			message: "Select the File"
		}, {
			type: 'danger',
			timer: 500
		});
		document.getElementById("uploadDoc").focus();
		return false;
	} else if (filename != "") {

		if (docCat == "5") {
			var exten = filename.slice(-4);
			if (exten != ".jpg" && exten != ".JPG" && exten != "jpeg" && exten != "JPEG") {
				//alert("Please upload only JPG or JPEG extension file for Photo");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Please upload only JPG or JPEG extension file for Photo"
				}, {
					type: 'danger',
					timer: 500
				});
				document.getElementById("uploadDoc").focus();
				return false;
			}
			var fileUpload = document.getElementById("uploadDoc");
			if (typeof (fileUpload.files) != "undefined") {
				var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
				if (size > 50 || size < 20) {
					//alert("Photo Size should be between 20 KB and 50 KB");
					demo.initChartist();
					$.notify({
						icon: 'fa fa-exclamation-circle',
						message: "Photo Size should be between 20 KB and 50 KB"
					}, {
						type: 'danger',
						timer: 500
					});
					document.getElementById("uploadDoc").focus();
					return false;
				}
			} else {
				alert("This browser does not support HTML5.");
			}
		} else if (docCat == "6") {
			var exten = filename.slice(-4);
			if (exten != ".doc" && exten != ".DOC" && exten != "docx" && exten != "DOCX") {
				//alert("Please upload only document file for resume");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Please upload only document file for resume"
				}, {
					type: 'danger',
					timer: 500
				});
				document.getElementById("uploadDoc").focus();
				return false;
			}
			var fileUpload = document.getElementById("uploadDoc");
			if (typeof (fileUpload.files) != "undefined") {
				var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
				if (size > 1024) {
					//alert("Document Size should be less than 1 MB");
					demo.initChartist();
					$.notify({
						icon: 'fa fa-exclamation-circle',
						message: "Document Size should be less than 1 MB"
					}, {
						type: 'danger',
						timer: 500
					});
					document.getElementById("uploadDoc").focus();
					return false;
				}
			} else {
				alert("This browser does not support HTML5.");
			}
		} else {
			var exten = filename.slice(-3);
			if (exten != "pdf" && exten != "PDF") {
				//alert("Please upload only pdf files");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Please upload only pdf files"
				}, {
					type: 'danger',
					timer: 500
				});
				document.getElementById("uploadDoc").focus();
				return false;
			}
			var fileUpload = document.getElementById("uploadDoc");
			if (typeof (fileUpload.files) != "undefined") {
				var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
				if (size > 1024) {
					//alert("Document Size should be less than 1 MB");
					demo.initChartist();
					$.notify({
						icon: 'fa fa-exclamation-circle',
						message: "Document Size should be less than 1 MB"
					}, {
						type: 'danger',
						timer: 500
					});
					document.getElementById("uploadDoc").focus();
					return false;
				}
			} else {
				alert("This browser does not support HTML5.");
			}
		}
	}
	return true;
}


var GL = ["PassPort", "Pan Card", "Voter Id", "Driving License", "Aadhar"];
var GV = ["1", "2", "3", "4", "5"];
var EL = ["SSLC", "Pre University", "Semester1", "Semester2", "Semester3", "Semester4", "Semester5", "Semester6", "Semester7", "Semester8", "Degree", "Others"];
var EV = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

function changeCat(firstList) {
	var newSel = document.getElementById("docType");
	//if you want to remove this default option use newSel.innerHTML=""
	newSel.innerHTML = "<option value=\"\">Select the Document Type</option>"; // to reset the second list everytime
	var opt;
	alert(firstList.options[firstList.selectedIndex].value);

	//test according to the selected value
	switch (firstList.options[firstList.selectedIndex].value) {

		case "1":
			document.getElementById('docType').style.display = 'block';
			document.getElementById('docTypeLabel').style.display = 'block';
			document.getElementById('docTypeDiv').style.display = 'block';
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
			document.getElementById('docCatDesc').style.display = 'none';
			document.getElementById('docCatText').style.display = 'none';
			document.getElementById('docCatText').value = "";
			document.getElementById('docCatLabel').style.display = 'none';
			document.getElementById('docExpLabel').style.display = 'none';

			for (var i = 0; len = GL.length, i < len; i++) {
				opt = document.createElement("option");
				opt.value = GV[i];
				opt.text = GL[i];
				newSel.appendChild(opt);
			}
			break;

		case "2":
			document.getElementById('docType').style.display = 'block';
			document.getElementById('docTypeLabel').style.display = 'block';
			document.getElementById('docTypeDiv').style.display = 'block';
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
			document.getElementById('docCatDesc').style.display = 'none';
			document.getElementById('docCatText').style.display = 'none';
			document.getElementById('docCatText').value = "";
			document.getElementById('docCatLabel').style.display = 'none';
			document.getElementById('docExpLabel').style.display = 'none';

			for (var i = 0; len = EL.length, i < len; i++) {
				opt = document.createElement("option");
				opt.value = EV[i];
				opt.text = EL[i];
				newSel.appendChild(opt);
			}
			break;

		case "4":
			document.getElementById('docType').style.display = 'none';
			document.getElementById('docTypeLabel').style.display = 'none';
			document.getElementById('docTypeDiv').style.display = 'none';
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
			document.getElementById('docCatText').value = "";
			document.getElementById('docCatDesc').style.display = 'block';
			document.getElementById('docCatText').style.display = 'block';
			document.getElementById('docCatLabel').style.display = 'none';
			document.getElementById('docExpLabel').style.display = 'block';
			break;

		case "7":
			document.getElementById('docType').style.display = 'none';
			document.getElementById('docTypeLabel').style.display = 'none';
			document.getElementById('docTypeDiv').style.display = 'none';
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
			document.getElementById('docCatText').value = "";
			document.getElementById('docCatDesc').style.display = 'block';
			document.getElementById('docCatText').style.display = 'block';
			document.getElementById('docCatLabel').style.display = 'block';
			document.getElementById('docExpLabel').style.display = 'none';
			break;

		case "8":
			document.getElementById('docType').style.display = 'none';
			document.getElementById('docTypeLabel').style.display = 'none';
			document.getElementById('docTypeDiv').style.display = 'none';
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
			document.getElementById('docCatText').value = "";
			document.getElementById('docCatDesc').style.display = 'block';
			document.getElementById('docCatText').style.display = 'block';
			document.getElementById('docCatLabel').style.display = 'block';
			document.getElementById('docExpLabel').style.display = 'none';
			break;

		default:
			document.getElementById('docType').style.display = 'none';
			document.getElementById('docTypeLabel').style.display = 'none';
			document.getElementById('docTypeDiv').style.display = 'none';
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
			document.getElementById('docCatDesc').style.display = 'none';
			document.getElementById('docCatText').style.display = 'none';
			document.getElementById('docCatText').value = "";
			document.getElementById('docCatLabel').style.display = 'none';
			document.getElementById('docExpLabel').style.display = 'none';
			break;
	}

}

function changeDocText() {

	var docCat = document.getElementById("docCat").value;

	if (docCat == "2") {

		var docType = document.getElementById("docType").value;
		alert(docType)
		if (docType == "12") {
			document.getElementById('docTypeDesc').style.display = 'block';
		} else {
			document.getElementById('docTypeText').value = "";
			document.getElementById('docTypeDesc').style.display = 'none';
		}
	} else {
		document.getElementById('docTypeText').value = "";
		document.getElementById('docTypeDesc').style.display = 'none';
	}
}

function resetform() {
	document.getElementById("uploadForm").reset();
	document.getElementById("magazineUploadForm").reset();
	document.getElementById('member_typ').style.display = 'none';
	document.getElementById('member_id').style.display = 'none';
	document.getElementById('docTypeText').value = "";
	document.getElementById('docTypeDesc').style.display = 'none';
	document.getElementById('docCatDesc').style.display = 'none';
	document.getElementById('docCatText').style.display = 'none';
	document.getElementById('docCatText').value = "";
	document.getElementById('docCatLabel').style.display = 'none';
	document.getElementById('docExpLabel').style.display = 'none';
}

function onloadHide() {
	document.getElementById("uploadForm").reset();
	document.getElementById('docTypeDiv').style.display = 'none';
	document.getElementById('docType').style.display = 'none';
	document.getElementById('docTypeText').value = "";
	document.getElementById('docTypeDesc').style.display = 'none';
	document.getElementById('docCatDesc').style.display = 'none';
	document.getElementById('docCatText').style.display = 'none';
	document.getElementById('docCatText').value = "";
	document.getElementById('docCatLabel').style.display = 'none';
	document.getElementById('docExpLabel').style.display = 'none';
}

function ValidationEvent1() {
	var magYear = document.getElementById("magYear").value;
	if (magYear == "") {
		//alert("Select the Year");
		demo.initChartist();
		$.notify({
			icon: 'fa fa-exclamation-circle',
			message: "Select the Year"
		}, {
			type: 'danger',
			timer: 500
		});
		document.getElementById("magYear").focus();
		return false;
	}

	var d = new Date();
	var currYear = d.getFullYear();
	if (magYear > currYear) {
		//alert("Selected Year should be less than or equal to Current Year");
		demo.initChartist();
		$.notify({
			icon: 'fa fa-exclamation-circle',
			message: "Selected Year should be less than or equal to Current Year"
		}, {
			type: 'danger',
			timer: 500
		});
		document.getElementById("magYear").focus();
		return false;
	}

	var magQuarter = document.getElementById("magQuarter").value;
	if (magQuarter == "") {
		//alert("Select the Quarter");
		demo.initChartist();
		$.notify({
			icon: 'fa fa-exclamation-circle',
			message: "Select the Quarter"
		}, {
			type: 'danger',
			timer: 500
		});
		document.getElementById("magQuarter").focus();
		return false;
	}
	var filename = document.getElementById("uploadDoc").value;
	if (filename == "") {
		//alert("Select the File");
		demo.initChartist();
		$.notify({
			icon: 'fa fa-exclamation-circle',
			message: "Select the File"
		}, {
			type: 'danger',
			timer: 500
		});
		document.getElementById("uploadDoc").focus();
		return false;
	} else if (filename != "") {
		var exten = filename.slice(-4);
		if (exten != ".pdf" && exten != ".PDF") {
			//alert("Please upload only pdf file");
			demo.initChartist();
			$.notify({
				icon: 'fa fa-exclamation-circle',
				message: "Please upload only pdf file"
			}, {
				type: 'danger',
				timer: 500
			});
			document.getElementById("uploadDoc").focus();
			return false;
		}
		var fileUpload = document.getElementById("uploadDoc");
		if (typeof (fileUpload.files) != "undefined") {
			var size = parseFloat(fileUpload.files[0].size / 1024).toFixed(2);
			if (size > 30720) {
				//alert("Document Size should be less than 30 MB");
				demo.initChartist();
				$.notify({
					icon: 'fa fa-exclamation-circle',
					message: "Document Size should be less than 30 MB"
				}, {
					type: 'danger',
					timer: 500
				});
				document.getElementById("uploadDoc").focus();
				return false;
			}
		} else {
			alert("This browser does not support HTML5.");
		}
	}
	return true;
}

function onLoadCalc() {
	var currentYr = new Date().getFullYear();
	var max = currentYr + 1;
	var min = 2016;
	var select = document.getElementById('magYear');

	for (var i = min; i <= max; i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		select.appendChild(opt);
	}
}

// Bootstrap 4 Notification
$(function () {
	$("#notif").on("click", function () {
		$.notify({
			title: '<strong>Bootstrap 4 Notify</strong>',
			message: "Working normally"
		}, {
			type: 'danger',
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			},
			placement: {
				from: "top",
				align: "right"
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
		});
	});

});

