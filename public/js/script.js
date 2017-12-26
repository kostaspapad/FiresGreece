
jQuery(document).ready(function($) {
    
    initMap();

    var formData = null;
    // var locationSearch = {
    //     "ypiresia": null,
    //     "nomos": null,
    //     "dimos": null,
    //     "perioxi": null,
    //     "dasarxio": null,
    //     "diefthinsi": null
    // }
    
    var datetimeSearch = {
        "hm_arxi": null,
        "ora_arxi": null,
        "hm_telous": null,
        "ora_telous": null
    }

    // var burnedLandSearch = {
    //     "dasi": {
    //         "low": null,
    //         "high": null
    //     },
    //     "dasiki_ektasi": {
    //         "low": null,
    //         "high": null
    //     },
    //     "alsi": {
    //         "low": null,
    //         "high": null
    //     },
    //     "xort_ektaseis": {
    //         "low": null,
    //         "high": null
    //     },
    //     "kalamia_valtoi": {
    //         "low": null,
    //         "high": null
    //     },
    //     "georgikes_ektaseis": {
    //         "low": null,
    //         "high": null
    //     },
    //     "ypolimata_kaliergion": {
    //         "low": null,
    //         "high": null
    //     },
    //     "skoupidotopoi": {
    //         "low": null,
    //         "high": null
    //     }
    // }

    // var humanResourcesSearch = {
    //     "pirosvestiko_soma":{
    //         "low": null,
    //         "high": null
    //     },
    //     "pezopora_tmimata":{
    //         "low": null,
    //         "high": null
    //     },
    //     "ethelontes":{
    //         "low": null,
    //         "high": null
    //     },
    //     "stratos":{
    //         "low": null,
    //         "high": null
    //     },
    //     "alles_dinameis":{
    //         "low": null,
    //         "high": null
    //     }
    // }

    // var landVehiclesSearch = {
    //     "pirosvestika_oximata": null,
    //     "oximata_ota": null,
    //     "vitiofora": null,
    //     "mixanimata": null
    // }

    // var airVehiclesSearch = {
    //     "elikoptera": null,
    //     "CL415": null,
    //     "CL215": null,
    //     "PZL": null,
    //     "GRU": null
    // }

    // var dasi_slider = document.getElementById('dasi'),
    //     dasiki_ektasi_slider = document.getElementById('dasiki-ektasi'),
    //     alsi_slider = document.getElementById('alsi'),
    //     xort_ektaseis_slider = document.getElementById('xort-ektaseis'),
    //     kalamia_valtoi_slider = document.getElementById('kalamia-valtoi'),
    //     georgikes_ektaseis_slider = document.getElementById('georgikes-ektaseis'),
    //     ypolimata_kaliergion_slider = document.getElementById('ypolimata-kaliergion'),
    //     skoupidotopoi_slider = document.getElementById('skoupidotopoi'),

    //     pirosvestiko_soma_slider = document.getElementById('pirosvestiko-soma'),
    //     pezopora_tmimata_slider = document.getElementById('pezopora-tmimata'),
    //     ethelontes_slider = document.getElementById('ethelontes'),
    //     stratos_slider = document.getElementById('stratos'),
    //     alles_dinameis_slider = document.getElementById('alles-dinameis'),

    //     pirosvestika_oximata_slider = document.getElementById('pirosvestika-oximata'),
    //     oximata_ota_slider = document.getElementById('oximata-ota'),
    //     vitiofora_slider = document.getElementById('vitiofora'),
    //     mixanimata_slider = document.getElementById('mixanimata');


//     noUiSlider.create(dasi_slider, {
//         start: [ 4000, 17000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 21800 ]
//         }
//     });
//     var dasi_nodes = [
//         document.getElementById('dasi-output-min'),
//         document.getElementById('dasi-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     dasi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         dasi_nodes[handle].innerHTML = values[handle];
//         values = dasi_slider.noUiSlider.get();
        
//         burnedLandSearch.dasi.low = values[0];
//         burnedLandSearch.dasi.high = values[1];
//         console.log('dasi:low:'+burnedLandSearch.dasi.low);
//         console.log('dasi:high:'+burnedLandSearch.dasi.high);
//     });




//     noUiSlider.create(dasiki_ektasi_slider, {
//         start: [ 4000, 25000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 35000 ]
//         }
//     });
//     var dasiki_ektasi_nodes = [
//         document.getElementById('dasiki-ektasi-output-min'),
//         document.getElementById('dasiki-ektasi-output-max')
//     ];

//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     dasiki_ektasi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         dasiki_ektasi_nodes[handle].innerHTML = values[handle];
//         values = dasiki_ektasi_slider.noUiSlider.get();
        
//         burnedLandSearch.dasiki_ektasi.low = values[0];
//         burnedLandSearch.dasiki_ektasi.high = values[1];
//         console.log('dasikiektasi:low:'+burnedLandSearch.dasiki_ektasi.low);
//         console.log('dasikiektasi:high:'+burnedLandSearch.dasiki_ektasi.high);
//     });





//     noUiSlider.create(alsi_slider, {
//         start: [ 15, 64 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 100 ]
//         }
//     });
//     var alsi_nodes = [
//         document.getElementById('alsi-output-min'),
//         document.getElementById('alsi-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     alsi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         alsi_nodes[handle].innerHTML = values[handle];
//         values = alsi_slider.noUiSlider.get();
        
//         burnedLandSearch.alsi.low = values[0];
//         burnedLandSearch.alsi.high = values[1];
//         console.log('alsi:low:'+burnedLandSearch.alsi.low);
//         console.log('alsi:high:'+burnedLandSearch.alsi.high);
//     });




//     noUiSlider.create(xort_ektaseis_slider, {
//         start: [ 2000, 8200 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 13000 ]
//         }
//     });
//     var xort_ektaseis_nodes = [
//         document.getElementById('xort-ektaseis-output-min'),
//         document.getElementById('xort-ektaseis-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     xort_ektaseis_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         xort_ektaseis_nodes[handle].innerHTML = values[handle];
//         values = xort_ektaseis_slider.noUiSlider.get();
        
//         burnedLandSearch.xort_ektaseis.low = values[0];
//         burnedLandSearch.xort_ektaseis.high = values[1];
//         console.log('xort_ektaseis:low:'+burnedLandSearch.xort_ektaseis.low);
//         console.log('xort_ektaseis:high:'+burnedLandSearch.xort_ektaseis.high);
//     });




//     noUiSlider.create(kalamia_valtoi_slider, {
//         start: [ 700, 3000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 4990 ]
//         }
//     });
//     var kalamia_valtoi_nodes = [
//         document.getElementById('kalamia-valtoi-output-min'),
//         document.getElementById('kalamia-valtoi-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     kalamia_valtoi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         kalamia_valtoi_nodes[handle].innerHTML = values[handle];
//         values = kalamia_valtoi_slider.noUiSlider.get();
        
//         burnedLandSearch.kalamia_valtoi.low = values[0];
//         burnedLandSearch.kalamia_valtoi.high = values[1];
//         console.log('kalamia_valtoi:low:'+burnedLandSearch.kalamia_valtoi.low);
//         console.log('kalamia_valtoi:high:'+burnedLandSearch.kalamia_valtoi.high);
//     });




//     noUiSlider.create(georgikes_ektaseis_slider, {
//         start: [ 2400, 13000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 20000 ]
//         }
//     });
//     var georgikes_ektaseis_nodes = [
//         document.getElementById('georgikes-ektaseis-output-min'),
//         document.getElementById('georgikes-ektaseis-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     georgikes_ektaseis_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         georgikes_ektaseis_nodes[handle].innerHTML = values[handle];
//         values = georgikes_ektaseis_slider.noUiSlider.get();
        
//         burnedLandSearch.georgikes_ektaseis.low = values[0];
//         burnedLandSearch.georgikes_ektaseis.high = values[1];
//         console.log('georgikes_ektaseis:low:'+burnedLandSearch.georgikes_ektaseis.low);
//         console.log('georgikes_ektaseis:high:'+burnedLandSearch.georgikes_ektaseis.high);
//     });





//     noUiSlider.create(ypolimata_kaliergion_slider, {
//         start: [ 650, 3000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 5000 ]
//         }
//     });
//     var ypolimata_kaliergion_nodes = [
//         document.getElementById('ypolimata-kaliergion-output-min'),
//         document.getElementById('ypolimata-kaliergion-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     ypolimata_kaliergion_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         ypolimata_kaliergion_nodes[handle].innerHTML = values[handle];
//         values = ypolimata_kaliergion_slider.noUiSlider.get();
        
//         burnedLandSearch.ypolimata_kaliergion.low = values[0];
//         burnedLandSearch.ypolimata_kaliergion.high = values[1];
//         console.log('ypolimata_kaliergion:low:'+burnedLandSearch.ypolimata_kaliergion.low);
//         console.log('ypolimata_kaliergion:high:'+burnedLandSearch.ypolimata_kaliergion.high);
//     });





//     noUiSlider.create(skoupidotopoi_slider, {
//         start: [ 10, 60 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 100 ]
//         }
//     });
//     var skoupidotopoi_nodes = [
//         document.getElementById('skoupidotopoi-output-min'),
//         document.getElementById('skoupidotopoi-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     skoupidotopoi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         skoupidotopoi_nodes[handle].innerHTML = values[handle];
//         values = skoupidotopoi_slider.noUiSlider.get();
        
//         burnedLandSearch.skoupidotopoi.low = values[0];
//         burnedLandSearch.skoupidotopoi.high = values[1];
//         console.log('skoupidotopoi:low:'+burnedLandSearch.skoupidotopoi.low);
//         console.log('skoupidotopoi:high:'+burnedLandSearch.skoupidotopoi.high);
//     });


// //---------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------
// //---------------------------------------------------------------------------------

//     noUiSlider.create(pirosvestiko_soma_slider, {
//         start: [ 4000, 17000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 21800 ]
//         }
//     });
//     var pirosvestiko_soma_nodes = [
//         document.getElementById('pirosvestiko-soma-output-min'),
//         document.getElementById('pirosvestiko-soma-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     pirosvestiko_soma_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         pirosvestiko_soma_nodes[handle].innerHTML = values[handle];
//         values = pirosvestiko_soma_slider.noUiSlider.get();
        
//         humanResourcesSearch
//         .pirosvestiko_soma.low = values[0];
//         humanResourcesSearch
//         .pirosvestiko_soma.high = values[1];
//     });



//     noUiSlider.create(pezopora_tmimata_slider, {
//         start: [ 4000, 25000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 35000 ]
//         }
//     });
//     var pezopora_tmimata_nodes = [
//         document.getElementById('pezopora-tmimata-output-min'),
//         document.getElementById('pezopora-tmimata-output-max')
//     ];

//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     pezopora_tmimata_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         pezopora_tmimata_nodes[handle].innerHTML = values[handle];
//         values = pezopora_tmimata_slider.noUiSlider.get();
        
//         humanResourcesSearch
//         .pezopora_tmimata.low = values[0];
//         humanResourcesSearch
//         .pezopora_tmimata.high = values[1];
//     });





//     noUiSlider.create(ethelontes_slider, {
//         start: [ 15, 64 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 100 ]
//         }
//     });
//     var ethelontes_nodes = [
//         document.getElementById('ethelontes-output-min'),
//         document.getElementById('ethelontes-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     ethelontes_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         ethelontes_nodes[handle].innerHTML = values[handle];
//         values = ethelontes_slider.noUiSlider.get();
        
//         humanResourcesSearch
//         .ethelontes.low = values[0];
//         humanResourcesSearch
//         .ethelontes.high = values[1];
//     });




//     noUiSlider.create(stratos_slider, {
//         start: [ 2000, 8200 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 13000 ]
//         }
//     });
//     var stratos_nodes = [
//         document.getElementById('stratos-output-min'),
//         document.getElementById('stratos-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     stratos_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         stratos_nodes[handle].innerHTML = values[handle];
//         values = stratos_slider.noUiSlider.get();
        
//         humanResourcesSearch
//         .stratos.low = values[0];
//         humanResourcesSearch
//         .stratos.high = values[1];
//     });




//     noUiSlider.create(alles_dinameis_slider, {
//         start: [ 700, 3000 ],
//         format: wNumb({
//             decimals: 0,
//         }),
//         range: {
//             'min': [  0 ],
//             'max': [ 4990 ]
//         }
//     });
//     var alles_dinameis_nodes = [
//         document.getElementById('alles-dinameis-output-min'),
//         document.getElementById('alles-dinameis-output-max')
//     ];
    
//     // Display the slider value and how far the handle moved
//     // from the left edge of the slider.
//     alles_dinameis_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
//         alles_dinameis_nodes[handle].innerHTML = values[handle];
//         values = alles_dinameis_slider.noUiSlider.get();
        
//         humanResourcesSearch
//         .alles_dinameis.low = values[0];
//         humanResourcesSearch
//         .alles_dinameis.high = values[1];
//     });



    $( "#resetBtn" ).click(function() {
        resetSearch();
    });


    $( "#searchBtn" ).click(function() {
        // console.log(locationSearch);
        // console.log(datetimeSearch);
        // console.log(burnedLandSearch);
        // console.log(humanResourcesSearch);
        // console.log(landVehiclesSearch);
        // console.log(airVehiclesSearch);
        
        
        console.log('in search:' + burnedLandSearch);
        // TODO DONT EXECUTE IF USER INPUT NO VALUES
        // Execute ajax request for user search
        $.ajax({
            type: 'POST',
            url: 'searchfires',
            data: getSearchData(),
            dataType: 'json',
    
            // If request is successfull
            success: function (response) {
                //console.log(response);
                
                //$("#panel-container").html(response);
                updateMap(response);
            },
            // If request was not successfull
            error: function (response) {
                console.log('ajax error');
            }
        });
    });
        
    $('#rangepicker').daterangepicker({
        showDropdowns: true,
        minDate: '02/01/2013',
        maxDate: '12/29/2017',
        timePicker: true,
        timePicker24Hour: true,
        timePickerIncrement: 10,
        autoUpdateInput: true,
        locale: {
            cancelLabel: 'Προεπιλογή',
            format: 'MM-DD-YYYY HH:mm',
            applyLabel: 'Καταχώριση',
            fromLabel: 'Από',
            toLabel: 'Μέχρι',
            customRangeLabel: 'Custom Range',
            //daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
            daysOfWeek: ['Δευ', 'Τρ', 'Τετ', 'Πεμ', 'Παρ', 'Σαβ','Κυρ'],
            //monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthNames: ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαι', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπτ', 'Οκτ', 'Νοεμ', 'Δεκ'],
            firstDay: 0
        }
    });
    
    // When apply btn is pressed on datepicker
    $('#rangepicker').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY HH:mm') + ' - ' + picker.endDate.format('MM/DD/YYYY HH:mm'));
        
        datetimeSearch.hm_arxi = picker.startDate.format('YYYY-MM-DD');
        datetimeSearch.hm_telous = picker.endDate.format('YYYY-MM-DD');
        
        timeStart = picker.startDate.format('HH:mm');
        timeEnd = picker.endDate.format('HH:mm');

        if(timeStart != '00:00'){
            datetimeSearch.ora_arxi = picker.startDate.format('HH:mm');
        } else {
            datetimeSearch.ora_arxi = null;
        }

        // 23:00 is the default
        if(timeEnd != '00:00'){
            datetimeSearch.ora_telous = picker.endDate.format('HH:mm');
        } else {
            datetimeSearch.ora_telous = null;
        }

        console.log(datetimeSearch);
    });

    // When cancel btn is pressed on datepicker
    $('#rangepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        datetimeSearch.hm_arxi = null;
        datetimeSearch.ora_arxi = null;
        datetimeSearch.hm_telous = null;
        datetimeSearch.ora_telous = null;
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


/*create array:*/
//var marker = new Array();

/*Some Coordinates (here simulating somehow json string)*/
//var items = [];

var southWest = L.latLng(40.712, -74.227),  
northEast = L.latLng(40.774, -74.125),
mybounds = L.latLngBounds(southWest, northEast);


var myLayer = L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
});

