var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_building_1, 
                style: style_building_1,
                popuplayertitle: 'building',
                interactive: false,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_highway_2 = new ol.format.GeoJSON();
var features_highway_2 = format_highway_2.readFeatures(json_highway_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_2.addFeatures(features_highway_2);
var lyr_highway_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_2, 
                style: style_highway_2,
                popuplayertitle: 'highway',
                interactive: false,
                title: '<img src="styles/legend/highway_2.png" /> highway'
            });
var format_highway_3 = new ol.format.GeoJSON();
var features_highway_3 = format_highway_3.readFeatures(json_highway_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_highway_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_highway_3.addFeatures(features_highway_3);
var lyr_highway_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_highway_3, 
                style: style_highway_3,
                popuplayertitle: 'highway',
                interactive: false,
                title: '<img src="styles/legend/highway_3.png" /> highway'
            });

lyr_OSMStandard_0.setVisible(true);lyr_building_1.setVisible(true);lyr_highway_2.setVisible(true);lyr_highway_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_building_1,lyr_highway_2,lyr_highway_3];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'addr:postcode': 'addr:postcode', 'check_date': 'check_date', 'nohousenumber': 'nohousenumber', 'roof:shape': 'roof:shape', 'roof:levels': 'roof:levels', 'website': 'website', 'rooms': 'rooms', 'reservation': 'reservation', 'internet_access': 'internet_access', 'height': 'height', 'opening_hours': 'opening_hours', 'abandoned': 'abandoned', 'cuisine': 'cuisine', 'tourism': 'tourism', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'capacity': 'capacity', 'amenity': 'amenity', 'addr:street': 'addr:street', 'sport': 'sport', 'phone': 'phone', 'operator': 'operator', 'shop': 'shop', 'name:en': 'name:en', 'description': 'description', 'office': 'office', 'type': 'type', 'name': 'name', 'building:levels': 'building:levels', 'addr:housenumber': 'addr:housenumber', 'Address': 'Address', });
lyr_highway_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'access': 'access', });
lyr_highway_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'service': 'service', 'layer': 'layer', 'bridge': 'bridge', 'lane_markings': 'lane_markings', 'smoothness': 'smoothness', 'ref': 'ref', 'maxspeed:practical': 'maxspeed:practical', 'surface': 'surface', 'name': 'name', });
lyr_building_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'addr:postcode': 'TextEdit', 'check_date': 'TextEdit', 'nohousenumber': 'TextEdit', 'roof:shape': 'TextEdit', 'roof:levels': 'TextEdit', 'website': 'TextEdit', 'rooms': 'TextEdit', 'reservation': 'TextEdit', 'internet_access': 'TextEdit', 'height': 'TextEdit', 'opening_hours': 'TextEdit', 'abandoned': 'TextEdit', 'cuisine': 'TextEdit', 'tourism': 'TextEdit', 'addr:country': 'TextEdit', 'addr:city': 'TextEdit', 'capacity': 'TextEdit', 'amenity': 'TextEdit', 'addr:street': 'TextEdit', 'sport': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'shop': 'TextEdit', 'name:en': 'TextEdit', 'description': 'TextEdit', 'office': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'building:levels': 'TextEdit', 'addr:housenumber': 'TextEdit', 'Address': 'TextEdit', });
lyr_highway_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'foot': '', 'bicycle': '', 'barrier': '', 'access': '', });
lyr_highway_3.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'maxspeed': '', 'lanes': '', 'service': '', 'layer': '', 'bridge': '', 'lane_markings': '', 'smoothness': '', 'ref': '', 'maxspeed:practical': '', 'surface': '', 'name': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'addr:postcode': 'no label', 'check_date': 'no label', 'nohousenumber': 'no label', 'roof:shape': 'no label', 'roof:levels': 'no label', 'website': 'no label', 'rooms': 'no label', 'reservation': 'no label', 'internet_access': 'no label', 'height': 'no label', 'opening_hours': 'no label', 'abandoned': 'no label', 'cuisine': 'no label', 'tourism': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'capacity': 'no label', 'amenity': 'no label', 'addr:street': 'no label', 'sport': 'no label', 'phone': 'no label', 'operator': 'no label', 'shop': 'no label', 'name:en': 'no label', 'description': 'no label', 'office': 'no label', 'type': 'no label', 'name': 'no label', 'building:levels': 'no label', 'addr:housenumber': 'no label', 'Address': 'no label', });
lyr_highway_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'access': 'no label', });
lyr_highway_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'service': 'no label', 'layer': 'no label', 'bridge': 'no label', 'lane_markings': 'no label', 'smoothness': 'no label', 'ref': 'no label', 'maxspeed:practical': 'no label', 'surface': 'no label', 'name': 'no label', });
lyr_highway_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});