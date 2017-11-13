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

var humanResourcesSearch = {
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

var landVehiclesSearch = {
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

var airVehiclesSearch = {
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

var dasi_slider = document.getElementById('dasi'),
    dasiki_ektasi_slider = document.getElementById('dasiki-ektasi'),
    alsi_slider = document.getElementById('alsi'),
    xort_ektaseis_slider = document.getElementById('xort-ektaseis'),
    kalamia_valtoi_slider = document.getElementById('kalamia-valtoi'),
    georgikes_ektaseis_slider = document.getElementById('georgikes-ektaseis'),
    ypolimata_kaliergion_slider = document.getElementById('ypolimata-kaliergion'),
    skoupidotopoi_slider = document.getElementById('skoupidotopoi'),

    pirosvestiko_soma_slider = document.getElementById('pirosvestiko-soma'),
    pezopora_tmimata_slider = document.getElementById('pezopora-tmimata'),
    ethelontes_slider = document.getElementById('ethelontes'),
    stratos_slider = document.getElementById('stratos'),
    alles_dinameis_slider = document.getElementById('alles-dinameis'),

    pirosvestika_oximata_slider = document.getElementById('pirosvestika-oximata'),
    oximata_ota_slider = document.getElementById('oximata-ota'),
    vitiofora_slider = document.getElementById('vitiofora'),
    mixanimata_slider = document.getElementById('mixanimata')

    elikoptera_slider = document.getElementById('elikoptera'),
    CL415_slider = document.getElementById('CL415'),
    CL215_slider = document.getElementById('CL215'),
    PZL_slider = document.getElementById('PZL'),
    GRU_slider = document.getElementById('GRU');

    noUiSlider.create(dasi_slider, {
        start: [ 4000, 17000 ],
        format: wNumb({
            decimals: 0,
        }),
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
    dasi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        dasi_nodes[handle].innerHTML = values[handle];
        values = dasi_slider.noUiSlider.get();
        
        burnedLandSearch.dasi.low = values[0];
        burnedLandSearch.dasi.high = values[1];
        console.log('dasi:low:'+burnedLandSearch.dasi.low);
        console.log('dasi:high:'+burnedLandSearch.dasi.high);
    });




    noUiSlider.create(dasiki_ektasi_slider, {
        start: [ 4000, 25000 ],
        format: wNumb({
            decimals: 0,
        }),
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
    dasiki_ektasi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        dasiki_ektasi_nodes[handle].innerHTML = values[handle];
        values = dasiki_ektasi_slider.noUiSlider.get();
        
        burnedLandSearch.dasiki_ektasi.low = values[0];
        burnedLandSearch.dasiki_ektasi.high = values[1];
        console.log('dasikiektasi:low:'+burnedLandSearch.dasiki_ektasi.low);
        console.log('dasikiektasi:high:'+burnedLandSearch.dasiki_ektasi.high);
    });


    noUiSlider.create(alsi_slider, {
        start: [ 15, 64 ],
        format: wNumb({
            decimals: 0,
        }),
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
    alsi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        alsi_nodes[handle].innerHTML = values[handle];
        values = alsi_slider.noUiSlider.get();
        
        burnedLandSearch.alsi.low = values[0];
        burnedLandSearch.alsi.high = values[1];
        console.log('alsi:low:'+burnedLandSearch.alsi.low);
        console.log('alsi:high:'+burnedLandSearch.alsi.high);
    });

    noUiSlider.create(xort_ektaseis_slider, {
        start: [ 2000, 8200 ],
        format: wNumb({
            decimals: 0,
        }),
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
    xort_ektaseis_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        xort_ektaseis_nodes[handle].innerHTML = values[handle];
        values = xort_ektaseis_slider.noUiSlider.get();
        
        burnedLandSearch.xort_ektaseis.low = values[0];
        burnedLandSearch.xort_ektaseis.high = values[1];
        console.log('xort_ektaseis:low:'+burnedLandSearch.xort_ektaseis.low);
        console.log('xort_ektaseis:high:'+burnedLandSearch.xort_ektaseis.high);
    });

    noUiSlider.create(kalamia_valtoi_slider, {
        start: [ 700, 3000 ],
        format: wNumb({
            decimals: 0,
        }),
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
    kalamia_valtoi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        kalamia_valtoi_nodes[handle].innerHTML = values[handle];
        values = kalamia_valtoi_slider.noUiSlider.get();
        
        burnedLandSearch.kalamia_valtoi.low = values[0];
        burnedLandSearch.kalamia_valtoi.high = values[1];
        console.log('kalamia_valtoi:low:'+burnedLandSearch.kalamia_valtoi.low);
        console.log('kalamia_valtoi:high:'+burnedLandSearch.kalamia_valtoi.high);
    });

    noUiSlider.create(georgikes_ektaseis_slider, {
        start: [ 2400, 13000 ],
        format: wNumb({
            decimals: 0,
        }),
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
    georgikes_ektaseis_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        georgikes_ektaseis_nodes[handle].innerHTML = values[handle];
        values = georgikes_ektaseis_slider.noUiSlider.get();
        
        burnedLandSearch.georgikes_ektaseis.low = values[0];
        burnedLandSearch.georgikes_ektaseis.high = values[1];
        console.log('georgikes_ektaseis:low:'+burnedLandSearch.georgikes_ektaseis.low);
        console.log('georgikes_ektaseis:high:'+burnedLandSearch.georgikes_ektaseis.high);
    });

    noUiSlider.create(ypolimata_kaliergion_slider, {
        start: [ 650, 3000 ],
        format: wNumb({
            decimals: 0,
        }),
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
    ypolimata_kaliergion_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        ypolimata_kaliergion_nodes[handle].innerHTML = values[handle];
        values = ypolimata_kaliergion_slider.noUiSlider.get();
        
        burnedLandSearch.ypolimata_kaliergion.low = values[0];
        burnedLandSearch.ypolimata_kaliergion.high = values[1];
        console.log('ypolimata_kaliergion:low:'+burnedLandSearch.ypolimata_kaliergion.low);
        console.log('ypolimata_kaliergion:high:'+burnedLandSearch.ypolimata_kaliergion.high);
    });

    noUiSlider.create(skoupidotopoi_slider, {
        start: [ 10, 60 ],
        format: wNumb({
            decimals: 0,
        }),
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
    skoupidotopoi_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        skoupidotopoi_nodes[handle].innerHTML = values[handle];
        values = skoupidotopoi_slider.noUiSlider.get();
        
        burnedLandSearch.skoupidotopoi.low = values[0];
        burnedLandSearch.skoupidotopoi.high = values[1];
        console.log('skoupidotopoi:low:'+burnedLandSearch.skoupidotopoi.low);
        console.log('skoupidotopoi:high:'+burnedLandSearch.skoupidotopoi.high);
    });


//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------
//---------------------------------------------------------------------------------

    noUiSlider.create(pirosvestiko_soma_slider, {
        start: [ 4000, 17000 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 745 ]
        }
    });
    var pirosvestiko_soma_nodes = [
        document.getElementById('pirosvestiko-soma-output-min'),
        document.getElementById('pirosvestiko-soma-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    pirosvestiko_soma_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        pirosvestiko_soma_nodes[handle].innerHTML = values[handle];
        values = pirosvestiko_soma_slider.noUiSlider.get();
        
        humanResourcesSearch.pirosvestiko_soma.low = values[0];
        humanResourcesSearch.pirosvestiko_soma.high = values[1]
    });



    noUiSlider.create(pezopora_tmimata_slider, {
        start: [ 4000, 25000 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 265 ]
        }
    });
    var pezopora_tmimata_nodes = [
        document.getElementById('pezopora-tmimata-output-min'),
        document.getElementById('pezopora-tmimata-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    pezopora_tmimata_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        pezopora_tmimata_nodes[handle].innerHTML = values[handle];
        values = pezopora_tmimata_slider.noUiSlider.get();
        
        humanResourcesSearch.pezopora_tmimata.low = values[0];
        humanResourcesSearch.pezopora_tmimata.high = values[1];
    });





    noUiSlider.create(ethelontes_slider, {
        start: [ 15, 64 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 80 ]
        }
    });
    var ethelontes_nodes = [
        document.getElementById('ethelontes-output-min'),
        document.getElementById('ethelontes-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    ethelontes_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        ethelontes_nodes[handle].innerHTML = values[handle];
        values = ethelontes_slider.noUiSlider.get();
        
        humanResourcesSearch.ethelontes.low = values[0];
        humanResourcesSearch.ethelontes.high = values[1];
    });




    noUiSlider.create(stratos_slider, {
        start: [ 2000, 8200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 150 ]
        }
    });
    var stratos_nodes = [
        document.getElementById('stratos-output-min'),
        document.getElementById('stratos-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    stratos_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        stratos_nodes[handle].innerHTML = values[handle];
        values = stratos_slider.noUiSlider.get();
        
        humanResourcesSearch.stratos.low = values[0];
        humanResourcesSearch.stratos.high = values[1];
    });




    noUiSlider.create(alles_dinameis_slider, {
        start: [ 700, 3000 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 190 ]
        }
    });
    var alles_dinameis_nodes = [
        document.getElementById('alles-dinameis-output-min'),
        document.getElementById('alles-dinameis-output-max')
    ];
    
    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    alles_dinameis_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        alles_dinameis_nodes[handle].innerHTML = values[handle];
        values = alles_dinameis_slider.noUiSlider.get();
        
        humanResourcesSearch.alles_dinameis.low = values[0];
        humanResourcesSearch.alles_dinameis.high = values[1];
    });


    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    
    noUiSlider.create(pirosvestika_oximata_slider, {
        start: [ 100, 200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 324 ]
        }
    });
    var pirosvestika_oximata_nodes = [
        document.getElementById('pirosvestika-oximata-output-min'),
        document.getElementById('pirosvestika-oximata-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    pirosvestika_oximata_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        pirosvestika_oximata_nodes[handle].innerHTML = values[handle];
        values = pirosvestika_oximata_slider.noUiSlider.get();
        
        landVehiclesSearch.pirosvestika_oximata.low = values[0];
        landVehiclesSearch.pirosvestika_oximata.high = values[1]
    });

    noUiSlider.create(oximata_ota_slider, {
        start: [ 10, 40 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 60 ]
        }
    });
    var oximata_ota_nodes = [
        document.getElementById('oximata-ota-output-min'),
        document.getElementById('oximata-ota-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    oximata_ota_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        oximata_ota_nodes[handle].innerHTML = values[handle];
        values = oximata_ota_slider.noUiSlider.get();
        
        landVehiclesSearch.oximata_ota.low = values[0];
        landVehiclesSearch.oximata_ota.high = values[1]
    });

    noUiSlider.create(vitiofora_slider, {
        start: [ 4, 10 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 15 ]
        }
    });
    var vitiofora_nodes = [
        document.getElementById('vitiofora-output-min'),
        document.getElementById('vitiofora-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    vitiofora_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        vitiofora_nodes[handle].innerHTML = values[handle];
        values = vitiofora_slider.noUiSlider.get();
        
        landVehiclesSearch.vitiofora.low = values[0];
        landVehiclesSearch.vitiofora.high = values[1]
    });

    noUiSlider.create(mixanimata_slider, {
        start: [ 5, 15 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 26 ]
        }
    });
    var mixanimata_nodes = [
        document.getElementById('mixanimata-output-min'),
        document.getElementById('mixanimata-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    mixanimata_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        mixanimata_nodes[handle].innerHTML = values[handle];
        values = mixanimata_slider.noUiSlider.get();
        
        landVehiclesSearch.mixanimata.low = values[0];
        landVehiclesSearch.mixanimata.high = values[1]
    });


    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    

    noUiSlider.create(elikoptera_slider, {
        start: [ 100, 200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 324 ]
        }
    });
    var elikoptera_nodes = [
        document.getElementById('elikoptera-output-min'),
        document.getElementById('elikoptera-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    elikoptera_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        elikoptera_nodes[handle].innerHTML = values[handle];
        values = elikoptera_slider.noUiSlider.get();
        
        airVehiclesSearch.elikoptera.low = values[0];
        airVehiclesSearch.elikoptera.high = values[1]
    });
    

    noUiSlider.create(CL415_slider, {
        start: [ 100, 200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 324 ]
        }
    });
    var CL415_nodes = [
        document.getElementById('CL415-output-min'),
        document.getElementById('CL415-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    CL415_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        CL415_nodes[handle].innerHTML = values[handle];
        values = CL415_slider.noUiSlider.get();
        
        airVehiclesSearch.CL415.low = values[0];
        airVehiclesSearch.CL415.high = values[1]
    });
    

    noUiSlider.create(CL215_slider, {
        start: [ 100, 200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 324 ]
        }
    });
    var CL215_nodes = [
        document.getElementById('CL215-output-min'),
        document.getElementById('CL215-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    CL215_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        CL215_nodes[handle].innerHTML = values[handle];
        values = CL215_slider.noUiSlider.get();
        
        airVehiclesSearch.CL215.low = values[0];
        airVehiclesSearch.CL215.high = values[1]
    });
    

    noUiSlider.create(PZL_slider, {
        start: [ 100, 200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 324 ]
        }
    });
    var PZL_nodes = [
        document.getElementById('PZL-output-min'),
        document.getElementById('PZL-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    PZL_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        PZL_nodes[handle].innerHTML = values[handle];
        values = PZL_slider.noUiSlider.get();
        
        airVehiclesSearch.PZL.low = values[0];
        airVehiclesSearch.PZL.high = values[1]
    });
    

    noUiSlider.create(GRU_slider, {
        start: [ 100, 200 ],
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': [  0 ],
            'max': [ 324 ]
        }
    });
    var GRU_nodes = [
        document.getElementById('GRU-output-min'),
        document.getElementById('GRU-output-max')
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    GRU_slider.noUiSlider.on('change', function ( values, handle, unencoded, isTap, positions ) {
        GRU_nodes[handle].innerHTML = values[handle];
        values = GRU_slider.noUiSlider.get();
        
        airVehiclesSearch.GRU.low = values[0];
        airVehiclesSearch.GRU.high = values[1]
    });