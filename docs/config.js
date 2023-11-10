var config = {
    style: 'mapbox://styles/madgallop/clnz2tn5q009o01qpginjcvyx',
    accessToken: 'pk.eyJ1IjoibWFkZ2FsbG9wIiwiYSI6ImNsbmhzYzVnajE4eWsybm51bG43bjhuZWUifQ.PAvoy0phwrKGWDEBf75VSA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Jaffa Oranges',
    subtitle: "Agriculture, dispossession, and the shifting narrative of the orange groves of Palestine's ancient port city",
    byline: 'Madeleine Gallop',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Palestinian Era',
            //image: './path/to/image/source.png',
            //description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [34.75128, 32.05786],
                zoom: 12.33,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'grove-data',
                    filter: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        1,
                        ["1943"],
                        0,
                        ["1958"],
                        0,
                        0
                    ],
                    opacity: 1,
                    //duration: 5000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'grove-data',
                    opacity: 0
                }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Collaboration period',
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center: [34.75128, 32.05786],
                zoom: 12.33,
                pitch: 0.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'grove-data',
                    filter: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        0,
                        ["1943"],
                        1,
                        ["1958"],
                        0,
                        0
                    ],                    opacity: 1,
                    //duration: 5000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'grove-data',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Israeli Era',
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center: [34.75128, 32.05786],
                zoom: 12.33,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'grove-data',
                    filter: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        0,
                        ["1943"],
                        0,
                        ["1958"],
                        1,
                        0
                    ],                    opacity: 1,
                    //duration: 5000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'grove-data',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Destruction',
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center: [34.75128, 32.05786],
                zoom: 12.33,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
