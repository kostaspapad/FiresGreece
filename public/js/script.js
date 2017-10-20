
jQuery(document).ready(function($) {
    $('.datepicker').datepicker();
    $('#timepicker1').timepicker({
        minuteStep: 1,
        showMeridian: false,
        defaultTime: false
    });
    $('#timepicker2').timepicker({
        minuteStep: 1,
        showMeridian: false,
        defaultTime: false
    });
    
    // Kameni ektasi
    $('#dasi').bootstrapNumber();
    $('#dasiki_ektasi').bootstrapNumber();
    $('#alsi').bootstrapNumber();
    $('#xort_ektaseis').bootstrapNumber();
    $('#kalamia_valtoi').bootstrapNumber();
    $('#georgikes_ektaseis').bootstrapNumber();
    $('#ypolimata_kaliergion').bootstrapNumber();
    $('#skoupidotopoi').bootstrapNumber();
    // Prosopiko
    $('#pirosvestiko_soma').bootstrapNumber();
    $('#pezopora_tmimata').bootstrapNumber();
    $('#ethelontes').bootstrapNumber();
    $('#stratos').bootstrapNumber();
    $('#alles_dinameis').bootstrapNumber();
    // Oximata
    $('#pirosvestika_oximata').bootstrapNumber();
    $('#oximata_ota').bootstrapNumber();
    $('#vitiofora').bootstrapNumber();
    $('#mixanimata').bootstrapNumber();
    // Enaeria    
    $('#elikoptera').bootstrapNumber();
    $('#CL415').bootstrapNumber();
    $('#CL215').bootstrapNumber();
    $('#PZL').bootstrapNumber();
    $('#GRU').bootstrapNumber();


    // Sliders
    // With JQuery
    var dasi_slider = new Slider('#dasi_slider', {});
    var dasiki_ektasi_slider = new Slider('#dasiki_ektasi_slider', {});
    var alsi_slider = new Slider('#alsi_slider', {});
    var xort_ektaseis_slider = new Slider('#xort_ektaseis_slider', {});
    var kalamia_valtoi_slider = new Slider('#kalamia_valtoi_slider', {});
    var georgikes_ektaseis_slider = new Slider('#georgikes_ektaseis_slider', {});
    var ypolimata_kaliergion_slider = new Slider('#ypolimata_kaliergion_slider', {});
    var skoupidotopoi_slider = new Slider('#skoupidotopoi_slider', {});
    var pirosvestiko_soma_slider = new Slider('#pirosvestiko_soma_slider', {});
    var pezopora_tmimata_slider = new Slider('#pezopora_tmimata_slider', {});
    var ethelontes_slider = new Slider('#ethelontes_slider', {});
    var stratos_slider = new Slider('#stratos_slider', {});
    var alles_dinameis_slider = new Slider('#alles_dinameis_slider', {});
    var pirosvestika_oximata_slider = new Slider('#pirosvestika_oximata_slider', {});    
    var oximata_ota_slider = new Slider('#oximata_ota_slider', {});    
    var vitiofora_slider = new Slider('#vitiofora_slider', {});    
    var mixanimata_slider = new Slider('#mixanimata_slider', {});    
    var elikoptera_slider = new Slider('#elikoptera_slider', {});
    var CL415_slider = new Slider('#CL415_slider', {});
    var CL215_slider = new Slider('#CL215_slider', {});
    var PZL_slider = new Slider('#PZL_slider', {});
    var GRU_slider = new Slider('#GRU_slider', {});

// With JQuery
 

// Without JQuery
var slider = new Slider("#ex7");

$("#ex7-enabled").click(function() {
	if(this.checked) {
		
		slider.enable();
	}
	else {
		slider.disable();
	}
});


    /* 
     * Run autocomplete
     */
    $("input[name=searchBoxYpiresia]").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "autocomplete",
                dataType: "json",
                data: {
                    q: request.term,
                    f: 'ypiresia'
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            showSuggestionsYpiresia(ui.item ? ui.item.label :this.value);
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    $("input[name=searchBoxNomos]").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "autocomplete",
                dataType: "json",
                data: {
                    q: request.term,
                    f: 'nomos'
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            showSuggestionsNomos(ui.item ? ui.item.label :this.value);
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    $("input[name=searchBoxDasarxio]").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "autocomplete",
                dataType: "json",
                data: {
                    q: request.term,
                    f: 'dasarxio'
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            showSuggestionsDasarxio(ui.item ? ui.item.label :this.value);
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    $("input[name=searchBoxDimos]").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "autocomplete",
                dataType: "json",
                data: {
                    q: request.term,
                    f: 'dimos'
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            showSuggestionsDimos(ui.item ? ui.item.label :this.value);
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    $("input[name=searchBoxPerioxi]").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "autocomplete",
                dataType: "json",
                data: {
                    q: request.term,
                    f: 'perioxi'
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            showSuggestionsPerioxi(ui.item ? ui.item.label :this.value);
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });

    $("input[name=searchBoxDiefthinsi]").autocomplete({
        source: function(request, response) {
            $.ajax({
                url: "autocomplete",
                dataType: "json",
                data: {
                    q: request.term,
                    f: 'diefthinsi'
                },
                success: function(data) {
                    response(data);
                }
            });
        },
        minLength: 1,
        select: function(event, ui) {
            showSuggestionsDiefthinsi(ui.item ? ui.item.label :this.value);
        },
        open: function() {
            $(this).removeClass("ui-corner-all").addClass("ui-corner-top");
        },
        close: function() {
            $(this).removeClass("ui-corner-top").addClass("ui-corner-all");
        }
    });



    $(".clickable-row").click(function() {
        window.location = 'fires/' + this.id;
    });
});

function showSuggestionsYpiresia(message) {
    $("<div>").text(message).prependTo(".searchBoxYpiresia");
    $(".searchBoxYpiresia").scrollTop(0);
}

function showSuggestionsNomos(message) {
    $("<div>").text(message).prependTo(".searchBoxNomos");
    $(".searchBoxNomos").scrollTop(0);
}

function showSuggestionsDasarxio(message) {
    $("<div>").text(message).prependTo(".searchBoxDasarxio");
    $(".searchBoxDasarxio").scrollTop(0);
}

function showSuggestionsDimos(message) {
    $("<div>").text(message).prependTo(".searchBoxDimos");
    $(".searchBoxDimos").scrollTop(0);
}

function showSuggestionsPerioxi(message) {
    $("<div>").text(message).prependTo(".searchBoxPerioxi");
    $(".searchBoxPerioxi").scrollTop(0);
}

function showSuggestionsDiefthinsi(message) {
    $("<div>").text(message).prependTo(".searchBoxDiefthinsi");
    $(".searchBoxDiefthinsi").scrollTop(0);
}