// var map = L.map( 'map', {
//     center: [38.0, 25.0],
//     minZoom: 7,
//     maxZoom: 15,
//     zoom: 6,
// });
var map = L.map('map')
.setView([38.0, 25.0], 7)
.addLayer(myLayer);
    
var markers = new L.FeatureGroup();

//   var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )
map.addLayer(markers);

var myIcon = L.icon({
    maxBounds: mybounds,
    iconUrl: 'images/flame2.png',
    iconRetinaUrl: 'images/flame2.png',
    iconSize: [29, 24],
    iconAnchor: [9, 21],
    popupAnchor: [0, -14]
});

function initMap(){
    
      // Use this else the server responds with error status code 419
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // Execute ajax request
    $.ajax({
        type: 'GET',
        url: 'initgeodata',
        dataType: 'json',

        // If request is successfull
        success: function (response) {
            console.log(response);
            
            // Create popup for fire. Has onclick method for ajax request moreFireInfo()
            for ( var i=0; i < response.length; ++i ){
                var a = '<a onclick="moreFireInfo(\'' +  String(response[i].dimos) + '\')">' + String(response[i].geo_address_dimos) + '\nTotal: ' + String(response[i].total) + '</a>'
                // Create marker object save it to a global array so when the must is updated to delete the marker
                var LamMarker = new L.marker([response[i].geo_latitude_dimos, response[i].geo_longitude_dimos], {icon: myIcon});
                //marker.push(LamMarker);
                
                // Create marker to map
                //marker[i].bindPopup(a).addTo(map);
                
                //LamMarker.bindPopup(a);
                markers.addLayer(LamMarker);
            }
        },

        // If request was not successfull
        error: function (response) {
            console.log(response);
        }
    });    
}

