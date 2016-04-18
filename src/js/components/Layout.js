import React from "react";
import ReactDOM from "react-dom";

export default class Layout extends React.Component{
    constructor(){
        super();
    }

    componentDidMount() {
        this.initMap();
    }
    
    initMap(){
        var i;
        var Locations = [
            {
                lat:48.856614,
                lon:2.3522219000000177,
                title:'Paris'
            },
            {
                lat: 55.7512419,
                lon: 37.6184217,
                title:'Moscow'
            },

            {
                lat:-9.481553000000002,
                lon:147.190242,
                title:'Papua New Guinea'
            },
            {
                lat:20.5200,
                lon:77.7500,
                title:'Indore, India'
            }
        ];

        var myOptions = {
            zoom: 2,
            center: new google.maps.LatLng(51.9000,8.4731),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), myOptions);

        var infowindow =  new google.maps.InfoWindow({
            content: ''
        });

        for (i = 0; i < Locations.length; i++) {
            var marker = new google.maps.Marker({
                map: map,
                title: Locations[i].title,
                position: new google.maps.LatLng(Locations[i].lat, Locations[i].lon)
            });

            bindInfoWindow(marker, map, infowindow, "<p>" + Locations[i].descr + "</p>",Locations[i].title);

        }

        function bindInfoWindow(marker, map, infowindow, html, Ltitle) {
            google.maps.event.addListener(marker, 'mouseover', function() {
                infowindow.setContent(html);
                infowindow.open(map, marker);

            });
            google.maps.event.addListener(marker, 'mouseout', function() {
                infowindow.close();

            });
        }
    }

    render() {
        return (
            <div class="container">
                <h1>Founders Map Quest</h1>
                <div class="form-horizontal">
                    <div class="form-group">
                        <label for="csvData" class="col-lg-2 control-label">CSV Data</label>
                        <div class="col-lg-10">
                            <textarea class="form-control" id="csvData"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="separator" class="col-lg-2 control-label">Column Separator</label>
                        <div class="col-lg-10">
                            <select id="separator" class="form-control">
                                <option value="comma">comma(,)</option>
                                <option value="semicolon">semicolon(;)</option>
                                <option value="tab">tab(&#09;)</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="btn btn-primary">Process data</div>
                <table class="table table-striped table-hover " >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Latitude</th>
                            <th>Longitude</th>
                            <th>Don't show</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Column content</td>
                            <td>78</td>
                            <td>56</td>
                            <td>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"/>
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Column content</td>
                            <td>456</td>
                            <td>667</td>
                            <td>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox"/>
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="form-group">
                    <label for="latitude-col" class="col-lg-2 control-label">Latitude Column</label>
                    <div class="col-lg-10">
                        <select id="latitude-col" class="form-control">
                            <option value="latitude">latitude</option>
                            <option value="longitude">longitude</option>
                            <option value="name">name</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="longitude-col" class="col-lg-2 control-label">Longitude Column</label>
                    <div class="col-lg-10">
                        <select id="longitude-col" class="form-control">
                            <option value="latitude">latitude</option>
                            <option value="longitude">longitude</option>
                            <option value="name">name</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label for="marker-col" class="col-lg-2 control-label">Marker Column</label>
                    <div class="col-lg-10">
                        <select id="marker-col" class="form-control">
                            <option value="latitude">latitude</option>
                            <option value="longitude">longitude</option>
                            <option value="name">name</option>
                        </select>
                    </div>
                </div>
                <div id="map" class="map-container"></div>
            </div>
        );
    }
}
