
jQuery(document).ready(function($) {
    
    initMap();
    // var searchObj = {
    //     "ypiresia": null,
    //     "nomos": null,
    //     "dimos": null,
    //     "perioxi": null,
    //     "dasarxio": null,
    //     "diefthinsi": null,

    //     "hm_arxi": null,
    //     "ora_arxi": null,
    //     "hm_telous": null,
    //     "ora_telous": null,
        
    //     "dasi_slider": null,
    //     "dasiki_ektasi_slider": null,
    //     "alsi_slider": null,
    //     "xort_ektaseis_slider": null,
    //     "kalamia_valtoi_slider": null,
    //     "georgikes_ektaseis_slider": null,
    //     "ypolimata_kaliergion_slider": null,
    //     "skoupidotopoi_slider": null,
        
    //     "pirosvestiko_soma_slider": null,
    //     "pezopora_tmimata_slider": null,
    //     "ethelontes_slider": null,
    //     "stratos_slider": null,
    //     "alles_dinameis_slider": null,
        
    //     "pirosvestika_oximata_slider": null,
    //     "oximata_ota_slider": null,
    //     "vitiofora_slider": null,
    //     "mixanimata_slider": null,
        
    //     "elikoptera_slider": null,
    //     "CL415_slider": null,
    //     "CL215_slider": null,
    //     "PZL_slider": null,
    //     "GRU_slider": null
    // };

    var locationSearch = {
        "ypiresia": null,
        "nomos": null,
        "dimos": null,
        "perioxi": null,
        "dasarxio": null,
        "diefthinsi": null
    }
    
    var datetimeSearch = {
        "hm_arxi": null,
        "ora_arxi": null,
        "hm_telous": null,
        "ora_telous": null
    }

    var burnedLandSearch = {
        "dasi": null,
        "dasiki_ektasi": null,
        "alsi": null,
        "xort_ektaseis": null,
        "kalamia_valtoi": null,
        "georgikes_ektaseis": null,
        "ypolimata_kaliergion": null,
        "skoupidotopoi": null
    }

    var humanResourcesSearch = {
        "pirosvestiko_soma": null,
        "pezopora_tmimata": null,
        "ethelontes": null,
        "stratos": null,
        "alles_dinameis": null
    }

    var landVehiclesSearch = {
        "pirosvestika_oximata": null,
        "oximata_ota": null,
        "vitiofora": null,
        "mixanimata": null
    }

    var airVehiclesSearch = {
        "elikoptera": null,
        "CL415": null,
        "CL215": null,
        "PZL": null,
        "GRU": null
    }

    var dasi_slider = document.getElementById('dasi'),
        dasiki_ektasi_slider = document.getElementById('dasiki-ektasi'),
        alsi_slider = document.getElementById('alsi'),
        xort_ektaseis_slider = document.getElementById('xort-ektaseis'),
        kalamia_valtoi_slider = document.getElementById('kalamia-valtoi'),
        georgikes_ektaseis_slider = document.getElementById('georgikes-ektaseis'),
        ypolimata_kaliergion_slider = document.getElementById('ypolimata-kaliergion'),
        skoupidotopoi_slider = document.getElementById('skoupidotopoi');

    noUiSlider.create(dasi_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 21800 ]
        }
    });
    var dasi_nodes = [
        document.getElementById('dasi-output-min'),
        document.getElementById('dasi-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    dasi_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        dasi_nodes[handle].innerHTML = values[handle];
    });

    noUiSlider.create(dasiki_ektasi_slider, {
        start: [ 4000, 25000 ],
        range: {
            'min': [  0 ],
            'max': [ 35000 ]
        }
    });
    var dasiki_ektasi_nodes = [
        document.getElementById('dasiki-ektasi-output-min'),
        document.getElementById('dasiki-ektasi-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    dasiki_ektasi_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        dasiki_ektasi_nodes[handle].innerHTML = values[handle];
    });

    noUiSlider.create(alsi_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 100 ]
        }
    });
    var alsi_nodes = [
        document.getElementById('alsi-output-min'),
        document.getElementById('alsi-output-max')
    ];
    
    
    
    
    
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    alsi_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        alsi_nodes[handle].innerHTML = values[handle];
    });
    noUiSlider.create(xort_ektaseis_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 13000 ]
        }
    });
    var xort_ektaseis_nodes = [
        document.getElementById('xort-ektaseis-output-min'),
        document.getElementById('xort-ektaseis-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    xort_ektaseis_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        xort_ektaseis_nodes[handle].innerHTML = values[handle];
    });
    noUiSlider.create(kalamia_valtoi_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 4990 ]
        }
    });
    var kalamia_valtoi_nodes = [
        document.getElementById('kalamia-valtoi-output-min'),
        document.getElementById('kalamia-valtoi-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    kalamia_valtoi_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        kalamia_valtoi_nodes[handle].innerHTML = values[handle];
    });
    noUiSlider.create(georgikes_ektaseis_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 20000 ]
        }
    });
    var georgikes_ektaseis_nodes = [
        document.getElementById('georgikes-ektaseis-output-min'),
        document.getElementById('georgikes-ektaseis-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    georgikes_ektaseis_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        georgikes_ektaseis_nodes[handle].innerHTML = values[handle];
    });
    noUiSlider.create(ypolimata_kaliergion_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 5000 ]
        }
    });
    var ypolimata_kaliergion_nodes = [
        document.getElementById('ypolimata-kaliergion-output-min'),
        document.getElementById('ypolimata-kaliergion-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    ypolimata_kaliergion_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        ypolimata_kaliergion_nodes[handle].innerHTML = values[handle];
    });
    noUiSlider.create(skoupidotopoi_slider, {
        start: [ 4000, 17000 ],
        range: {
            'min': [  0 ],
            'max': [ 100 ]
        }
    });
    var skoupidotopoi_nodes = [
        document.getElementById('skoupidotopoi-output-min'),
        document.getElementById('skoupidotopoi-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    skoupidotopoi_slider.noUiSlider.on('update', function ( values, handle, unencoded, isTap, positions ) {
        skoupidotopoi_nodes[handle].innerHTML = values[handle];
    });




   /*
    * When user changes the slider, the sliders id is saved and the '-output'
    * string is appended at the end to create the id of the sliders output <p>
    * component. After that the <p> element is selected by id and the the html
    * is changed.
    */
    // $('.slider-start').on('input', function(e){
    //     var output_id = $(this).attr('id') + '-output';
    //     $('#' + output_id).html($(e.target).val());
        
    //     // To find where it belongs (prosopiko, kameni ektasi, etc...)
    //     type = output_id.split('-')[0];
    //     var subVar = $(this).attr('data-type');

    //     if(type == 'kammenes'){
    //         burnedLandSearch[subVar] = $(e.target).val();
    //         console.log(burnedLandSearch);
    //     } else if (type == 'prosopiko'){
    //         humanResourcesSearch[subVar] = $(e.target).val();
    //         console.log(humanResourcesSearch);
    //     } else if (type == 'landveh'){
    //         landVehiclesSearch[subVar] = $(e.target).val();
    //         console.log(landVehiclesSearch);
    //     } else if (type == 'airveh'){
    //         airVehiclesSearch[subVar] = $(e.target).val();
    //         console.log(airVehiclesSearch);
    //     }
    // });


    // $('.slider-end').on('input', function(e){
    //     var output_id = $(this).attr('id') + '-output';
    //     $('#' + output_id).html($(e.target).val());
        
    //     // To find where it belongs (prosopiko, kameni ektasi, etc...)
    //     type = output_id.split('-')[0];
    //     var subVar = $(this).attr('data-type');

    //     if(type == 'kammenes'){
    //         burnedLandSearch[subVar] = $(e.target).val();
    //         console.log(burnedLandSearch);
    //     } else if (type == 'prosopiko'){
    //         humanResourcesSearch[subVar] = $(e.target).val();
    //         console.log(humanResourcesSearch);
    //     } else if (type == 'landveh'){
    //         landVehiclesSearch[subVar] = $(e.target).val();
    //         console.log(landVehiclesSearch);
    //     } else if (type == 'airveh'){
    //         airVehiclesSearch[subVar] = $(e.target).val();
    //         console.log(airVehiclesSearch);
    //     }
    // });



    $( "#searchBtn" ).click(function() {
        // console.log(locationSearch);
        console.log(datetimeSearch);
        // console.log(burnedLandSearch);
        // console.log(humanResourcesSearch);
        // console.log(landVehiclesSearch);
        // console.log(airVehiclesSearch);
        var formData = {
            // location:{
            //     ypiresia: locationSearch['ypiresia'],
            //     nomos: locationSearch['nomos'],
            //     dimos: locationSearch['dimos'],
            //     perioxi: locationSearch['perioxi'],
            //     dasarxio: locationSearch['dasarxio'],
            //     diefthinsi: locationSearch['diefthinsi']
            // },
            date:{
                hm_arxi: datetimeSearch['hm_arxi'],
                hm_telous: datetimeSearch['hm_telous']
            },
            time:{
                ora_arxi: datetimeSearch['ora_arxi'],
                ora_telous: datetimeSearch['ora_telous']
            }
            // burnedLand:{
            //     dasi: burnedLandSearch['dasi'],
            //     dasiki_ektasi: burnedLandSearch['dasiki_ektasi'],
            //     alsi: burnedLandSearch['alsi'],
            //     xort_ektaseis: burnedLandSearch['xort_ektaseis'],
            //     kalamia_valtoi: burnedLandSearch['kalamia_valtoi'],
            //     georgikes_ektaseis: burnedLandSearch['georgikes_ektaseis'],
            //     ypolimata_kaliergion: burnedLandSearch['ypolimata_kaliergion'],
            //     skoupidotopoi: burnedLandSearch['skoupidotopoi']
            // },
            // humanResources:{
            //     pirosvestiko_soma: humanResourcesSearch['pirosvestiko_soma'],
            //     pezopora_tmimata: humanResourcesSearch['pezopora_tmimata'],
            //     ethelontes: humanResourcesSearch['ethelontes'],
            //     stratos: humanResourcesSearch['stratos'],
            //     alles_dinameis: humanResourcesSearch['alles_dinameis']
            // },
            // landVehicles:{
            //     pirosvestika_oximata: landVehiclesSearch['pirosvestika_oximata'],
            //     oximata_ota: landVehiclesSearch['oximata_ota'],
            //     vitiofora: landVehiclesSearch['vitiofora'],
            //     mixanimata: landVehiclesSearch['mixanimata']
            // },
            // airVehicles:{
            //     elikoptera: airVehicleSearch['elikoptera'],
            //     CL415: airVehicleSearch['CL415'],
            //     CL215: airVehicleSearch['CL215'],
            //     PZL: airVehicleSearch['PZL'],
            //     GRU: airVehicleSearch['GRU']
            // }
        }
        
        
        $( "#resetBtn" ).click(function() {
            resetSearch();
        });

        // Debug
        console.log(formData.date.hm_arxi);
        console.log(formData.date.hm_telous);
        console.log(formData.time.ora_arxi);
        console.log(formData.time.ora_telous);
        // Execute ajax request
        $.ajax({
            type: 'POST',
            url: 'searchfires',
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
    });

    // // Init timepickers
    // $('#timepicker1').timepicker({
    //     minuteStep: 1,
    //     showMeridian: false,
    //     defaultTime: false
    // });
    // $('#timepicker2').timepicker({
    //     minuteStep: 1,
    //     showMeridian: false,
    //     defaultTime: false
    // });

    // $('#timepicker1').timepicker().on('changeTime.timepicker', function(e) {
    //     // console.log('The time is ' + e.time.value);
    //     // console.log('The hour is ' + e.time.hours);
    //     // console.log('The minute is ' + e.time.minutes);
    //     // console.log('The meridian is ' + e.time.meridian);
    //     datetimeSearch.ora_arxi = e.time.value;
    // });
    
    // $('#timepicker2').timepicker().on('changeTime.timepicker', function(e) {
    //     // console.log('The time is ' + e.time.value);
    //     // console.log('The hour is ' + e.time.hours);
    //     // console.log('The minute is ' + e.time.minutes);
    //     // console.log('The meridian is ' + e.time.meridian);
    //     datetimeSearch.ora_telous = e.time.value;
    // });
        
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
     
    $('#rangepicker').on('apply.daterangepicker', function(ev, picker) {
        $(this).val(picker.startDate.format('MM/DD/YYYY HH:mm') + ' - ' + picker.endDate.format('MM/DD/YYYY HH:mm'));
        
        datetimeSearch.hm_arxi = picker.startDate.format('DD-MM-YYYY');
        datetimeSearch.hm_telous = picker.endDate.format('DD-MM-YYYY');
        
        timeStart = picker.startDate.format('HH:mm');
        timeEnd = picker.endDate.format('HH:mm');
        if(timeStart != '00:00'){
            datetimeSearch.ora_arxi = picker.startDate.format('HH:mm');
        }
        if(timeEnd != '23:00'){
            datetimeSearch.ora_telous = picker.endDate.format('HH:mm');
        }

        console.log(datetimeSearch);
    });

    $('#rangepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
        



    
    // // Kameni ektasi
    // $('#dasi').bootstrapNumber();
    // $('#dasiki_ektasi').bootstrapNumber();
    // $('#alsi').bootstrapNumber();
    // $('#xort_ektaseis').bootstrapNumber();
    // $('#kalamia_valtoi').bootstrapNumber();
    // $('#georgikes_ektaseis').bootstrapNumber();
    // $('#ypolimata_kaliergion').bootstrapNumber();
    // $('#skoupidotopoi').bootstrapNumber();
    // // Prosopiko
    // $('#pirosvestiko_soma').bootstrapNumber();
    // $('#pezopora_tmimata').bootstrapNumber();
    // $('#ethelontes').bootstrapNumber();
    // $('#stratos').bootstrapNumber();
    // $('#alles_dinameis').bootstrapNumber();
    // // Oximata
    // $('#pirosvestika_oximata').bootstrapNumber();
    // $('#oximata_ota').bootstrapNumber();
    // $('#vitiofora').bootstrapNumber();
    // $('#mixanimata').bootstrapNumber();
    // // Enaeria    
    // $('#elikoptera').bootstrapNumber();
    // $('#CL415').bootstrapNumber();
    // $('#CL215').bootstrapNumber();
    // $('#PZL').bootstrapNumber();
    // $('#GRU').bootstrapNumber();


    // Sliders
    // With JQuery
    // var dasi_slider = new Slider('#dasi_slider', {});
    // var dasiki_ektasi_slider = new Slider('#dasiki_ektasi_slider', {});
    // var alsi_slider = new Slider('#alsi_slider', {});
    // var xort_ektaseis_slider = new Slider('#xort_ektaseis_slider', {});
    // var kalamia_valtoi_slider = new Slider('#kalamia_valtoi_slider', {});
    // var georgikes_ektaseis_slider = new Slider('#georgikes_ektaseis_slider', {});
    // var ypolimata_kaliergion_slider = new Slider('#ypolimata_kaliergion_slider', {});
    // var skoupidotopoi_slider = new Slider('#skoupidotopoi_slider', {});
    // var pirosvestiko_soma_slider = new Slider('#pirosvestiko_soma_slider', {});
    // var pezopora_tmimata_slider = new Slider('#pezopora_tmimata_slider', {});
    // var ethelontes_slider = new Slider('#ethelontes_slider', {});
    // var stratos_slider = new Slider('#stratos_slider', {});
    // var alles_dinameis_slider = new Slider('#alles_dinameis_slider', {});
    // var pirosvestika_oximata_slider = new Slider('#pirosvestika_oximata_slider', {});    
    // var oximata_ota_slider = new Slider('#oximata_ota_slider', {});    
    // var vitiofora_slider = new Slider('#vitiofora_slider', {});    
    // var mixanimata_slider = new Slider('#mixanimata_slider', {});    
    // var elikoptera_slider = new Slider('#elikoptera_slider', {});
    // var CL415_slider = new Slider('#CL415_slider', {});
    // var CL215_slider = new Slider('#CL215_slider', {});
    // var PZL_slider = new Slider('#PZL_slider', {});
    // var GRU_slider = new Slider('#GRU_slider', {});

    // $("[data-toggle='toggle']").click(function() {
    //     var selector = $(this).data("target");
    //     $(selector).toggleClass('in');
    // });
    // $("#dasi_slider_enabled").click(function(){
    //     if(this.checked) {
    //         dasi_slider.enable();
    //     } else {
    //         dasi_slider.disable();
    //         searchObj.dasi_slider = null;
    //     }
    // })
    // $("#dasi_slider_enabled").on('slideStop', function(e) {
    //     // searchObj.dasi_slider = ($this).slider('getValue');
    //     alert('a');
    // });
    // $('#dasi_slider_enabled').slider().on('change', function(event) {
    //     var a = event.value.newValue;
    //     var b = event.value.oldValue;
    
    //     var changed = !($.inArray(a[0], b) !== -1 && 
    //                     $.inArray(a[1], b) !== -1 && 
    //                     $.inArray(b[0], a) !== -1 && 
    //                     $.inArray(b[1], a) !== -1 && 
    //                     a.length === b.length);
    
    //     if(changed ) {
    //         console.log('changed');
    //     }
    // });
    
    // $("#dasiki_ektasi_slider_enabled").click(function(){
    //     if(this.checked) {
    //         dasiki_ektasi_slider.enable();
    //     } else {
    //         dasiki_ektasi_slider.disable();
    //     }
    // })
    // $("#alsi_slider_enabled").click(function(){
    //     if(this.checked) {
    //         alsi_slider.enable();
    //     } else {
    //         alsi_slider.disable();
    //     }
    // })
    // $("#xort_ektaseis_slider_enabled").click(function(){
    //     if(this.checked) {
    //         xort_ektaseis_slider.enable();
    //     } else {
    //         xort_ektaseis_slider.disable();
    //     }
    // })
    // $("#kalamia_valtoi_slider_enabled").click(function(){
    //     if(this.checked) {
    //         kalamia_valtoi_slider.enable();
    //     } else {
    //         kalamia_valtoi_slider.disable();
    //     }
    // })
    // $("#georgikes_ektaseis_slider_enabled").click(function(){
    //     if(this.checked) {
    //         georgikes_ektaseis_slider.enable();
    //     } else {
    //         georgikes_ektaseis_slider.disable();
    //     }
    // })
    // $("#ypolimata_kaliergion_slider_enabled").click(function(){
    //     if(this.checked) {
    //         ypolimata_kaliergion_slider.enable();
    //     } else {
    //         ypolimata_kaliergion_slider.disable();
    //     }
    // })
    // $("#skoupidotopoi_slider_enabled").click(function(){
    //     if(this.checked) {
    //         skoupidotopoi_slider.enable();
    //     } else {
    //         skoupidotopoi_slider.disable();
    //     }
    // })
    // $("#pirosvestiko_soma_slider_enabled").click(function(){
    //     if(this.checked) {
    //         pirosvestiko_soma_slider.enable();
    //     } else {
    //         pirosvestiko_soma_slider.disable();
    //     }
    // })
    // $("#pezopora_tmimata_slider_enabled").click(function(){
    //     if(this.checked) {
    //         pezopora_tmimata_slider.enable();
    //     } else {
    //         pezopora_tmimata_slider.disable();
    //     }
    // })
    // $("#ethelontes_slider_enabled").click(function(){
    //     if(this.checked) {
    //         ethelontes_slider.enable();
    //     } else {
    //         ethelontes_slider.disable();
    //     }
    // })
    // $("#stratos_slider_enabled").click(function(){
    //     if(this.checked) {
    //         stratos_slider.enable();
    //     } else {
    //         stratos_slider.disable();
    //     }
    // })
    // $("#alles_dinameis_slider_enabled").click(function(){
    //     if(this.checked) {
    //         alles_dinameis_slider.enable();
    //     } else {
    //         alles_dinameis_slider.disable();
    //     }
    // })
    // $("#pirosvestika_oximata_slider_enabled").click(function(){
    //     if(this.checked) {
    //         pirosvestika_oximata_slider.enable();
    //     } else {
    //         pirosvestika_oximata_slider.disable();
    //     }
    // })
    // $("#oximata_ota_slider_enabled").click(function(){
    //     if(this.checked) {
    //         oximata_ota_slider.enable();
    //     } else {
    //         oximata_ota_slider.disable();
    //     }
    // })
    // $("#vitiofora_slider_enabled").click(function(){
    //     if(this.checked) {
    //         vitiofora_slider.enable();
    //     } else {
    //         vitiofora_slider.disable();
    //     }
    // })
    // $("#mixanimata_slider_enabled").click(function(){
    //     if(this.checked) {
    //         mixanimata_slider.enable();
    //     } else {
    //         mixanimata_slider.disable();
    //     }
    // })
    // $("#elikoptera_slider_enabled").click(function(){
    //     if(this.checked) {
    //         elikoptera_slider.enable();
    //     } else {
    //         elikoptera_slider.disable();
    //     }
    // })
    // $("#CL415_slider_enabled").click(function(){
    //     if(this.checked) {
    //         CL415_slider.enable();
    //     } else {
    //         CL415_slider.disable();
    //     }
    // })
    // $("#CL215_slider_enabled").click(function(){
    //     if(this.checked) {
    //         CL215_slider.enable();
    //     } else {
    //         CL215_slider.disable();
    //     }
    // })
    // $("#PZL_slider_enabled").click(function(){
    //     if(this.checked) {
    //         PZL_slider.enable();
    //     } else {
    //         PZL_slider.disable();
    //     }
    // })
    // $("#GRU_slider_enabled").click(function(){
    //     if(this.checked) {
    //         GRU_slider.enable();
    //     } else {
    //         GRU_slider.disable();
    //     }
    // })

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

function initMap(){
    
    var southWest = L.latLng(40.712, -74.227),  
        northEast = L.latLng(40.774, -74.125),
        mybounds = L.latLngBounds(southWest, northEast);

    var map = L.map( 'map', {
        center: [38.0, 25.0],
        minZoom: 7,
        maxZoom: 15,
        zoom: 6,
    })
    
    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: ['a', 'b', 'c'],
    }).addTo( map )
      
    //   var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' )
      
    var myIcon = L.icon({
        maxBounds: mybounds,
        iconUrl: 'images/flame2.png',
        iconRetinaUrl: 'images/flame2.png',
        iconSize: [29, 24],
        iconAnchor: [9, 21],
        popupAnchor: [0, -14]
    })
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

                L.marker( [response[i].geo_latitude_dimos, response[i].geo_longitude_dimos], {icon: myIcon} )
                    
                    .bindPopup( a )
                    .addTo( map );
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

function resetSearch(){
    var locationSearch = {
        "ypiresia": null,
        "nomos": null,
        "dimos": null,
        "perioxi": null,
        "dasarxio": null,
        "diefthinsi": null
    }
    
    var datetimeSearch = {
        "hm_arxi": null,
        "ora_arxi": null,
        "hm_telous": null,
        "ora_telous": null
    }

    var burnedLandSearch = {
        "dasi": null,
        "dasiki_ektasi": null,
        "alsi": null,
        "xort_ektaseis": null,
        "kalamia_valtoi": null,
        "georgikes_ektaseis": null,
        "ypolimata_kaliergion": null,
        "skoupidotopoi": null
    }

    var humanResourcesSearch = {
        "pirosvestiko_soma": null,
        "pezopora_tmimata": null,
        "ethelontes": null,
        "stratos": null,
        "alles_dinameis": null
    }

    var landVehiclesSearch = {
        "pirosvestika_oximata": null,
        "oximata_ota": null,
        "vitiofora": null,
        "mixanimata": null
    }

    var airVehiclesSearch = {
        "elikoptera": null,
        "CL415": null,
        "CL215": null,
        "PZL": null,
        "GRU": null
    }

    $('#rangepicker').on('cancel.daterangepicker', function(ev, picker) {
        $(this).val('');
    });
}