function moreFireInfo(dimos){
    var formData = {
        loc: dimos
    }
    // Execute ajax request
    $.ajax({
        type: 'POST',
        url: 'getcitiesdimos',
        data: formData,
        dataType: 'html',

        // If request is successfull
        success: function (response) {
            console.log(response);
            
            $("#panel-container").html(response);
            
        },
        // If request was not successfull
        error: function (response) {
            console.log('ajax error');
        }
    });
}

// After user search execute to update map
function updateMap(response){
    deleteMarkers();
    
    console.log(response);
    // Update map
    // Create popup for fire. Has onclick method for ajax request moreFireInfo()
    for ( var i=0; i < response.length; ++i ){
        var a = '<a onclick="moreFireInfo(\'' +  String(response[i].dimos) + '\')">' + String(response[i].geo_address_dimos) + '\nTotal: ' + String(response[i].total) + '</a>'
        // Create marker object save it to a global array so when the must is updated to delete the marker
        console.log(response[i].geo_latitude_dimos + " " + response[i].geo_longitude_dimos);
        var LamMarker = new L.marker([response[i].geo_latitude_dimos, response[i].geo_longitude_dimos], {icon: myIcon});
        //marker.push(LamMarker);
        LamMarker.bindPopup(a);
        markers.addLayer(LamMarker);
        
        // Create marker to map
        //marker[i].bindPopup(a).addTo(map);
    }
    // update table below map

    //close sidebar
}

