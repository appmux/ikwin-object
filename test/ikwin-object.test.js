/* global describe, it */

'use strict'

const assert = require('assert')
const data = require('../lib/ikwin-object.js').default

let src = {
    "cms": {
        "global": {
            "header": {
                "navigation": {
                    "logo": {
                        "imageUri": "https://cdn11.example.com/images/logo.jpg",
                        "imageHdUri": "https://cdn11.example.com/images/logo-hd.jpg",
                        "alt": "ACME Corp.",
                        "link": "/"
                    },
                    "menu": {

                    }
                }
            },
            "footer": {
                "socialMedia": [
                    {
                        "name": "twitterUri",
                        "uri": "https://example.com/twitter",
                        "font": {
                            "name": "glyph-font.wof",
                            "code": ""
                        },
                        "youtubeUri": "https://exampler.com/youtube",
                        "facebookUri": "https://exampler.com/facebook",
                        "linkedinUri": "https://exampler.com/facebook"
                    }
                ]
            }
        }
    },
    "vpg": {
        "guest-selections": {
            "travelStyles": ["wdpr-wdw-o-vpg-q-style-generations"],
            "vacationChoices": [],
            "travelTimes": {
                "exact": {
                    "checkInDate": null,
                    "checkOutDate": null
                },
                "flexible": {
                    "seasonsId": "any-season"
                },
                "array": [
                    {"test": "elementOne"},
                    "elementTwo"
                ],
                "useFlexibleNotExact": true
            },
            "lastAvail": {},
            "partyMix": {
                "adultCount": 2,
                "kidCount": 0,
                "nonAdults": []
            },
            "recommendedSeason": null,
            "totalPrice": null
        }
    }
}

const src2 = {
    "data": {
        "kind": "Item",
        "items": [
            {
                "item_id": "f18da9ec-4f82-4bf1-acee-343862178421",
                "item_name": "Item One"
            },
            {
                "item_id": "b0532a03-3996-473c-89e0-f7948c830200",
                "item_name": "Item Two"
            },
            {
                "item_id": "8fa93d34-76de-4559-a602-5ef674578dc3",
                "item_name": "Item Three"
            },
            {
                "item_id": "8937cb21-910c-4023-95ae-f164d649e5b1",
                "item_name": "Item Four"
            },
            {
                "item_id": "0bdab395-a754-4e14-ab9a-cbd585c5c659",
                "item_name": "Item FIve"
            }
        ]
    }
}

const src2match = {items: [{item_id: '', item_name: ''}]}

let vo = {
    "foo": "bar",
    "vpg": {
        "guest-selections": {
            "travelStyles": [""],
            "vacationChoices": [],
            "travelTimes": {
                "exact": {
                    "checkInDate": {},
                    "checkOutDate_notMatching": 0
                },
                "flexible": {
                    "seasonsId": "any-season",
                    "doesNotExist": null
                },
                "array": [
                    {}
                ],
                "useFlexibleNotExact": true
            },
            "partyMix": {
                "adultCount": 2,
                "kidCount": 0,
                "nonAdults": []
            },
            "doesNotExist": null,
            "totalPrice": null
        }
    }
}

let fo = {
    "navigation": {
        "logo": {},
        "menu": {}
    }
}

describe('ikwin-object', function () {
    it('should match', function () {
        // console.log('did match?', data({t1: 'vt1', t2: 'vt2'}).match({t1: ''}))
        // console.log('did match?', data(src).contains(vo))
        // console.log('does validate?', data(src.cms.global.header).validate(fo))
        // console.log('does include?', data(src.cms.global.header).includes(fo))
        // console.log('did match?', data(src).match(fo))

        console.log('did match?', data(src2).match(src2match))

        // assert.equal('Two + 3 = Five', sprintf('%s + %d = %s', 'Two', 3, 'Five'))
        // assert.equal('/my/awesome/api/endpoint/number/1', sprintf('/my/%s/api/%s/number/%d', 'awesome', 'endpoint', 1))
    })
})