/*Going through these marker-items again removing them*/
function deleteMarkers() {
    // for(i=0;i<marker.length;i++) {
    //     map.removeLayer(marker[i]);
    // } 
    map.removeLayer(markers);
}


function getSearchData(){
    formData = {
        location:{
            ypiresia: $("#ypiresia").val(),
            nomos: $("#nomos").val(),
            dimos: $("#dimos").val(),
            perioxi: $("#perioxi").val(),
            dasarxio: $("#dasarxio").val(),
            diefthinsi: $("#diefthinsi").val()
            // ypiresia: locationSearch['ypiresia'],
            // nomos: locationSearch['nomos'],
            // dimos: locationSearch['dimos'],
            // perioxi: locationSearch['perioxi'],
            // dasarxio: locationSearch['dasarxio'],
            // diefthinsi: locationSearch['diefthinsi']
        },
        date:{
            hm_arxi: datetimeSearch['hm_arxi'],
            hm_telous: datetimeSearch['hm_telous']
        },
        time:{
            ora_arxi: datetimeSearch['ora_arxi'],
            ora_telous: datetimeSearch['ora_telous']
        },
        burnedLand:{
            dasi:{
                low: burnedLandSearch.dasi.low,
                high: burnedLandSearch.dasi.high
            },
            dasiki_ektasi:{
                 low: burnedLandSearch.dasiki_ektasi.low,
                 high: burnedLandSearch.dasiki_ektasi.high
            },
            alsi:{
                 low: burnedLandSearch.alsi.low,
                 high: burnedLandSearch.alsi.high
            },
            xort_ektaseis:{
                 low: burnedLandSearch.xort_ektaseis.low,
                 high: burnedLandSearch.xort_ektaseis.high
            },
            kalamia_valtoi:{
                 low: burnedLandSearch.kalamia_valtoi.low,
                 high: burnedLandSearch.kalamia_valtoi.high
            },
            georgikes_ektaseis:{
                 low: burnedLandSearch.georgikes_ektaseis.low,
                 high: burnedLandSearch.georgikes_ektaseis.high
            },
            ypolimata_kaliergion:{
                 low: burnedLandSearch.ypolimata_kaliergion.low,
                 high: burnedLandSearch.ypolimata_kaliergion.high
            },
            skoupidotopoi:{
                 low: burnedLandSearch.skoupidotopoi.low,
                 high: burnedLandSearch.skoupidotopoi.high
            }
        },
        humanResources:{
            pirosvestiko_soma:{
                low: humanResourcesSearch.pirosvestiko_soma.low,
                high: humanResourcesSearch.pirosvestiko_soma.high
            }, 
            pezopora_tmimata:{
                low: humanResourcesSearch.pezopora_tmimata.low,
                high: humanResourcesSearch.pezopora_tmimata.high
            }, 
            ethelontes:{
                low: humanResourcesSearch.ethelontes.low,
                high: humanResourcesSearch.ethelontes.high
            }, 
            stratos:{
                low: humanResourcesSearch.stratos.low,
                high: humanResourcesSearch.stratos.high
            }, 
            alles_dinameis:{
                low: humanResourcesSearch.alles_dinameis.low,
                high: humanResourcesSearch.alles_dinameis.high
            }
        },
        landVehicles:{
            pirosvestika_oximata:{
                low: landVehiclesSearch.pirosvestika_oximata.low,
                high: landVehiclesSearch.pirosvestika_oximata.high
            },
            oximata_ota:{
                low: landVehiclesSearch.oximata_ota.low,
                high: landVehiclesSearch.oximata_ota.high
            },
            vitiofora:{
                low: landVehiclesSearch.vitiofora.low,
                high: landVehiclesSearch.vitiofora.high
            },
            mixanimata:{
                low: landVehiclesSearch.mixanimata.low,
                high: landVehiclesSearch.mixanimata.high
            }
        },
        airVehicles:{
            elikoptera:{
                low: airVehiclesSearch.elikoptera.low,
                high: airVehiclesSearch.elikoptera.high
            },
            CL415:{
                low: airVehiclesSearch.CL415.low,
                high: airVehiclesSearch.CL415.high
            },
            CL215:{
                low: airVehiclesSearch.CL215.low,
                high: airVehiclesSearch.CL215.high
            },
            PZL:{
                low: airVehiclesSearch.PZL.low,
                high: airVehiclesSearch.PZL.high
            },
            GRU:{
                low: airVehiclesSearch.GRU.low,
                high: airVehiclesSearch.GRU.high
            }
        }
    }

    return formData;
}


function resetSearch(){
    locationSearch = {
        "ypiresia": null,
        "nomos": null,
        "dimos": null,
        "perioxi": null,
        "dasarxio": null,
        "diefthinsi": null
    }
    
    datetimeSearch = {
        "hm_arxi": null,
        "ora_arxi": null,
        "hm_telous": null,
        "ora_telous": null
    }
    
    burnedLandSearch = {
        "dasi": {
            "low": null,
            "high": null
        },
        "dasiki_ektasi": {
            "low": null,
            "high": null
        },
        "alsi": {
            "low": null,
            "high": null
        },
        "xort_ektaseis": {
            "low": null,
            "high": null
        },
        "kalamia_valtoi": {
            "low": null,
            "high": null
        },
        "georgikes_ektaseis": {
            "low": null,
            "high": null
        },
        "ypolimata_kaliergion": {
            "low": null,
            "high": null
        },
        "skoupidotopoi": {
            "low": null,
            "high": null
        }
    }
    
    humanResourcesSearch = {
        "pirosvestiko_soma":{
            "low": null,
            "high": null
        },
        "pezopora_tmimata":{
            "low": null,
            "high": null
        },
        "ethelontes":{
            "low": null,
            "high": null
        },
        "stratos":{
            "low": null,
            "high": null
        },
        "alles_dinameis":{
            "low": null,
            "high": null
        }
    }
    
    landVehiclesSearch = {
        "pirosvestika_oximata":{
            "low": null,
            "high": null
        },
        "oximata_ota":{
            "low": null,
            "high": null
        },
        "vitiofora":{
            "low": null,
            "high": null
        },
        "mixanimata":{
            "low": null,
            "high": null
        }
    }
    
    airVehiclesSearch = {
        "elikoptera":{
            "low": null,
            "high": null
        },
        "CL415":{
            "low": null,
            "high": null
        },
        "CL215":{
            "low": null,
            "high": null
        },
        "PZL":{
            "low": null,
            "high": null
        },
        "GRU":{
            "low": null,
            "high": null
        }
    }


    console.log('formData:' + formData.burnedLand.dasi);

    dasi_slider.noUiSlider.reset();
    dasiki_ektasi_slider.noUiSlider.reset();
    alsi_slider.noUiSlider.reset();
    xort_ektaseis_slider.noUiSlider.reset();
    kalamia_valtoi_slider.noUiSlider.reset();
    georgikes_ektaseis_slider.noUiSlider.reset();
    ypolimata_kaliergion_slider.noUiSlider.reset();
    skoupidotopoi_slider.noUiSlider.reset();
    pirosvestiko_soma_slider.noUiSlider.reset();
    pezopora_tmimata_slider.noUiSlider.reset();
    ethelontes_slider.noUiSlider.reset();
    stratos_slider.noUiSlider.reset();
    alles_dinameis_slider.noUiSlider.reset();
    pirosvestika_oximata_slider.noUiSlider.reset();
    oximata_ota_slider.noUiSlider.reset();
    vitiofora_slider.noUiSlider.reset();
    mixanimata_slider.noUiSlider.reset();

    $('#rangepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
        datetimeSearch.hm_arxi = null;
        datetimeSearch.ora_arxi = null;
        datetimeSearch.hm_telous = null;
        datetimeSearch.ora_telous = null;
    });
}
